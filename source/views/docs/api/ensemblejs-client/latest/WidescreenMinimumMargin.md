---
layout: documentation
---

# WidescreenMinimumMargin `const` `1` `dep`

The number of pixels that must exist on the margin of the longest edge. This and the [aspect ratio](#AspectRatio) go into a formula to calculate the biggest canvas that will fit. The default value is: `32`

## To set the WidescreenMinimumMargin
Set constants before we load the default properties. We do this in the [Client Side Entrypoint](/website/docs/guides/client-side-entrypoint).

~~~javascript
var entryPoint = require('ensemblejs-client');
entryPoint.loadWindow(require('window'));
entryPoint.set('WidescreenMinimumMargin', "0");
entryPoint.loadDefaults();
entryPoint.run();
~~~