---
layout: documentation
---

# OnUnmute `∞` `ev` `ƒ` `Ø`

Executed when the player unmutes the game. *Ensemblejs* handles muting and unmuting through UI controls and keyboard bindings. When the player invokes one of these methods this callback executes.

~~~javascript
'use strict';

module.exports = {
  type: 'OnUnmute',
  func: function () {
    return function () {
      // code
    };
  }
};
~~~