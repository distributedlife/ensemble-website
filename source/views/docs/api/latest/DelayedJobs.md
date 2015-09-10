---
layout: documentation
---

# DelayedJobs
`Client` `Server` [`Mutates State`](/docs/guides/state.html)

This plugin let you execute code at some time in the future. The `add` function accepts four parameters: key, delayInSeconds, the plugin and the public function to call.

The `key` is a string that allows you to cancel the callback before it starts. The `delayInSeconds` is how much game time needs to elapse before the `onComplete` callback executes. Game-time differs from world-time in that a paused game does not change the game-time.

The `cancelAll` all function will cancel all delayed jobs with the key.

## Async
It's important to remember that the delayed jobs feature is async. This applies to the methods `cancelAll` and `add` functions. If you call `cancelAll` first and the `add` with the same key then when the job manager next runs it will cancel the job you just added. At present it's not possible to cancel a job with a specific key and then register a new one with the same key within the same frame. A workaround is to give each job a different key.

## Mutating State
Your callback can return any changes to the game state. *Ensemblejs* will mutate the state as required.

## Usage

~~~javascript
define()('GameBehaviour-Controller', function () {
  return {
    myCallback: function () {
      return {};
    }
  }
});

delayed().add(
  'pause-for-effect',
  3,
  'GameBehaviour-Controller',
  'myCallback'
);
delayed().cancellAll('pause-for-effect');
~~~