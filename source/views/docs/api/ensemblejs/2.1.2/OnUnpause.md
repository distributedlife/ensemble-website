---
layout: documentation
---

# OnUnpause `∞` `ev` `ƒ`
The server executes this role when a client sends an unpause message. The return from this callback will mutate game state.

*Ensemblejs* comes with one `OnUnpause` module loaded by default. It will set the game state to not paused. This state will then propagate to all clients.

~~~javascript
'use strict';

module.exports = {
  type: 'OnUnpause',
  func: function () {
    return function () {
      return {};
    };
  }
};
~~~
