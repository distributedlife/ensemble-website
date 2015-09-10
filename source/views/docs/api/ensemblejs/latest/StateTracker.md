---
layout: documentation
---

# StateTracker
`Client`

As a consumer you will use the `StateTracker` to request notifications to state changes. The `StateTracker` receives updates to the game state. It works out if any of your changes have occurred.

The best information on how to use the `StateTracker` is here: [Knowing when the game changes](/docs/guides/tracking-state-changes.html).

The `StateTracker` expects functions for most of it's input types. We do this so you can describe a path to a property in advance.

~~~javascript
var pathToState = function (state) {
  return state.namespace.players.count;
}
~~~

## API
This work is already done so you don't need to do anything. If you wanted to write your own then you need to adhere to this interface.

~~~javascript
module.exports = {
  type: 'StateTracker',
  func: function StateTracker () {
    return {
      onChangeOf: function (model, callback, data) {},
      onChangeTo: function (model, condition, callback, data) {},
      onElementChanged: function (focusArray, callback, data) {},
      onElementAdded: function (focusArray, onCallback, existingCallback, data) {},
      onElementRemoved: function (focusArray, callback, data) {}
    };
  }
};
~~~

- onChangeOf: when the state the `model` points to changes invoke the `callback` and passes in the extra `data`. The data parameter is an array that spreads into separate parameters in the callback.
- onChangeTo: when the state the `model` points to changes and the `condition` function returns true with the supplied state, invoke the `callback` and passes in the extra `data`. The data parameter is an array that spreads into separate parameters in the callback.

~~~javascript
var onChangeOf = function (currentBalue, priorValue, data, ...) {};
var onChangeTo = function (currentValue, priorValue, data, ...) {};
~~~

- onElementChanged: when the state the `focusArray` points to changes invoke the `callback` and passes in the extra `data`. The data parameter is an array that spreads into separate parameters in the callback.
- onElementAdded: when the state the `focusArray` points to gets a new element invoke the `callback` and passes in the extra `data`. The `existingCallback` executes immediately with the current the array. The data parameter is an array that spreads into separate parameters in the callback.
- onElementRemoved: when the state the `focusArray` points to lose an element invoke the `callback` and passes in the extra `data`. The data parameter is an array that spreads into separate parameters in the callback.

When tracking the changes in an array then the callback will change for each element added, changed or removed. The id value for the array element is always the first parameter.

~~~javascript
var onElementAdded = function (id, element, data, ...) {};
var onElementChanged = function (id, currentValue, priorValue, data, ...) {};
var onElementRemoved = function (id, element, data, ...) {};
~~~