---
layout: documentation
---

# Drawing with canvas.

This part of the demo is about rendering. As such there isn't too much to do with ensemble. I'll cover how to wire your rendering engine in and how to respond to state changes.

For this demo we'll make use of Zepto and we'll use the browserify compatible version. Zepto is a lightweight version of jQuery that we use to manipulate the DOM. We also need to include the three.js library. Three.js doesn't come with an npm package that you can install via NPM. I've created one for use with the *ensemble* project.


~~~shell
npm i zepto-browserify ensemblejs-threejs -S
~~~

Time for some code.


~~~javascript
//./game/js/views/bouncing-ball.js
'use strict';

var $ = require('zepto-browserify').$;
var THREE = require('ensemblejs-threejs');

module.exports = {
  type: 'View',
  deps: ['Element', 'StateTracker', 'DefinePlugin'],
  func: function (element, tracker, define) {
~~~

We make a new `View` plugin and we have three dependencies. The `Element`. This is the name of where to attach the canvas, `DefinePlugin` allowing us to define new plugins. `StateTracker` allows us to get the current ball position and demeanour.

~~~javascript
    var camera;
    var renderer;

    var createCamera = function (dims) {
      var camera = new THREE.OrthographicCamera(
        dims.usableWidth / -2,
        dims.usableWidth / 2,
        dims.usableHeight / 2,
        dims.usableHeight / -2,
        -2000,
        1000
      );

      camera.position.set(camera.position.x, camera.position.y, 1);
      camera.aspect = dims.ratio;
      camera.updateProjectionMatrix();

      return camera;
    };
~~~

`createCamera` is basic three.js code for creating an orthographic camera. This is the camera where things in the distance are remain the same size. Handy for 2D games.

~~~javascript
    var updateBall = function(current, prior, ball) {
      ball.position.set(current.x, current.y, ball.position.z );
    };

    var updateColour = function (current, prior, ball) {
      if (current === "happy") {
        ball.material.color.setHex(0xffffff);
      } else {
        ball.material.color.setHex(0xff0000);
      }

      ball.material.needsUpdate = true;
    };
~~~

`updateBall` does what it says on the tin. It updates the position of the ball. Three.js will render it on our behalf. Both of these functions receive the current position or demeanour as well as the prior demeanour.

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

The [state tracker](/website/docs/tracking-state-changes) accepts functions as a way of resolving the state to return. The `tracker().get` function accepts either of the two functions and returns the current value. The state structure is the same as on the server.

~~~javascript
    var createCircle = function () {
      var material = new THREE.MeshBasicMaterial();

      var geometry = new THREE.CircleGeometry(tracker().get(theBallRadius), 100);
      var mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(0, 0, -100);

      return mesh;
    };

    var createBoard = function () {
      var material = new THREE.MeshBasicMaterial();
      material.color.setHex(0x55ff55);

      var geometry = new THREE.PlaneBufferGeometry(tracker().get(theBoardDimensions).width, tracker().get(theBoardDimensions).height);
      var mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(0, 0, -101);

      return mesh;
    };
~~~

Three.js code for creating a circle. A mesh requires some geometry and a material. We combine them to create a mesh. Similar code for creating the game board.

~~~javascript
    return function (dims) {
      camera = createCamera(dims);
      var scene = new THREE.Scene();
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(dims.usableWidth, dims.usableHeight);
      $('#' + element()).append(renderer.domElement);

      var ball = createCircle();
      var board = createBoard();
      scene.add(board);
      scene.add(ball);
~~~

Our three.js boilerplate. Create a camera, create a scene, create a renderer. Create a circle and add it to our scene.

~~~javascript
      tracker().onChangeOf(theBallPosition, updateBall, ball);
      tracker().onChangeOf(theBallDemeanour, updateColour, ball);
~~~

This is different to the canvas example. Here we use the `StateTracker` to tell us when the position and demeanour change.

~~~javascript
      define()('OnEachFrame', function () {
        return function () {
          renderer.render(scene, camera);
        };
      });
~~~

Create a new plugin to execute every frame that renders our scene. No game logic goes in here, just the three.js render call.

~~~javascript
      define()('OnResize', function () {
        return function (dims) {
          renderer.setSize(dims.usableWidth, dims.usableHeight);
          camera.aspect = dims.ratio;
          camera.updateProjectionMatrix();
        };
      });
    };
  }
};
~~~

Resize the three.js renderer when the screen resizes.

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
Now, when you run the code you can see a dubiously amazing sphere. A dubious sphere that is bouncing of the screen. I'll get to that after you've taken a look.

~~~shell
gulp local
open http://localhost:3000
~~~

# That's a strange setup.

Three.js uses 0,0 as the centre of the scene. This gets positioned in the centre of the camera and therefore the centre of the screen. If you look at the [canvas]() or [pixi.js]() tutorials they have 0,0 in the top-left corner. That's why the canvas and pixi scenes are offset by half the screen width.

With three.js we can take two options. We can change our *physics* such that it operates on a board that runs from -250 to 250 along both axes. Or, we can move the camera centre over 250,250 and the draw the board with that as it's centre as well.

## Changing the physis
All we need to change is the `./game/js/modes/game.js` and update how we detect bouncing.

~~~javascript
var halfWidth = board('width') / 2;
var halfHeight = board('height') / 2;

if ((newPos.x + radius >= halfWidth) || (newPos.x - radius <= -halfWidth)) {
  newSpeed.x = speed('x') * -1;
}
if ((newPos.y + radius >= halfHeight) || (newPos.y - radius <= -halfHeight)) {
  newSpeed.y = speed('y') * -1;
}
~~~

## Changing the rendering
The alternative is to change the view side. We do this by calculating the half-width and half-height of the board. We then offset the camera and board by this amount.

~~~javascript
var halfWidth = function (boardDimensions) {
  return boardDimensions.width / 2;
};
var halfHeight = function (boardDimensions) {
  return boardDimensions.height / 2;
};

//...
camera.position.set(
  halfWidth(tracker().get(theBoardDimensions)),
  halfHeight(tracker().get(theBoardDimensions)),
  1
);
//...
mesh.position.set(
  halfWidth(tracker().get(theBoardDimensions)),
  halfHeight(tracker().get(theBoardDimensions)),
  -101
);
~~~

# Running the Code, again.
Now, when you run the code you can see a dubiously amazing sphere.

~~~shell
gulp local
open http://localhost:3000
~~~

# Towards Interactivity
This ends the rendering engine specific part of the guide. In the next step we'll respond to user input.

[Getting Started, Part III - Click to change demeanour](/website/docs/getting-started-iii-click-to-change-demeanour)