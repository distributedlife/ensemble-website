---
layout: documentation
---

# OnResize `∞` `ev` `ƒ` `Ø`

This function executes whenever the screen resizes. *Ensemblejs* calculates the new [`Dimensions`](Dimensions) for the screen and passes them to the callback.

~~~javascript
'use strict';

module.exports = {
  type: 'OnResize',
  func: function () {
    return function (dims) {
      // code
    };
  }
};
~~~