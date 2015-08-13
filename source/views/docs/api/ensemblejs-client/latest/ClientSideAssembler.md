---
layout: documentation
---

# ClientSideAssembler `1` `dep` `Ø` `{}`

When called this code will call the [`OnInitialise`](OnInitialise.html) callbacks. After they are complete it tells the [`UpdateLoop `](UpdateLoop.html) to run.

## To Write your own.
This work is already done so you don't need to do anything. If you wanted to write your own then you need to adhere to this interface.

~~~javascript
'use strict';

module.exports = {
  type: 'ClientSideAssembler',
  func: function () {
    return {
      assembleAndRun: function () {
        // your code here
      }
    };
  }
};
~~~

Any custom `ClientSideAssembler` needs to load before the defaults load. Do this in the client side entrypoint.