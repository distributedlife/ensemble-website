---
layout: documentation
---

# OnPlayerDisconnected `∞` `ev` `ƒ` `['*']`
The server executes this role when a client closes a socket connection. The return from this callback will mutate game state. The current game state comes as a parameter.

*Ensemblejs* comes with one `OnPlayerDisconnected` module loaded by default. It will decrement the number of players connected and pause the game. This is to handle game pausing for unexpected disconnects.

~~~javascript
'use strict';

module.exports = {
  type: 'OnPlayerDisconnected',
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

This plugin supports restricted execution to specific game modes. This [guide explains how to set this up](/docs/guides/restricted-execution.html).