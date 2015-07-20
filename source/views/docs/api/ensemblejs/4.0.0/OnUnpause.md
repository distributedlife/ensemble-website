---
layout: documentation
---

# OnUnpause `∞` `ev` `ƒ` `['*']`
The server executes this role when a client sends an unpause message. The return from this callback will mutate game state. The current game state comes as a parameter.

*Ensemblejs* comes with one `OnUnpause` module loaded by default. It will set the game state to not paused. This state will then propagate to all clients.

~~~javascript
'use strict';

module.exports = {
  type: 'OnUnpause',
  func: function () {
    return function (state) {
      return function (state) {
        var myState = state.for('my-game').get('property');

        return {
          'my-game': {
            property: myState + 1;
          }
        };
      };
    };
  }
};
~~~

This plugin supports restricted execution to specific game modes. This [guide explains how to set this up](/website/docs/guides/restricted-execution.html).