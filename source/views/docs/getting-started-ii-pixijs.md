---
layout: documentation
---

# Drawing with canvas.

This part of the demo is about rendering. As such there isn't too much to do with ensemble. I'll cover how to wire your rendering engine in and how to respond to state changes.

For this demo we'll make use of Zepto and we'll use the browserify compatible version. Zepto is a lightweight version of jQuery that we use to manipulate the DOM. We also need to include the pixi.js library.

~~~shell
npm i zepto-browserify pixi.js -S
~~~

Time for some code.

~~~javascript
//./game/js/views/bouncing-ball.js
'use strict';

var $ = require('zepto-browserify').$;
var PIXI = require('pixi.js');

module.exports = {
  type: 'View',
  deps: ['Element', 'StateTracker', 'DefinePlugin'],
  func: function (element, tracker, define) {
~~~

We make a new `View` plugin and we have three dependencies. The `Element`. This is the name of where to attach the canvas, `DefinePlugin` allowing us to define new plugins. `StateTracker` allows us to get the current ball position and demeanour.

~~~javascript
    var updateBall = function(current, prior, ball) {
      ball.position.x = current.x;
      ball.position.y = current.y;
    };

    var updateColour = function(current, prior, ball) {
      if (current === 'happy') {
        ball.tint = 0xffffff;
      } else {
        ball.tint = 0xff0000;
      }
    };
~~~

`updateBall` does what it says on the tin. It updates the position of the ball. Pixi.js will render it on our behalf. Both of these functions receive the current position or demeanour as well as the prior value.

We don't pass the colour from the server to the client. We pass the properties that matter to the object. In this case demeanour. Then on the client we determine how we want to represent the demeanour. In this case we are going to set the colour of the ball. In another view partial we may alter a fullscreen shader based on the state.

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
      var stage = new PIXI.Container();
      var renderer = PIXI.autoDetectRenderer(dims.usableWidth, dims.usableHeight);
      $('#' + element()).append(renderer.view);

      var ball = new PIXI.Graphics();
      ball.beginFill(0xffffff);
      ball.drawCircle(0,0,25);

      stage.addChild(ball);
~~~

Our pixi.js boilerplate. Create a stage, create a rendere and add it to the document.

~~~javascript
      tracker().onChangeOf(theBallPosition, updateBall, ball);
      tracker().onChangeOf(theBallDemeanour, updateColour, ball);
~~~

This is different to the canvas example. Here we use the `StateTracker` to tell us when the position and demeanour change.

~~~javascript
      define()('OnEachFrame', function () {
        return function () {
          renderer.render(stage);
        };
      });
    };
  }
};
~~~

Create a new plugin to execute every frame that renders our scene. No game logic goes in here, just the pixi.js render call.

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