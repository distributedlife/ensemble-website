---
layout: documentation
---
# ensemblejs-client

The ensemblejs-client library is one of two required parts of an ensemblejs based game. This library will take responsibility for these things:

- connecting to the server using sockets
- handling disconnects
- notifying you when state changes
- invoking client side event callbacks as required
- handling game pause behaviour

# Client Sequence Diagrams

## Browser Start
<div class="mermaid">
sequenceDiagram
  /game.js-->>EnsembleJs: loadWindow
  /game.js-->>EnsembleJs: loadDefaults
  /game.js-->>EnsembleJs: run
  EnsembleJs-->>ClientSideAssembler: assembleAndRun
</div>

## ClientSideAssembler.assembleAndRun
<div class="mermaid">
sequenceDiagram
  ClientSideAssembler-->>OnInitialise: execute callback
  ClientSideAssembler-->>SocketBehaviour: connect
  ClientSideAssembler-->>UpdateLoop: run
</div>

## SocketBehaviour.connect
<div class="mermaid">
sequenceDiagram
  SocketBehaviour-->>SocketBehaviour: bind event callbacks
  SocketBehaviour-->>SocketBehaviour: bind window callbacks
  loop [120 times per second]
    SocketBehaviour-->>PendingAcknowledgements: flush
    SocketBehaviour-->>InputMode: get current state
    SocketBehaviour-->>Server: send packet
  end
</div>

## UpdateLoop.run
<div class="mermaid">
sequenceDiagram
  loop [requestAnimationFrame]
    UpdateLoop-->>OnEachFrame: call
  end
</div>

## State Updates
### Initial State
<div class="mermaid">
sequenceDiagram
  Server-->>SocketBehaviour: initialState
  SocketBehaviour-->>OnSetup: execute
  OnSetup-->>View: execute
</div>

### State Update
<div class="mermaid">
sequenceDiagram
  Server-->>SocketBehaviour: updateState
  SocketBehaviour-->>OnPacket: excute
  OnPacket-->>UpdateState: setLatestState
  UpdateState-->>StateTracker: detectChangesAndNotifyObservers
</div>

## Window Events
<div class="mermaid">
sequenceDiagram
  Window-->>OnResize: resize event
  Window-->>SocketBehaviour: blur event
  SocketBehaviour-->>Server: pause event
  Window-->>SocketBehaviour: focus event
  SocketBehaviour-->>Server: unpause event
  Window-->>SocketBehaviour: mousedown event
  SocketBehaviour-->>Server: unpause event
  Window-->>SocketBehaviour: mouseup event
  SocketBehaviour-->>Server: unpause event
</div>

## Other Events
<div class="mermaid">
sequenceDiagram
  Server-->>SocketBehaviour: connect event
  SocketBehaviour-->>SocketBehaviour: execute OnConnect callbacks
  Server-->>SocketBehaviour: disconnect event
  SocketBehaviour-->>SocketBehaviour: execute OnDisconnect callbacks
  Server-->>SocketBehaviour: pause event
  SocketBehaviour-->>SocketBehaviour: execute OnPause callbacks
  Server-->>SocketBehaviour: unpause event
  SocketBehaviour-->>SocketBehaviour: execute OnResume callbacks
</div>