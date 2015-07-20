---
layout: documentation
---

# RegisterEffect `dep`, `1`, `{}`

The effect systems allows you to schedule code that will run for a period of time and then get cleaned up once it's finished. The plugin has a single function that accepts an effect. Each effect needs two methods:

- tick: receives a delta each frame
- isAlive: when this function returns false the effect ends


## To Write your own
This work is already done so you don't need to do anything. If you wanted to write your own then you need to adhere to this interface.

~~~javascript
'use strict';

module.exports = {
  type: 'RegisterEffect',
  func: function () {
    return {
      register: function (effect) {
        //code
      }
    };
  }
};
~~~

Any custom `RegisterEffect` needs to load before the defaults load. Do this in the client side entrypoint.