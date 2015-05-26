---
layout: documentation
---
# ensemblejs-client

The ensemblejs-client library is one of two required parts of an ensemblejs based game. This library will take responsibility for a few things:

- connecting to the server using sockets
- handling disconnects
- notifying you when state changes
- invoking client side event callbacks as required
- handling game pause behaviour