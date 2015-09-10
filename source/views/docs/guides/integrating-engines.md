---
layout: documentation
---
# Integrating Audio-Visual Engines
*Ensemble* doesn't ship with a rendering, audio or physics engine. It's easy to integrate one. This page talks about how you would go about doing that.

A basic *Ensemble* project exists that is pre-configured for [three.js](http://threejs.org/) and [howler.js](http://goldfirestudios.com/blog/104/howler.js-Modern-Web-Audio-Javascript-Library).

The work occurs in a `View` plugin.

## three.js
Require the npm package: [ensemblejs-threejs](https://github.com/ensemblejs/threejs) to get access to the THREE object.

~~~javascript
'use strict';

var THREE = require('ensemblejs-threejs');

module.exports = {
  type: 'OnClientReady',
  deps: ['Config', 'DefinePlugin']
  func: function (config, define) {
    var camera;
    var renderer;
    var scene;

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
    }

    return function (dims) {
      camera = createCamera(dims);
      scene = new THREE.Scene();
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(dims.usableWidth, dims.usableHeight);
      $('#' + config().client.element).append(renderer.domElement);

      define('OnResize', function () {
        return function(dims) {
          renderer.setSize(dims.usableWidth, dims.usableHeight);
          camera.aspect = dims.ratio;
          camera.updateProjectionMatrix();
        }
      });

      define('OnRenderFrame', function () {
        renderer.render(scene, camera);
      });
    };
  }
};
~~~

## howler.js
~~~javascript
var Howl = require('howler').Howl;

module.exports = {
  type: 'OnClientReady',
  deps: ['StateTracker', 'StateTrackerHelpers'],
  func: function (t, trackerHelpers) {
    var eq = trackerHelpers().equals;

    return function (ackLastRequest, register) {
      var hide = function (model, priorModel, waiting) {
        waiting.play();
      };

      var challenge = function (model, priorModel, go, waiting) {
        waiting.stop();
        go.play();
      };

      var falseStart = function (model, priorModel, go, waiting) {
        go.stop();
        waiting.stop();
      };

      var waiting = new Howl({ urls: ['/game/audio/waiting.mp3'] });
      var go = new Howl({ urls: ['/game/audio/go.mp3']});

      var state = function (state) { return state.controller.state; };

      t().onChangeTo(state, eq('waiting'), hide, waiting);
      t().onChangeTo(state, eq('started'), challenge, [go, waiting]);
      t().onChangeTo(state, eq('fail'), falseStart, [go, waiting]);
    };
  }
};
~~~

## Canvas Rendering

~~~javascript
module.exports = {
  type: 'OnClientReady',
  deps: ['Config', 'DefinePlugin'],
  func: function (config, define) {
    var canvas;
    var context;

    return function (dims) {
      canvas = $()('<canvas/>', { id: 'scene' });
      canvas[0].width = dims.usableWidth;
      canvas[0].height = dims.usableHeight;
      context = canvas[0].getContext('2d');

      $()('#' + config().client.element).append(canvas);

      define()('OnEachFrame', function () {
        return function () {
          context.clearRect(0, 0, canvas[0].width, canvas[0].height);
        };
      });

      define()('OnResize', function () {
        return function (dims) {
          canvas[0].width = dims.usableWidth;
          canvas[0].height = dims.usableHeight;
        };
      });
    };
  }
};
~~~


## Pixi.js
Require the package [pixi.js](https://github.com/GoodBoyDigital/pixi.js) to get access to the `PIXI` object.

~~~javascript
var PIXI = require('pixi.js');

module.exports = {
  type: 'OnClientReady',
  deps: ['Config', 'DefinePlugin'],
  func: function (config, define) {
    return function (dims) {
      var stage = new PIXI.Container();
      var renderer = PIXI.autoDetectRenderer(dims.usableWidth, dims.usableHeight);
      $('#' + config().client.element).append(renderer.view);

      define()('OnEachFrame', function () {
        return function () {
          renderer.render(stage);
        };
      });
    };
  }
};
~~~
