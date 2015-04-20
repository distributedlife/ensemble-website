---
layout: documentation
---
# Getting Started
We're going to run through how to setup an *Ensemble* project and render possible the most exciting bouncing ball ever. Ok, it won't be exciting but it'll illustrate how the client and server talk.

## Starting a new project
We start off by copying from a existing project that has everything we need already in place.

You'll need git and node installed to make this work.

~~~shell
cd ~/where/you/want/to/put/code
git clone https://github.com/ensemblejs/start-here.git my-game
cd my-game
git remote rm origin
npm install
~~~

## Adding to an existing project
You can include the two required packages using npm.

~~~shell
npm i ensemblejs ensemblejs-client -S
~~~

# A bouncing ball

## Creating an server side entry point.
The *Ensemble* framework needs to know where your game code lives, what modes you have, etc. We write a `modes.js` file to store this information. Our game has one mode and looks like this:

The name of the file is at the top of each code block.

~~~javascript
//./game/js/modes.js
'use strict';

module.exports = 'BouncingBallGame';
~~~

This tells the framework to go looking for a module with that type. Let's write a plugin.

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

If we run our server now and visit [http://localhost:3000/](http://localhost:3000/) in your browser, it will start but you'll get a 404. No client side entry point exists.

~~~shell
gulp local
~~~

You can find more information on game modes [here](/website/docs/routes).

## Creating a client side entry point
When your game has one mode the entry point name is `game.js`. Let's create this file next:

~~~javascript
//.game/js/game.js
'use strict';

var entryPoint = require('ensemblejs-client');
entryPoint.loadWindow(require('window'));
entryPoint.loadDefaults();
entryPoint.run();
~~~

This file does four things so far: load the *Ensemble* client library, pass in a reference to the window, load the default framework features and run the client side code.

We no longer get an error when we visit [http://localhost:3000/](http://localhost:3000/).

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

~~~shell
npm i zepto-browserify -S
~~~


~~~scss
//./game/scss/game.scss
canvas {
  background-color: white;
}
~~~

We then update our client side entry point to reference our game view.

~~~javascript
//.game/js/game.js
'use strict';

var entryPoint = require('ensemblejs-client');
entryPoint.loadWindow(require('window'));
entryPoint.loadDefaults();
entryPoint.load(require('./views/bouncing-ball'));
entryPoint.run();
~~~

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