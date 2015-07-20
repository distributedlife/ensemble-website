---
layout: documentation
---

# OnEachFrame `∞` `ev` `ƒ` `Ø`

The client will execute this function on every frame the game is not paused. When called the function will receive a single parameter containing the elapsed game time since the last frame. This time does not include any time the game was paused.

~~~javascript
'use strict';

module.exports = {
  type: 'OnEachFrame',
  func: function () {
    return function (delta) {
      //your code.
    };
  }
};
~~~