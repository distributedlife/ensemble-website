---
layout: documentation
---

# View `∞` `ƒ` `dep` `Ø`

The `View` is where we setup our client side render code. These callbacks get executed once after the client side is setup and ready to go. It receives the current `dimensions`.

The best guide for using this plugin is [Where to put your view code](/websites/docs/guides/view-logic). [`Integrating Engines`](/website/docs/guides/integrating-engines) is also useful. As are the following tutorial parts: [`Getting Started II - Canvas`](/website/docs/tutorials/getting-started-ii-canvas), [`Getting Started II - three.js`](/website/docs/tutorials/getting-started-ii-threejs), [`Getting Started II - pixi.js`](/website/docs/tutorials/getting-started-ii-pixijs).

## The API
All `view` plugins should return a function that accepts the dims. *Ensemblejs* ingores all return values from this function.

~~~javascript
'use strict';

module.exports = {
  type: 'View',
  func: function () {
    return function (dims) {
      // code
    };
  }
};
~~~