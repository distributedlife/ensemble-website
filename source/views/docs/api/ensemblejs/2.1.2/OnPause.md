---
layout: documentation
---

# OnPause `∞` `ev` `ƒ`
The server executes this role when a client sends a pause message. The return from this callback will mutate game state.

*Ensemblejs* comes with one `OnPause` module loaded by default. It will set the game state to paused. This state will then propagate to all clients.

~~~javascript
'use strict';

module.exports = {
  type: 'OnPause',
  func: function () {
    return function () {
      return {};
    };
  }
};
~~~
