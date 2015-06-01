---
layout: documentation
---

# A Sequence of Events

<div class="mermaid">
sequenceDiagram
  Facade->>Server: start
  Server->>Server: configure routes
  Server->>Server: start http server
  Server->>SocketSupport:start
  SocketSupport->>SocketSupport:start socket server
  SocketSupport->>SocketSupport:setup connection handler
  Facade-->>InitialiseState: initialise
  InitialiseState-->>StateMutator: StateSeed
  Facade-->>ServerSideEngine: run
  loop [120 times per second]
    ServerSideEngine-->>ServerSideUpdate: execute
    ServerSideUpdate-->>StateMutator: response
  end

</div>