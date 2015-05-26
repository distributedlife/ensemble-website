---
layout: documentation
---

# UpdateLoop `dep`, `1`, `{}`
The update loop causes the [`OnEachFrame`](OnEachFrame) plugins to execute. It calculates the delta time for these plugins. The update loop uses the `requestAnimationFrame` feature of browsers to schedule itself.

## To Write your own
This work is already done so you don't need to do anything. If you wanted to write your own then you need to adhere to this interface.

~~~javascript
'use strict';

module.exports = {
  type: 'UpdateLoop',
  func: function () {
    return {
      run: function () {
        //code
      }
    };
  }
};
~~~

Any custom `UpdateLoop` needs to load before the defaults load. Do this in the client side entrypoint.