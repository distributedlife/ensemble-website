---
layout: documentation
---

# OnInitialise `∞` `ev` `ƒ` `Ø`

The client executes this function during start up. As such this code executes once.

~~~javascript
'use strict';

module.exports = {
  type: 'OnInitialise',
  func: function () {
    return function () {
      // code
    };
  }
};
~~~