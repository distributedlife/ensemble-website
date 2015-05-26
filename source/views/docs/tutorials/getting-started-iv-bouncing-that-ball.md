---
layout: documentation
---

# [Bouncing That Ball](#bouncing-the-ball)

Let's make our ball bounce around over time. We do this by updating the position on the server. Our existing client code is good enough to update accordingly.

We expand our mode code to create a new plugin. This new plugin `ServerSideAcccess` will run on each loop of the server side update. This plugin will use `StateAccess` to get the current position of the ball. It'll then apply some rudamentary physics to get and return the new position. The speed, also a directional vector changes when the ball bounces off the walls of the canvas.

~~~javascript
define()('ServerSideUpdate', ['StateAccess'], function(state) {
  return function (delta) {
    var pos = state().get('bouncing-ball-game')('ball')('position');
    var speed = state().get('bouncing-ball-game')('ball')('speed');
    var speed = state().get('bouncing-ball-game')('ball')('speed');
    var board = state().get('bouncing-ball-game')('board');
~~~

We now have the current position and speed.

~~~javascript
    var newPos = {
      x: pos('x') + speed('x') * delta,
      y: pos('y') + speed('y') * delta
    };
~~~

Calculate the new position. We multiply by the delta so that our changes factor in how long it's been since the last update. All `ServerSideUpdate` plugins receive this parameter.

~~~javascript
    var newSpeed = {
      x: speed('x'),
      y: speed('y')
    };

    if ((newPos.x + radius >= board('width')) || (newPos.x - radius <= 0)) {
      newSpeed.x = speed('x') * -1;
    }
    if ((newPos.y + radius >= board('height')) || (newPos.y - radius <= 0)) {
      newSpeed.y = speed('y') * -1;
    }
~~~

Change direction if we need to.

~~~javascript
    return {
      'bouncing-ball-game': {
        ball: {
          position: newPos,
          speed: newSpeed
        }
      }
    };
  };
});
~~~

Return our new position and speed. We don't need to return the existing demeanour here. Values that are not changed are not set.

## [More modular code](#more-modular-code)

We could move the `ServerSideUpdate` into a different JavaScript file and have node load it the traditional way. The function returned needs to be at the scope of the outermost function otherwise the dependencies e.g. `StateAccess` won't be within closure.

~~~javascript
define()('ServerSideUpdate', ['StateAccess'], require('ball-bounce-code'));
~~~

# [Running the Code](#running-the-code)
Now, when you run the code it'll bounce around. You can still click to change the colour of the ball.

~~~shell
gulp local
open http://localhost:3000
~~~