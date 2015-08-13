---
layout: documentation
---

# StateSeed `∞` `{}` `['*']`

Mutating state directly is not something *ensemblejs* promotes. The `StateSeed` plugin is how you can control the state the start of a game.

Any object you return from this plugin splices into the existing state. We recomended that you namespace your state. See [this guide](/docs/guides/state.html) for more information.

We restrict all state to a namespace. We do this to avoid collisions between framework state, library state and your game state. When creating state the first node is the name of the state.

~~~javascript
'use strict';

module.exports = {
  type: 'OnPause',
  func: function () {
    return {
      theNamespace: {
        object: {
          element: "value"
        },
        element: "value"
      }
    };
  }
};
~~~

This plugin supports restricted execution to specific game modes. This [guide explains how to set this up](/docs/guides/restricted-execution.html).