---
layout: documentation
---
# Client Side Entrypoints
When the gamer's browser requests your first game page, the *ensemble* server sends back a light HTML document. This contains a reference to a JavaScript file. This file is the client side entrypoint. It's where the browser starts executing your game code.

It's simple. You load the *ensemble* client library and tell it where to find your `ViewLogic` and events.

~~~javascript
'use strict';

var entryPoint = require('ensemblejs-client');
entryPoint.loadWindow(require('window'));
entryPoint.loadDefaults();
entryPoint.load(require('./view-logic/easy'));
entryPoint.load(require('./events/on-mute'));
entryPoint.load(require('./events/on-unmute'));
entryPoint.run();
~~~