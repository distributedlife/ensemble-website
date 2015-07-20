---
layout: documentation
---

# CurrentState  `dep`, `1`, `{}`

As a consumer you can use the `CurrentState` to get the current game state. Like the [`StateTracker`](), the `CurrentState` expects functions for most of it's input types. We do this so you can describe a path to a property in advance.

~~~javascript
var pathToState = function (state) {
  return state.game.players.count;
}
~~~

## To Write your own
This work is already done so you don't need to do anything. If you wanted to write your own then you need to adhere to this interface.

~~~javascript
'use strict';

module.exports = {
  type: 'CurrentState',
  func: function () {
    return {
      get: function (model) {}
    };
  }
};
~~~

- get: returns the state the `model` points to.