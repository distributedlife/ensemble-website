---
layout: documentation
---
# Knowing when the game changes
*Ensemble* clients have unidirectional data bindings. This means that the client **cannot** change the state. All state changes come from the server. On the client, where your view happens, you'll want to notified when exciting things happen to your state.

This article covers all that.

## State Tracking
The first thing you need to do is bring the `StateTracker` dependency into your `OnClientReady` plugin.

~~~javascript
module.exports = {
  type: 'OnClientReady',
  deps: ['StateTracker'],
  func: function (tracker) {
  }
};
~~~

The `StateTracker` lets you do what its name suggestively suggests.

- `onChangeOf`: call me whenever that hunk of state changes.
- `onChangeTo`: call me whenever the hunk of state changes to a particular value.
- `onElementAdded`: call me whenever the array I care about gets a new value.
- `onElementChanged`: call me whenever the array I care about has a value change.
- `onElementRemoved`: call me whenever the array I care about loses a new value.

## Hunks and functional parameters
Each of the functions, as its first parameter, accepts a function that tells the tracker where to find the state.

These functions take the `state` as a parameter an then *dot* their way down to the appropriate properties. Be specific and pay no heed to the *Law of Demeter*.

~~~javascript
var theCircleWidth = function (state) { return state.circle.width; };
~~~

## Arrays, Elements and Ids
It's possible to track when you add, removed or change an element within an array. To do this every element in the array needs to have an id property. At it's simplest your array must look like this:

~~~javascript
var myArray = [{id: 1}, {id: 2}]
~~~

The id property must be unique within the array.

## Callbacks
When your condition comes true the `StateTracker` will call your function. It'll also send across some super-useful data. The first parameter is the currentValue, the next is the priorValue. The priorValue is *undefined* if there is no prior value.

~~~javascript
var onPropertyChange = function (model, priorModel) {};
~~~

If you are tracking the changes in an array then the callback will change for each element added, changed or removed. The id value for the array element is always the first parameter.

~~~javascript
var onElementAdded = function (id, element) {};
var onElementChanged = function (id, currentValue, priorValue) {};
var onElementRemoved = function (id, element) {};
~~~


## Sending your own data
Times occur, admittedly often, when you want to ship some of your own data to the callback as well. Every `StateTracker` function, as its last parameter, accepts a data attribute. If you send a single variable then it gets passed through. If you send an array, then each individual paramter will come across separately.

Examples ahoy!

### A single data value

~~~javascript
var show = function (model, priorModel, indicator) {
  indicator.changeColour(colour('grey'));
};

tracker().onChangeTo(theGameState, equals('ready'), show, indicator);
~~~


### An array of data values

~~~javascript
var showChallenge = function (model, priorModel, indicator, sound) {
  goSound.play();
  indicator.changeColour(colour('green'));
};

tracker().onChangeTo(
  theGameState,
  equals('challengeStarted'),
  showChallenge,
  [
    indicator,
    sound
  ]
);
~~~

### I don't need no stinking extra data
Don't send it in. It's JavaScript; parameters are optional.

~~~javascript
var doSomethingGreat = function (model, priorModel) {

};

tracker().onChangeOf(thePlayerScore, doSomethingGreat);
~~~