---
layout: documentation
---

# ServerUrl `const` `1` `dep`

The element identifies a div on the view that the rendering engine should attach the canvas to. The default value is: `http://localhost:3000/`

## To set the ServerUrl
Set constants before we load the default properties. We do this in the [Client Side Entrypoint](/website/docs/guides/client-side-entrypoint).

~~~javascript
var entryPoint = require('ensemblejs-client');
entryPoint.loadWindow(require('window'));
entryPoint.set('ServerUrl', "http://distributedlife.com:3000/");
entryPoint.loadDefaults();
entryPoint.run();
~~~