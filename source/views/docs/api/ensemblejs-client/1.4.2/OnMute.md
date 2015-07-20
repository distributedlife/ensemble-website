---
layout: documentation
---

# OnMute `∞` `ev` `ƒ` `Ø`

Executed when the player mutes the sound. *Ensemblejs* handles muting and unmuting through UI controls and keyboard bindings. When the player invokes one of these methods this callback executes.

~~~javascript
'use strict';

module.exports = {
  type: 'OnMute',
  func: function () {
    return function () {
      // code
    };
  }
};
~~~