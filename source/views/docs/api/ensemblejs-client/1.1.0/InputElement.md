---
layout: documentation
---

# InputElement `const` `1` `dep`



## To set the InputElement
Set constants before we load the default properties. We do this in the [Client Side Entrypoint](/website/docs/guides/client-side-entrypoint).

~~~javascript
var entryPoint = require('ensemblejs-client');
entryPoint.loadWindow(require('window'));
entryPoint.set('InputElement', "surface");
entryPoint.loadDefaults();
entryPoint.run();
~~~