---
layout: documentation
---

# OnConnect `∞` `ev` `ƒ` `Ø`
The client will execute this functions when the client connects to the server.

~~~javascript
'use strict';

module.exports = {
  type: 'OnConnect',
  func: function () {
    return function () {
      // respond to event
    };
  }
};
~~~