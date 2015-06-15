---
layout: documentation
---

# DelayedJobs `dep`, `1`, `{}`

This plugin let you request code to execute in the future. The add function accepts three parameters: key, delayInSeconds and an onComplete callback.

The `key` is a string that allows you to cancel the callback before it starts. The `delayInSeconds` is how much game time needs to elapse before the `onComplete` callback executes. Game-time differs from world-time in that a paused game does not change the game-time.

The `cancelAll` all function will cancel all delayed jobs with the key. Or, if there is no key it will cancel all jobs.

## To Write your own.
This work is already done so you don't need to do anything. If you wanted to write your own then you need to adhere to this interface.

~~~javascript
'use strict';

module.exports = {
  type: 'DelayedJobs',
  func: function () {
    return {
      add: function (key, delayInSeconds, onComplete) {},
      cancelAll: function (key) {}
    };
  }
};
~~~

Any custom `DelayedJobs` needs to load before the defaults load. Do this in the client side entrypoint.