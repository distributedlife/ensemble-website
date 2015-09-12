---
layout: documentation
---

# Part II - Drawing with canvas

This part of the demo is about rendering. As such there isn't too much to do with ensemble. I'll cover how to wire your rendering engine in and how to respond to state changes.

For this demo we'll make use of Zepto and we'll use the browserify compatible version. Zepto is a lightweight version of jQuery that we use to manipulate the DOM.

Time for some code.

~~~javascript
//./game/js/views/bouncing-ball.js
'use strict';

module.exports = {
  type: 'OnClientReady',
  deps: ['Config', 'DefinePlugin', 'CurrentState', '$'],
  func: function (config, define, currentState, $) {
~~~

We make a new `OnClientReady` plugin and we have four dependencies. The `Element`. This is the name of where to attach the canvas, `DefinePlugin` allowing us to define new plugins. `CurrentState` allows us to get the current ball position and demeanour. $ is our zepto/jquery library.

~~~javascript
    var ballColour = function(demeanour) {
      if (demeanour === 'happy') {
        return '#ffffff';
      } else {
        return '#ff0000';
      }
    };

    var drawBall = function(context, position, demeanour, radius) {
      context.fillStyle = ballColour(demeanour);
      context.beginPath();
      context.arc(position.x, position.y, radius, 0, 2*Math.PI);
      context.closePath();
      context.fill();
    };
~~~

`drawBall` does what it says on the tin. It draws our ball on the canvas context. It makes use of the `position`, 'radius' and the `demeanour`. We don't pass the colour from the server to the client. We pass the properties that matter to the object. In this case demeanour. Then on the client we determine how we want to represent the demeanour. In this case we are going to set the colour of the ball. In another view partial we may alter a fullscreen shader based on the state.

~~~javascript
    var drawBoard = function(context, dimensions) {
      context.fillStyle = '#55ff55';
      context.fillRect(0, 0, dimensions.width, dimensions.height);
    };
~~~

`drawBoard` draws our game board.

~~~javascript
    var theBallPosition = function (state) {
      return state['bouncing-ball-game'].ball.position;
    };

    var theBallRadius = function (state) {
      return state['bouncing-ball-game'].ball.radius;
    };

    var theBallDemeanour = function (state) {
      return state['bouncing-ball-game'].ball.demeanour;
    };

    var theBoardDimensions = function (state) {
      return state['bouncing-ball-game'].board;
    };
~~~

The [current state](/docs/api/latest/CurrentState.html) accepts functions as a way of resolving the state to return. The `currentState().get` function accepts either of the two functions and returns the current value. The state structure is the same as on the server.

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
    var offset;
    return function (dims) {
      canvas = $('<canvas/>', { id: 'scene' });
      canvas[0].width = dims.usableWidth;
      canvas[0].height = dims.usableHeight;
      context = canvas[0].getContext('2d');

      $('#' + config().client.element).append(canvas);

      offset = calculateOffset(currentState().get(theBoardDimensions), dims);
      context.translate(offset.x, offset.y);
~~~

Our canvas boilerplate. Create a canvas, set the dimensions and add it to the document. We then use `context.translate` to shift our scene into the centre of the screen.

~~~javascript
      define()('OnEachFrame', function () {
        return function () {
          context.clearRect(0, 0, canvas[0].width, canvas[0].height);
          drawBoard(context, currentState().get(theBoardDimensions));
          drawBall(context, currentState().get(theBallPosition), currentState().get(theBallColour));
        };
      });
~~~

Create a new plugin to execute every frame that draws our board and ball.

~~~javascript
      define()('OnResize', function () {
        return function (dims) {
          canvas[0].width = dims.usableWidth;
          canvas[0].height = dims.usableHeight;
          offset = calculateOffset(currentState().get(theBoardDimensions), dims);
        };
      });
    };
  }
};
~~~

Resize the canvas when the screen resizes.

# Include your new view code
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