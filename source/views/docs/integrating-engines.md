---
layout: documentation
---
# Integrating Audio-Visual Engines
*Ensemble* doesn't ship with a rendering, audio or physics engine. It's trivial integrate one. This page talks about how you would go about doing that.

A basic *Ensemble* project exists that is pre-configured for [three.js](http://threejs.org/) and [howler.js](http://goldfirestudios.com/blog/104/howler.js-Modern-Web-Audio-Javascript-Library).

The work occurs in a `View` plugin.

## three.js
Require the npm package: [ensemblejs-threejs](https://github.com/ensemblejs/threejs) to get access to the THREE object.

~~~javascript
'use strict';

var THREE = require('ensemblejs-threejs');

module.exports = {
  type: 'View',
  deps: ['Dimensions', 'Element', 'DefinePlugin']
  func: function (dimensions, element, define) {
    var camera;
    var renderer;
    var scene;

    var createCamera () {
      var dims = dimensions().get();

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

    return {
      screenResized: function () {
        var dims = dimensions().get();

        if (renderer) {
          renderer.setSize(dims.usableWidth, dims.usableHeight);
        }
        if (camera) {
          camera.aspect = dims.ratio;
          camera.updateProjectionMatrix();
        }
      },
      setup: function (ackLastRequest, register) {
        var dims = dimensions().get();

        camera = createCamera();
        scene = new THREE.Scene();
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(dims.usableWidth, dims.usableHeight);
        $('#' + element()).append(renderer.domElement);

        define('RenderLoopCallback', function () {
          renderer.render(scene, camera);
        });
      }
    }
  }
};
~~~

## howler.js
~~~javascript
'use strict';

var Howl = require('howler').Howl;

module.exports = {
  type: 'View',
  deps: ['StateTracker', 'StateTrackerHelpers'],
  func: function (t, trackerHelpers) {
    var eq = trackerHelpers().equals;

    return {
      setup: function (ackLastRequest, register) {
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
      }
    };
  }
};
~~~