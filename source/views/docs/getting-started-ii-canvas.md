---
layout: documentation
---

# Drawing with canvas.

This part of the demo is about rendering. As such there isn't too much to do with ensemble. I'll cover how to wire your rendering engine in and how to respond to state changes.

For this demo we'll make use of Zepto and we'll use the browserify compatible version. Zepto is a lightweight version of jQuery that we use to manipulate the DOM.

~~~shell
npm i zepto-browserify -S
~~~

Time for some code.

~~~javascript
//./game/js/views/bouncing-ball.js
'use strict';

var $ = require('zepto-browserify').$;

module.exports = {
  type: 'View',
  deps: ['Element', 'StateTracker', 'DefinePlugin'],
  func: function (element, tracker, define) {
~~~

We make a new `View` plugin and we have three dependencies. The `Element`. This is the name of where to attach the canvas, `DefinePlugin` allowing us to define new plugins. `StateTracker` allows us to get the current ball position and demeanour.

~~~javascript
    var ballColour = function(demeanour) {
      if (demeanour === "happy") {
        return "#ffffff";
      } else {
        return "#ff0000"
      }
    }

    var drawBall = function(context, currentPosition, currentDemeanour) {
      context.fillStyle = ballColour(currentDemeanour)
      context.beginPath();
      context.arc(currentPosition.x, currentPosition.y, 25, 0, 2*Math.PI);
      context.closePath();
      context.fill();
    };
~~~

`drawBall` does what it says on the tin. It draws our ball on the canvas context. It makes use of the `currentPosition` and the `currentDemeanour`. We don't pass the colour from the server to the client. We pass the properties that matter to the object. In this case demeanour. Then on the client we determine how we want to represent the demeanour. In this case we are going to set the colour of the ball. In another view partial we may alter a fullscreen shader based on the state.

~~~javascript
    var theBallPosition = function (state) {
      return state['bouncing-ball-game'].ball.position;
    };

    var theBallDemeanour = function (state) {
      return state['bouncing-ball-game'].ball.demeanour;
    };
~~~

The [state tracker](/website/docs/tracking-state-changes) accepts functions as a way of resolving the state to return. The `tracker().get` function accepts either of the two functions and returns the current value. The state structure is the same as on the server.

~~~javascript
    return function (dims) {
      canvas = $('<canvas/>', { id: 'scene' });
      canvas[0].width = dims.usableWidth;
      canvas[0].height = dims.usableHeight;
      context = canvas[0].getContext('2d');

      $('#' + element()).append(canvas);
~~~

Our canvas boilerplate. Create a canvas, set the dimensions and add it to the document.

~~~javascript
      define()('OnEachFrame', function () {
        return function () {
          context.clearRect(0, 0, canvas[0].width, canvas[0].height);
          drawBall(context, tracker().get(theBallPosition), tracker().get(theBallColour));
        };
      });
~~~

Create a new plugin to execute every frame that draws our ball.

~~~javascript
      define()('OnResize', function () {
        return function (dims) {
          canvas[0].width = dims.usableWidth;
          canvas[0].height = dims.usableHeight;
        };
      });
    };
  }
};
~~~

Resize the canvas when the screen resizes.

# Include your new view code.
We then update our client side entry point to reference our game view. This is the same for all rendering engines. You gotta include files if you wanna use them.

## Client Side Entry Point

We use a client side entry point to load up all the files you need on the client. This file already exists if you clone the `start-here` repository. If not, a copy of the code is below.

~~~javascript
//.game/js/game.js
'use strict';

var entryPoint = require('ensemblejs-client');
entryPoint.loadWindow(require('window'));
entryPoint.loadDefaults();
entryPoint.run();
~~~

This file does four things so far: load the *ensemble* client library, passes in a reference to the window, load the default framework features and run the client side code.

Add the following line to your client side entrypoint. It should go after `loadDefaults` and before `run`.

~~~javascript
entryPoint.load(require('./views/bouncing-ball'));
~~~

# Running the Code.
Now, when you run the code you can see a dubiously amazing sphere.

~~~shell
gulp local
open http://localhost:3000
~~~

# Towards Interactivity
This ends the rendering engine specific part of the guide. In the next step we'll respond to user input.

[Getting Started, Part III - Click to change demeanour](/website/docs/getting-started-iii-click-to-change-demeanour)