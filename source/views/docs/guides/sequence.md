---
layout: documentation
---

# A Sequence of Events

<div class="mermaid">
sequenceDiagram
  Facade->>Server: start
  Note right of Server: Configure app,<br/>routes,<br/>start http server<br/>and listen on port
  Server->>SocketSupport:start
  Note right of SocketSupport: Start socket server<br/>setup connection<br/>handler
  Facade-->>InitialiseState: initialise
  InitialiseState-->>StateMutator: StateSeed
  Facade-->>ServerSideEngine: run
  loop [120 times per second]
    ServerSideEngine-->>ServerSideUpdate: execute
    ServerSideUpdate-->>StateMutator: response
  end

</div>