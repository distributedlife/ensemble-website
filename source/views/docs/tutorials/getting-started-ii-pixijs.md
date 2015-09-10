---
layout: documentation
---

# Part II - Drawing with PixiJS

This part of the demo is about rendering. As such there isn't too much to do with ensemble. I'll cover how to wire your rendering engine in and how to respond to state changes.

For this demo we'll make use of Zepto and we'll use the browserify compatible version. Zepto is a lightweight version of jQuery that we use to manipulate the DOM. We also need to include the pixi.js library.

Time for some code.

~~~javascript
//./game/js/views/bouncing-ball.js
'use strict';

var PIXI = require('pixi.js');

module.exports = {
  type: 'OnClientReady',
  deps: ['Config', 'StateTracker', 'DefinePlugin', 'CurrentState', '$'],
  func: function (config, tracker, define, currentState, $) {
~~~

We make a new `View` plugin and we have four dependencies. The `Config`. Provides access to the game config, `DefinePlugin` allowing us to define new plugins. `CurrentState` allows us to get the current ball position and demeanour. $ is our Zepto/jQuery library

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

    var theBallRadius = function (state) {
      return state['bouncing-ball-game'].ball.radius;
    };

    var theBoardDimensions = function (state) {
      return state['bouncing-ball-game'].board;
    };
~~~

The [state tracker](/docs/guides/tracking-state-changes.html) accepts functions as a way of resolving the state to return. The `tracker().get` function accepts either of the two functions and returns the current value. The state structure is the same as on the server.

~~~javascript
    var calculateOffset = function (boardDimensions, screenDimensions) {
      return {
        x: (screenDimensions.usableWidth - boardDimensions.width) / 2,
        y: (screenDimensions.usableHeight - boardDimensions.height) / 2
      };
    };
~~~

The `calculateOffset` function calculates the offset so we can position the game board in the centre of the canvas.

~~~javascript
    var createBall = function () {
      var ball = new PIXI.Graphics();
      ball.beginFill(0xffffff);
      ball.drawCircle(0, 0, currentState().get(theBallRadius));

      return ball;
    };

    var createBoard = function () {
      var board = new PIXI.Graphics();
      board.beginFill(0x55ff55);
      board.drawRect(0, 0, currentState().get(theBoardDimensions).width, currentState().get(theBoardDimensions).height);

      return board;
    };
~~~

`createBall` and `createBoard` do what they claim to. I've pulled them into their own functions to make the next chunk of code easier to read.

**Note:** The initial position of the ball and the board are 0, 0. We do because pixi.js takes those two coordinates as offsets from 0, 0. Position them over 0, 0 and then translate them to their correct position.

~~~javascript
    var offset;
    return function (dims) {
      var stage = new PIXI.Container();
      var renderer = PIXI.autoDetectRenderer(dims.usableWidth, dims.usableHeight);
      $('#' + config().client.element).append(renderer.view);

      offset = calculateOffset(currentState().get(theBoardDimensions), dims);
      stage.position.x = offset.x;
      stage.position.y = offset.y;

      var ball = createBall();
      stage.addChild(createBoard());
      stage.addChild(ball);
~~~

Our pixi.js boilerplate. Create a stage, create a renderer and add it to the document. We use the offset to position our stage in the centre of the screen.

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

# Running the Code
Now, when you run the code you can see a dubiously amazing sphere.

~~~shell
gulp local
open http://localhost:3000
~~~

# Towards Interactivity
This ends the rendering engine specific part of the guide. In the next step we'll respond to user input.

[Getting Started, Part III - Click to change demeanour](/docs/tutorials/getting-started-iii-click-to-change-demeanour.html)