---
layout: documentation
---
# ensemblejs

The ensemblejs library is one of two required parts of an ensemblejs based game. This library will take responsibility for these things:

- Starting the web server
- Starting the socket server
- Running game logic
- State management
- Handling players, games, sessions, etc

In short, most of the game is here. The [client](/docs/api/ensemblejs-client/about.html) is just for rendering game state.

# Server Sequence Diagrams

## Application Start
<div class="mermaid">
sequenceDiagram
  Entry Point-->>Entry Point: load DelayedJobs
  Entry Point-->>Entry Point: load OnInput handler
  Entry Point-->>Server: start
  Entry Point-->>InitialiseState: initialise
  Entry Point-->>ServerSideEngine: run
</div>

## Server.start
<div class="mermaid">
sequenceDiagram
  Entry Point->>Server: start
  Server->>Server: configure routes
  Server->>Server: start http server
  Server->>SocketServer:start
  SocketServer->>SocketServer:start socket server
  SocketServer->>SocketServer:setup connection handler
</div>

## InitialiseState
<div class="mermaid">
sequenceDiagram
  Entry Point-->>InitialiseState: initialise
  InitialiseState-->>StateMutator: StateSeed
  StateMutator-->>StateMutator: mutate state
</div>

## ServerSideEngine.run
<div class="mermaid">
sequenceDiagram
  Entry Point-->>ServerSideEngine: run
  loop [120 times per second]
    ServerSideEngine-->>ServerSideUpdate: execute
    ServerSideUpdate-->>StateMutator: response
    StateMutator-->>StateMutator: mutate state
  end
</div>

## OnInput

### Accept events from clients and queue them

<div class="mermaid">
sequenceDiagram
  Client-->>SocketServer: each input event
  SocketServer-->>OnInput: new input
  SocketServer-->>StateMutator: AcknowledgementMap callback response
  StateMutator-->>StateMutator: mutate state
</div>

### Process queued events during update loop

<div class="mermaid">
sequenceDiagram
  ServerSideUpdate-->>OnInput: update
  OnInput-->>OnInput: check for queued input
  OnInput-->>OnInput: parse keys
  OnInput-->>OnInput: parse mouse
  OnInput-->>OnInput: parse touch
  OnInput-->>StateMutator: ActionMap callback response
  StateMutator-->>StateMutator: mutate state
</div>

## Other Events
<div class="mermaid">
sequenceDiagram
  Client-->>SocketServer: pause event
  SocketServer-->>SocketServer: execute OnPause callbacks
  Client-->>SocketServer: unpause event
  SocketServer-->>SocketServer: execute OnUnpause callbacks
  Client-->>SocketServer: unpause event
  SocketServer-->>SocketServer: execute OnPlayerConnected callbacks
  Client-->>SocketServer: unpause event
  SocketServer-->>SocketServer: execute OnPlayerDisconnected callbacks
</div>

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