---
layout: documentation
---

# View `∞` `ƒ` `dep` `Ø`

The `View` is where we setup our client side render code. These callbacks get executed once after the client side is setup and ready to go. It receives the current `dimensions`.

The best guide for using this plugin is [Where to put your view code](/docs/guides/view-logic.html). [`Integrating Engines`](/docs/guides/integrating-engines.html) is also useful. As are the following tutorial parts: [`Getting Started II - Canvas`](/docs/tutorials/getting-started-ii-canvas.html), [`Getting Started II - three.js`](/docs/tutorials/getting-started-ii-threejs.html), [`Getting Started II - pixi.js`](/docs/tutorials/getting-started-ii-pixijs.html).

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