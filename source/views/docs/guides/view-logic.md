---
layout: documentation
---
# Where to put your view code

*Ensemble* doesn't ship with a rendering engine, or an audio engine... or a physics engine. Depending on your game you are going to need zero or more of these engines. The physics engine will sit on the server and so it won't get a mention in this article. Here I'll talk about where you can call your rendering engine or audio engine.

## View Logic
As a rule an *Ensemble* based game does let you interact with your game world on a per-frame basis. The idea is that you establish conditions on when you want to update parts of your scene or start and stop audio. You set all this up when the game loads. Then you take your hands off and the framework will do the rest.

All the client side work takes place in the `View` role. And you can have as many of these as you want.

### The interface
~~~javascript
'use strict';

module.exports = {
  type: 'View',
  func: function () {
    return function (dims) {
      //view work happens.
    };
  }
};
~~~

Your function will recieve a dimenesion object valid at the time of call.

### An example
The following code is an example of view logic code. It's a good example because it does one thing and it does it well. Because there is no limit to the nuber of `View` instances you have you can split them up into logical groupings.

In this example I gloss over the work around the `StateTracker`. You can read [knowing when the game changes](/website/docs/guides/tracking-state-changes) for more information.

~~~javascript
'use strict';

var numeral = require('numeral');
var $ = require('zepto-browserify').$;

module.exports = {
  type: 'View',
  deps: ['StateTracker'],
  func: function (tracker) {

    var updatePlayerCount = function (currentValue) {
      $('#player-count').text(numeral(currentValue).format('0a'));
    };

    var playerCount = function (state) {
      return state.ensemble.players;
    };

    return function () {
      tracker().onChangeOf(playerCount, updatePlayerCount);
    };
  }
};
~~~

### An example where it registers other events-other-events
Depending on your rendering engine you will want to register event handlers during your view setup. Here is an example. In this example I gloss over the nitty-gritty of three.js.

~~~javascript
'use strict';

module.exports = {
  type: 'View',
  deps: ['DefinePlugin', 'Element'],
  func: function (define, element) {
    return function (dims) {
      camera = createCamera(dims);
      var scene = new THREE.Scene();
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(dims.usableWidth, dims.usableHeight);
      $('#' + element()).append(renderer.domElement);

      //call render on each frame
      define()('OnEachFrame', function () {
        return function () {
          renderer.render(scene, camera);
        };
      });

      //resize the renderer and camera if the screen resizes.
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

You'll notice here the `OnEachFrame` does let you interact with your game everyframe. Our advice is that you don't use this for view logic as it'll make your code more complicated and harder to test.

### How do I load my views?
You do this in the [Client Side Entrypoint](/website/docs/guides/client-side-entrypoint.html).

~~~javascript
entryPoint.load(require('./views/show-freaking-tanks'));
~~~