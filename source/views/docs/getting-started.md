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

