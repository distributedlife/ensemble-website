---
layout: documentation
---

# OnPlayerConnected `∞` `ev` `ƒ`
The server executes this role when each client establishes a socket connection. The return from this callback will mutate game state.

*Ensemblejs* comes with one `OnPlayerConnected` module loaded by default. It will increment the number of players connected.

~~~javascript
'use strict';

module.exports = {
  type: 'OnPlayerConnected',
  func: function () {
    return function () {
      return {};
    };
  }
};
~~~

