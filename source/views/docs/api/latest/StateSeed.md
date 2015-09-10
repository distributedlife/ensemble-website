---
layout: documentation
---

# StateSeed
`Server` [`Mode Enabled`](/docs/guides/restricted-execution.html) [`Mutates State`](/docs/guides/state.html)

Mutating state directly is not something *ensemblejs* promotes. The `StateSeed` plugin is how you can control the state the start of a game.

Any object you return from this plugin splices into the existing state. We require that you namespace your state. We do this to avoid collisions between framework state, library state and your game state. When creating state the first node is the name of the state. See [this guide](/docs/guides/state.html) for more information.

~~~javascript
module.exports = {
  type: 'StateSeed',
  func: function StateSeed () {
    return {
      theNamespace: {
        object: {
          element: "value1"
        },
        element: "value2"
      }
    };
  }
};
~~~