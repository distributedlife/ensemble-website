---
layout: documentation
---

# InitialiseState `dep` `1` `{}`

The initialise state plugin will get all [`StateSeed`](StateSeed) modules and will execute each one passing their return values into the [`StateMutator`](StateMutator). This will prepare the game state for play. This will happen once per game.

## To Write your own.
This work is already done so you don't need to do anything. If you wanted to write your own then you need to adhere to this interface.

~~~javascript
'use strict';

module.exports = {
  type: 'InitialiseState',
  func: function () {
    return {
      initialise: function () {
        // your code here
      }
    };
  }
};
~~~

Any custom `InitialiseState` needs to load before the defaults load. Do this in the client side entrypoint.