---
layout: documentation
---

# Click to Change Demeanour

Now that we have client side code to render our ball based on it's position and demeanour it's time for us add some interactivity. The client code automatically captures input and sends it to the server. It's on the server we make a decision to do anthing with it.

We write an [action map](/website/docs/actions) to pair the input `button1` with our code `changeColour`.

~~~javascript
//./game/js/modes/game.js
define()('ActionMap', function () {
  return {
    'button1': [{target: behaviour().changeColour, onRelease: true}]
  };
});
~~~

The `onRelease` flag says that we want the function to fire when the mouse button releases, rather than pressed.

The action map makes reference to two things. The first is a function called `behaviour` and the second is to a function called `changeColour`. If you look at the boilerplate code in this file you'll see a line like this `deps: ['DefinePlugin']`. We need to change this to pass in our new behaviour.

Update your code to look lie this:

~~~javascript
module.exports = {
  type: 'BouncingBallGame',
  deps: ['DefinePlugin', 'BouncingBallGame-Behaviour'],
  func: function(define, behaviour) {
    return function() {
      //...
    };
  }
};
~~~

Now we need to make this `BouncingBallGame-Behaviour` plugin.

~~~javascript
// ./game/js/logic/ball-behaviour.js
'use strict';

module.exports = {
  type: 'BouncingBallGame-Behaviour',
  deps: ['StateAccess'],
  func: function (state) {
~~~

Our code needs access to the current game state. This access is read-only.

~~~javascript
    return {
      changeColour: function () {
        var ball = state().get('bouncing-ball-game')('ball');
~~~

This is how we get the current ball object. The `state` object always returns a specific value like a `String`, `Number` or `Array` or a function if the underlying object is a `Hash`.

The code below returns the state change we want to happen. Whenever this function executes the demeanour of the ball switches from `happy` to `angry` and on the next execution, back to `happy`.

You don't manipulate [state](/website/docs/state) directly in *ensemble*. You return the change you want and the framework will make it happen.

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

# Loading your code

Now we have a new file we need to tell *ensemble* to load it. We do this inthe client side entrypoint. For our demo that code is: `/game/js/modes/game.js`

~~~javascript
entryPoint.load(require('./views/bouncing-ball'));
entryPoint.load(require('./logic/ball-behaviour'));
entryPoint.run();
~~~

# Running the Code.
Now, when you run the code you can click to change the colour of the ball.

~~~shell
gulp local
open http://localhost:3000
~~~