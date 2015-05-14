---
layout: documentation
---
# Getting Started
We're going to run through how to setup an *Ensemble* project and render possibly the most exciting bouncing ball ever. Ok, it won't be exciting but it'll illustrate how the parts communicate.

## Starting a new project
We start off by copying from a existing project that has everything we need already in place.

You'll need git and node installed to make this work.

~~~shell
cd ~/where/you/want/to/put/code
git clone https://github.com/ensemblejs/start-here.git my-game
cd my-game
git remote rm origin
npm i
npm i ensemblejs -g
~~~

## Adding to an existing project
You can include the two required packages using npm.

~~~shell
npm i ensemblejs-client -S
npm i ensemblejs -g
~~~

# A bouncing ball

## Creating an server side entry point.
The *Ensemble* framework needs to know where your game code lives, what game modes you have, etc. We write a `modes.js` file to store this information. Our game has one mode and looks like this:

If you're using the `start-here` repo then this file will already exist, defaulted to `EnsembleGame`.

**Note**: *The name of the file is at the top of each code block*.

~~~javascript
//./game/js/modes.js
'use strict';

module.exports = 'BouncingBallGame';
~~~

This single line of code tells the framework to go looking for a plugin with that type. Let's write the plugin it needs.

The file `game/js/modes/game.js` already exists in the `start-here` repo. Change it.

~~~javascript
//./game/js/modes/game.js
'use strict;'

module.exports = {
  type: 'BouncingBallGame',
  func: function() {
    return function() {
      //Our game setup code goes here.
    };
  }
};
~~~

If we run our server now and visit [http://localhost:3000/](http://localhost:3000/) in your browser.

~~~shell
gulp local
~~~

You can find more information on game modes [here](/website/docs/routes).

## Drawing a circle

~~~javascript
//./game/js/views/bouncing-ball.js
'use strict';

var $ = require('zepto-browserify').$;

module.exports = {
  type: 'View',
  deps: ['Element', 'Dimensions'],
  func: function (element, dimensions) {
    var canvas;

    return {
      setup: function () {
        var dims = dimensions().get();

        canvas = $('<canvas/>', { id: 'scene' });
        canvas[0].width = dims.usableWidth;
        canvas[0].height = dims.usableHeight;

        var ctx = canvas[0].getContext('2d');
        ctx.beginPath();
        ctx.arc(150,150,50,0,2*Math.PI);
        ctx.closePath();
        ctx.fill();

        $('#' + element()).append(canvas);
      },
      screenResized: function () {
        var dims = dimensions().get();

        if (canvas !== undefined) {
          canvas[0].width = dims.usableWidth;
          canvas[0].height = dims.usableHeight;
        }
      }
    };
  }
};
~~~

Install zepto, but we'll use the browserify compatible version.

~~~shell
npm i zepto-browserify -S
~~~

And paint the canvas white.

~~~scss
//./game/scss/game.scss
canvas {
  background-color: white;
}
~~~

## Creating a client side entry point
We then update our client side entry point to reference our game view.

When your game has one mode the entry point name is `game.js`. Let's view (or create) this file next:

~~~javascript
//.game/js/game.js
'use strict';

var entryPoint = require('ensemblejs-client');
entryPoint.loadWindow(require('window'));
entryPoint.loadDefaults();
entryPoint.load(require('./views/bouncing-ball'));
entryPoint.run();
~~~

This file does four things so far: load the *Ensemble* client library, passes in a reference to the window, load the default framework features and run the client side code. We added our own line to load our bouncing ball code.


-- attach canvas
-- draw circle

## Setting the circle position on the server

~~~javascript
//./game/js/modes/game.js
'use strict';

module.exports = {
  type: 'BouncingBallGame',
  deps: ['DefinePlugin'],
  func: function(define) {
    return function() {
      define()('StateSeed', function () {
        return {
          'bouncing-ball-game': {
            ball: {
              x: 100,
              y: 100,
              xspeed: 1,
              yspeed: 3.3
            }
          }
        };
      });
    };
  }
};
~~~

## Moving the circle over time