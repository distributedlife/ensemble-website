---
layout: documentation
---

# GameMode `const` `1` `dep`

It's possible for an *ensemblejs* game to have more than one game mode. When the client connects it needs to specify the mode. This will matches the client code to the server code. The default value is `game`.

## To set the GameMode
Set constants before we load the default properties. We do this in the [Client Side Entrypoint](/website/docs/guides/client-side-entrypoint).

~~~javascript
var entryPoint = require('ensemblejs-client');
entryPoint.loadWindow(require('window'));
entryPoint.set('GameMode', "nightmare");
entryPoint.loadDefaults();
entryPoint.run();
~~~