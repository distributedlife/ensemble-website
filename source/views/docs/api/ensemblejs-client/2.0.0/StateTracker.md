---
layout: documentation
---

# StateTracker  `dep`, `1`, `{}`

As a consumer you will use the `StateTracker` to request notifications to state changes. The `StateTracker` receives updates to the game state. It works out if any of your changes have occurred.

The best information on how to use the `StateTracker` is here: [Knowing when the game changes](/docs/guides/tracking-state-changes.html).

The `StateTracker` expects functions for most of it's input types. We do this so you can describe a path to a property in advance.

~~~javascript
var pathToState = function (state) {
  return state.game.players.count;
}
~~~

## To Write your own
This work is already done so you don't need to do anything. If you wanted to write your own then you need to adhere to this interface.

~~~javascript
'use strict';

module.exports = {
  type: 'StateTracker',
  func: function () {
    return {
      get: function (model) {},
      onChangeOf: function (model, callback, data) {},
      onChangeTo: function (model, condition, callback, data) {},
      onElementChanged: function (focusArray, callback, data) {},
      onElementAdded: function (focusArray, onCallback, existingCallback, data) {},
      onElementRemoved: function (focusArray, callback, data) {}
    };
  }
};
~~~

- get: returns the state the `model` points to
- onChangeOf: when the state the `model` points to changes invoke the `callback` and pass in the extra `data`.
- onChangeTo: when the state the `model` points to changes and the `condition` function returns true with the supplied state, invoke the `callback` and pass in the extra `data`.
- onElementChanged: when the state the `focusArray` points to changes invoke the `callback` and pass in the extra `data`.
- onElementAdded: when the state the `focusArray` points to gets a new element invoke the `callback` and pass in the extra `data`. The `existingCallback` executes immediately with the current the array.
- onElementRemoved: hen the state the `focusArray` points to lose an element invoke the `callback` and pass in the extra `data`.

When tracking the changes in an array then the callback will change for each element added, changed or removed. The id value for the array element is always the first parameter.

~~~javascript
var onElementAdded = function (id, element) {};
var onElementChanged = function (id, currentValue, priorValue) {};
var onElementRemoved = function (id, element) {};
~~~

Any custom `StateTracker` needs to load before the defaults load. Do this in the client side entrypoint.