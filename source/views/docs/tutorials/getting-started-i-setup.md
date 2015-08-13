---
layout: documentation
---
# Part I - Getting Started
We're going to run through how to setup an *Ensemble* project and render possibly the most exciting bouncing ball ever. Ok, it won't be exciting but it'll illustrate how the parts communicate. It's important to remember that *ensemble* doesn't provide a rendering engine, so pretty graphics are not a concern. At the bottom of this guide you can choose with which renderer to continue the guide. Examples exist for canvas, three.js and pixi.js

## Starting a new project
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

## Adding to an existing project
You can include the two required packages using npm.

~~~shell
npm i ensemblejs-client -S
npm i ensemblejs -g
~~~

# The Bouncing Ball

## Setting some initial state

We need to define some state about our bouncing ball. We do this by creating a new file in the `/game/js/state` folder. You can call it what you want. All files in this folder load automatically. In this example I call the file `ball.js`.

~~~javascript
//./game/js/state/ball.js
'use strict;'

module.exports = {
  type: 'StateSeed',
  func: function() {
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
  }
};
~~~

Our ball has four pieces of information. It's position, speed, radius and it's demeanour. The board has two pieces: width and height. On the client we'll write the code to use this information display the ball.

## Running the code

If we run our server now and visit [http://localhost:3000/](http://localhost:3000/) in your browser. You won't see much but it works.

~~~shell
gulp local
~~~

## Part II - Drawing a circle
To continue this guide you need to decide which renderer you want to use. Click through to continue using [canvas](/docs/tutorials/getting-started-ii-canvas.html), [three.js](/docs/tutorials/getting-started-ii-threejs.html) or [pixi.js](/docs/tutorials/getting-started-ii-pixijs.html).
