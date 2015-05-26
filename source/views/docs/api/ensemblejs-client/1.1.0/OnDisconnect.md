---
layout: documentation
---

# OnDisconnect `∞` `ev` `ƒ` `Ø`
The client will execute this functions when the client disconnects from the server.

~~~javascript
'use strict';

module.exports = {
  type: 'OnDisconnect',
  func: function () {
    return function () {
      // respond to event
    };
  }
};
~~~