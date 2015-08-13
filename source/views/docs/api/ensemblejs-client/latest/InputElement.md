---
layout: documentation
---

# InputElement `const` `1` `dep`

The input element is a div that *ensemblejs* uses to capture input. The default value is `input`.

## To set the InputElement
Set constants before we load the default properties. We do this in the [Client Side Entrypoint](/docs/guides/client-side-entrypoint.html).

~~~javascript
var entryPoint = require('ensemblejs-client');
entryPoint.loadWindow(require('window'));
entryPoint.set('InputElement', "surface");
entryPoint.loadDefaults();
entryPoint.run();
~~~