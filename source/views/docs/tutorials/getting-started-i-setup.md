---
layout: documentation
---
# [Getting Started](#getting-started)
We're going to run through how to setup an *Ensemble* project and render possibly the most exciting bouncing ball ever. Ok, it won't be exciting but it'll illustrate how the parts communicate. It's important to remember that *ensemble* doesn't provide a rendering engine, so pretty graphics are not a concern. At the bottom of this guide you can choose with which renderer to continue the guide. Examples exist for canvas, three.js and pixi.js

## [Starting a new project](#starting-a-new-project)
We start off by copying from a existing project that has everything we need already in place.

You'll need [git](http://www.git-scm.com/) and [node](https://nodejs.org/) installed to make this work.

~~~shell
cd ~/where/you/want/to/put/code
git clone https://github.com/ensemblejs/start-here.git bouncing-ball
cd bouncing-ball
git remote rm origin
npm i
npm i ensemblejs -g
~~~

## [Adding to an existing project](#adding-to-an-existing-project)
You can include the two required packages using npm.

~~~shell
npm i ensemblejs-client -S
npm i ensemblejs -g
~~~

# [The Bouncing Ball](#the-bouncing-ball)

## [Creating an server side entry point](#creating-an-server-side-entry-point)
The *ensemble* framework needs to know where your game code lives, what game modes you have, etc. We write a `modes.js` file to store this information. Our game has one mode and looks like this:

If you're using the `start-here` repo then this file will already exist, defaulted to `EnsembleGame`.

**Note**: *The name of the file is at the top of each code block*.

~~~javascript
//./game/js/modes.js
'use strict';

module.exports = 'BouncingBallGame';
~~~

This single line of code tells the framework to go looking for a plugin with that type. Let's write the plugin it needs.

The file `game/js/modes/game.js` already exists in the `start-here` repo. Change it.

I'll show the full file and then talk about it.

~~~javascript
//./game/js/modes/game.js
'use strict;'

module.exports = {
  type: 'BouncingBallGame',
  deps: ['DefinePlugin'],
  func: function(define) {
    return function() {
      define()('StateSeed', function () {
        return {
          'bouncing-ball-game': {
            ball: {
              position: { x: 100, y: 50 },
              speed: { x: 100, y: 50 },
              radius: 25,
              demeanour: 'happy'
            },
            board: {
              width: 500,
              height: 500
            }
          }
        };
      });
    };
  }
};
~~~

The first piece of code is standard plugin boilerplate.

~~~javascript
type: 'BouncingBallGame',
deps: ['DefinePlugin'],
func: function(define) {
~~~

The `type` matches the label we set in `modes.js`. You can read more about [plugins](/website/docs/modules)and [game modes](/website/docs/routes).

The next piece of code creates a new plugin called `StateSeed`. As the game starts up *ensemble* will load this state up and ship it to the client. [Read this to know more about state](/website/docs/state).

~~~javascript
return function() {
  define()('StateSeed', function () {
    return {
      'bouncing-ball-game': {
        ball: {
          position: { x: 100, y: 50 },
          speed: { x: 100, y: 50 },
          radius: 25,
          demeanour: 'happy'
        },
        board: {
          width: 500,
          height: 500
        }
      }
    };
  });
};
~~~

Our ball has four pieces of information. It's position, speed, radius and it's demeanour. The board has two pieces: width and height. On the client we'll write the code to use this information display the ball.

## [Running the code](#running-the-code)

If we run our server now and visit [http://localhost:3000/](http://localhost:3000/) in your browser. You won't see much but it works.

~~~shell
gulp local
~~~

## [Part II - Drawing a circle](#part-ii---drawing-a-circle)
To continue this guide you need to decide which renderer you want to use. Click through to continue using [canvas](/website/docs/getting-started-ii-canvas), [three.js](/website/docs/getting-started-ii-threejs) or [pixi.js](/website/docs/getting-started-ii-pixijs).
