---
layout: documentation
---
# [Knowing when the game changes](#knowing-when-the-game-changes)
*Ensemble* clients have unidirectional data bindings. This means that the client **cannot** change the state. All state changes come from the server. On the client, where your view happens, you'll want to notified when exciting things happen to your state.

This article covers all that.

## [State Tracking](#state-tracking)
The first thing you need to do is bring the `StateTracker` dependency into your `View` plugin.

~~~javascript
module.exports = {
  type: 'View',
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

## [Hunks and functional parameters](#hunks-and-functional-parameters)
Each of the functions, as its first parameter, accepts a function that tells the tracker where to find the state.

These functions take the `state` as a parameter an then *dot* their way down to the appropriate properties. Be specific and pay no heed to the *Law of Demeter*.

~~~javascript
var theCircleWidth = function (state) { return state.circle.width; };
~~~

## [Callbacks](#callbacks)
When your condition comes true the `StateTracker` will call your function. It'll also send across some super-useful data. The first parameter is the currentValue, the next is the priorValue. The priorValue is *undefined* if there is no prior value.

~~~javascript
var onPropertyChange = function (model, priorModel) {};
var onArrayChange = function (element, priorElement) {};
~~~

## [Sending your own data](#sending-your-own-data)
Times occur, admittedly often, when you want to ship some of your own data to the callback as well. Every `StateTracker` function, as its last parameter, accepts a data attribute. If you send a single variable then it gets passed through. If you send an array, then each individual paramter will come across separately.

Examples ahoy!

### [A single data value](#a-single-data-value)

~~~javascript
var show = function (model, priorModel, indicator) {
  indicator.changeColour(colour('grey'));
};

tracker().onChangeTo(theGameState, equals('ready'), show, indicator);
~~~


### [An array of data values](#an-array-of-data-values)

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

### [I don't need no stinking extra data](#i-dont-need-no-stinking-extra-data)
Don't send it in. It's JavaScript; parameters are optional.

~~~javascript
var doSomethingGreat = function (model, priorModel) {

};

tracker().onChangeOf(thePlayerScore, doSomethingGreat);
~~~