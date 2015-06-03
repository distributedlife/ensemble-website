---
layout: documentation
---

# A Sequence of Events

## Application Start
<div class="mermaid">
sequenceDiagram
  Entry Point->>Server: start
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
</div>

## ServerSideEngine.run
<div class="mermaid">
sequenceDiagram
  Entry Point-->>ServerSideEngine: run
  loop [120 times per second]
    ServerSideEngine-->>ServerSideUpdate: execute
    ServerSideUpdate-->>StateMutator: response
  end
</div>