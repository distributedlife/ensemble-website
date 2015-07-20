---
layout: documentation
---
# Responding to user input
User input is automatically sent over the wire. The server will tell you when input has come in. The action map is how you execute code based on the player interacting with your game. For each mode you have the ability to map user input to functions. When user submits input on the client, the server invokes the function.

The action map can specify keys, mouse movement and clicks, touches and game controllers. The action map is also used to call a function when there is no input.

**Note**: The current limit to the number of simultaneous distinct key events is 6.

## An example
The following example shows how to define an action map. Register the action map as a plugin. Do this during the game mode setup.

~~~javascript
module.exports = {
  type: 'ActionMap',
  func: function () {
    return {
      'space': [{target: jump(), onRelease: true}],
      'a': [{target: left()}],
      'd': [{target: right()}],
    };
  }
};
~~~

This plugin supports restricted execution to specific game modes. This [guide explains how to set this up](/website/docs/guides/restricted-execution.html).

## Multiple Callbacks
When defining an input mapping it's possible to supply more than one function for each key. Consider a game where each time the player shoots they suffer fatigue. This could be the same function, but it's best if it it's not.

All action maps bindings accept an array.

~~~javascript
{
  'space': [
    {target: shoot()},
    {target: fatigue()}
  ]
}
~~~

## Standard Callback Data
Each callback gets some optional, specific data for the event. This may be the x and y coordinate of the mouse or the force of the gamepad stick. All callbacks regardless of their type get an extra object with some standard information about the callback.

~~~javascript
var data = {
  rcvdTimestamp: //timestamp when the server received the event,
  delta: //the time since the last update loop, not the time since the last input event of this type.
};
~~~

## Keyboard
Keyboard input comes in two flavours. The onRelease: with one event per press. The second is continual: the event repeats continually until the user releases the key.

When defining your keymap, use the onRelease flag to declare which events are keypresses and which are continual. In the example below: the player's avatar will jump once each `space` press. The keys `a` and `d` map to continual functions.

~~~javascript
var jump = function (state, data) {};
var left = function (state, data) {};
var right = function (state, data) {};

{
  'space': [{target: jump(), onRelease: true}],
  'a': [{target: left()}],
  'd': [{target: rigth()}]
};
~~~

The following keys use special strings:

  - tab
  - control
  - alt
  - escape
  - space
  - left
  - up
  - right
  - down

All other keys are their ASCII label.

**Note**: All strings need to be in lowercase.

## Mouse Buttons
Mouse buttons behave the same way as keys. Ensemblejs handles mouse clicks the same was as a keypress. This means you can use the onRelease flag for a single event or leave it off for continual events whilst the button is down.

~~~javascript
var shoot = function (state, data) {};
var duck = function (state, data) {};

{
  'primary': [{target: shoot()}],
  'primary': [{target: duck(), onRelease: true}]
}
~~~

Support exists for the following buttons:

  - primary – the primary (left) button
  - secondary – the contextual-menu (right) button
  - tertiary – A third mouse button if available

## Anchor Actions
You can annotate HTML elements to fire action events as well. These are anchor actions and use the same syntax as keys and mouse buttons. Any element will work. Use the `data-action` property to map back to your action map.

~~~jade
span.my-action(data-action="pew-pew") Fire!
~~~

Unlike other action maps, we bind this input after you add the element to your view. Use the `AnchorAction` plugin to do the work.

~~~javascript
var anchorActions = require('anchor-actions.jade');
$('#overlay').append(anchorActions());
anchorAction().add($('.my-action'));
~~~

Your action map is familar.

~~~javascript
var shoot = function (state, data) {};

{
  'pew-pew': [{target: shoot()}],
}
~~~

## Mouse Movement
Mouse movement is a separate event that repeats regardless of whether the mouse has moved.

~~~javascript
var moveCamera = function (state, x, y, data) {}

{
  'cursor': [{target: moveCamera()}]
}
~~~

**Note**: *Mouse movement events never influence the no event callback.*

## Touches
Touch input is different to other input methods because you are binding to each the order of concurrent touches. `touch0` is the first touch and `touch1` is the second touch, when started before `touch0` completes. Otherwise `touch1` comes across the wire as `touch0`.

~~~javascript
var verify = function (state, x, y, data) {}

{
  'touch0': [{target: verify()}]
}
~~~

## No Input
To receive a callback when no input occurred we mark normal input event bindings with a special key: `noEventKey`. If any of the bindings marked with the key receive input our no event callback is not executed. If none of the bindings receive input then our no event callback executes.

Most input types will accept a noEventKey. This allows you to select which inputs will influence the `nothing` callback. The mouse movement input type does not influence the no event callback.

In the example below, if `space` is not pressed, the `umm` callback executes. If the screen is not touched then the `umm2` callback executes.

~~~javascript
var umm = function (state, data) {}

{
  'space': [
    {target: shoot(), noEventKey: 'Alpha'}
  ],
  'touch0': [{target: verify(), noEventKey: 'Beta'}]
  'nothing': [
    {target: umm(), noEventKey: 'Alpha'},
    {target: umm2(), noEventKey: 'Beta'}
  ]
}
~~~