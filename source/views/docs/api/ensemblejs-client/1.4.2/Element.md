---
layout: documentation
---

# Element `const` `1` `dep`

The element identifies a div on the view that the rendering engine should attach the canvas to. The default value is: `canvas`

## To set the Element
Set constants before we load the default properties. We do this in the [Client Side Entrypoint](/docs/guides/client-side-entrypoint.html).

~~~javascript
var entryPoint = require('ensemblejs-client');
entryPoint.loadWindow(require('window'));
entryPoint.set('Element', "mydiv");
entryPoint.loadDefaults();
entryPoint.run();
~~~