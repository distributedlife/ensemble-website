---
layout: documentation
---

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
  Server->>SocketSupport:start
  SocketSupport->>SocketSupport:start socket server
  SocketSupport->>SocketSupport:setup connection handler
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
  Client-->>SocketSupport: each input event
  SocketSupport-->>OnInput: new input
  SocketSupport-->>StateMutator: AcknowledgementMap callback response
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
  Client-->>SocketSupport: pause event
  SocketSupport-->>SocketSupport: execute OnPause callbacks
  Client-->>SocketSupport: unpause event
  SocketSupport-->>SocketSupport: execute OnUnpause callbacks
  Client-->>SocketSupport: unpause event
  SocketSupport-->>SocketSupport: execute OnPlayerConnected callbacks
  Client-->>SocketSupport: unpause event
  SocketSupport-->>SocketSupport: execute OnPlayerDisconnected callbacks
</div>