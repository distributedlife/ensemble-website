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

In short, most of the game is here. The [client](/website/docs/api/ensemblejs-client/about) is just for rendering game state.