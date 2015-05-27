---
layout: documentation
---

# StateSeed `∞` `{}`

Mutating state directly is not something *ensemblejs* promotes. The `StateSeed` plugin is how you can control the state the start of a game.

Any object you return from this plugin splices into the existing state. We recomended that you namespace your state. See [this guide](/website/docs/guides/state) for more information.