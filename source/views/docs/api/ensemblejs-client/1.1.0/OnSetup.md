---
layout: documentation
---

# OnSetup [`[*]`](#arrays) [`e`](#events) [`ƒ`](#functions)

The client executes this role when the client connects. The function receives a single parameter containing the initial game state. The state is mutatable with changes resulting in undefined behaviour.

~~~javascript
'use strict';

module.exports = {
  type: 'OnSetup',
  func: function () {
    return function (state) {
      //your code.
    };
  }
};
~~~