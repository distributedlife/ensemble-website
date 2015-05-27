---
layout: documentation
---

# OnPlayerDisconnected `∞` `ev` `ƒ`
The server executes this role when a client closes a socket connection. The return from this callback will mutate game state.

*Ensemblejs* comes with one `OnPlayerDisconnected` module loaded by default. It will decrement the number of players connected and pause the game. This is to handle game pausing for unexpected disconnects.

~~~javascript
'use strict';

module.exports = {
  type: 'OnPlayerDisconnected',
  func: function () {
    return function () {
      return {};
    };
  }
};
~~~

