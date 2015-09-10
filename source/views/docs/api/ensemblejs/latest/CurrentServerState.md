---
layout: documentation
---

# CurrentServerState
`Client`

As a consumer you can use the `CurrentServerState` to get the current game state as it exists on the server. This is the game state that does not have any input received by the client and not processed by the server. This is the true state of the world but suffers a lag equal to the roundtrip time from the client to the server.

Like the [`StateTracker`](StateTracker.html), the `CurrentServerState` expects functions for most of it's input types. We do this so you can describe a path to a property in advance.

~~~javascript
var pathToState = function (state) {
  return state.game.players.count;
}

currentState().get(pathToState);
~~~