---
layout: documentation
---

# OnPause `∞` `ev` `ƒ` `['*']`
The server executes this role when a client sends a pause message. The return from this callback will mutate game state. The current game state comes as a parameter.

*Ensemblejs* comes with one `OnPause` module loaded by default. It will set the game state to paused. This state will then propagate to all clients.

~~~javascript
'use strict';

module.exports = {
  type: 'OnPause',
  func: function () {
    return function (state) {
      var myState = state.for('my-game').get('property');

      return {
        'my-game': {
          property: myState + 1;
        }
      };
    };
  }
};
~~~

This plugin supports restricted execution to specific game modes. This [guide explains how to set this up](/website/docs/guides/restricted-execution.html).