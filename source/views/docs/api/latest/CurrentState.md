---
layout: documentation
---

# CurrentState
`Client`

As a consumer you can use the `CurrentState` to get the current game state. Like the [`StateTracker`](StateTracker.html), the `CurrentState` expects functions for most of it's input types. We do this so you can describe a path to a property in advance.

~~~javascript
var pathToState = function (state) {
  return state.game.players.count;
}

currentState().get(pathToState);
~~~