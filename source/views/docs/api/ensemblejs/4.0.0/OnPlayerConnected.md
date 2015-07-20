---
layout: documentation
---

# OnPlayerConnected `∞` `ev` `ƒ` `['*']`
The server executes this role when each client establishes a socket connection. The return from this callback will mutate game state. The current game state comes as a parameter.

*Ensemblejs* comes with one `OnPlayerConnected` module loaded by default. It will increment the number of players connected.

~~~javascript
'use strict';

module.exports = {
  type: 'OnPlayerConnected',
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