---
layout: documentation
---

# AspectRatio `const` `1` `Ø` `dep`

The aspect ratio controls the size of the canvas. During start up the ensemblejs-client will read the screen dimensions. This, the aspect ratio and the [WidescreenMinimumMargin](WidescreenMinimumMargin) go into a formula to calculate the biggest canvas that will fit. The default value is 26 / 10.

## To set the AspectRatio
Set constants before we load the default properties. We do this in the [Client Side Entrypoint](/website/docs/guides/client-side-entrypoint).

~~~javascript
var entryPoint = require('ensemblejs-client');
entryPoint.loadWindow(require('window'));
entryPoint.set('AspectRatio', 16 / 10);
entryPoint.loadDefaults();
entryPoint.run();
~~~