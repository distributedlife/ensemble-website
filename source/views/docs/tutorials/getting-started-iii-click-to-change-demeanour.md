---
layout: documentation
---

# Part III - Click to Change Demeanour

Now that we have client side code to render our ball based on it's position and demeanour it's time for us add some interactivity. The client code automatically captures input and sends it to the server. It's on the server we make a decision to do anthing with it.

The first step is to write our new behaviour.

~~~javascript
// ./game/js/logic/ball-behaviour.js
'use strict';

module.exports = {
  type: 'BouncingBallGame-Behaviour',
  func: function () {
~~~

Call the module something meaningful. We'll need the name later.

~~~javascript
    return {
      changeColour: function (state) {
        var ball = state.for('bouncing-ball-game').get('ball');
~~~

This is how we get the current ball object. The `state` object always returns a specific value like a `String`, `Number` or `Array` or a function if the underlying object is a `Hash`. In all places where the framework integrates without code and you can influence state, the framework supplies the current state as a parameter.

The code below returns the state change we want to happen. Whenever this function executes the demeanour of the ball switches from `happy` to `angry` and on the next execution, back to `happy`.

You don't manipulate [state](/docs/guides/state.html) directly in *ensemble*. You return the change you want and the framework will make it happen.

~~~javascript
        return {
          'bouncing-ball-game': {
            ball: {
              demeanour: ball('demeanour') === 'happy' ? 'angry' : 'happy'
            }
          }
        };
      }
    };
  }
};
~~~

## Linking it together

We write an [action map](/docs/guides/actions.html) to pair the input `button1` with our code `changeColour`. The convention is to put this in the `game/js/maps` folder. You can name this whatever you like. I use `action-map.js` here.

~~~javascript
//./game/js/maps/action-map.js

module.exports = {
  type: 'ActionMap',
  deps: ['BouncingBallGame-Behaviour'],
  func: function(behaviour) {
    return {
      'button1': [{target: behaviour().changeColour, onRelease: true}]
    };
  }
}
~~~

The `onRelease` flag says that we want the function to fire when the mouse button releases, rather than pressed.

The action map makes reference to two things. The first is a function called `behaviour` and the second is to a function called `changeColour`. The behaviour function is our plugin we wrote first.

# Running the Code
Now, when you run the code you can click to change the colour of the ball.

~~~shell
gulp local
open http://localhost:3000
~~~

# Get Moving
In the next step we'll make the ball move around the game world.

[Getting Started, Part IV - Bouncing that Ball](/docs/tutorials/getting-started-iv-bouncing-that-ball.html)