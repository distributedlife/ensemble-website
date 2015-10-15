---
layout: documentation
---

# ActionMap
`Server` [`Mode Enabled`](/docs/guides/restricted-execution.html) [`Mutates State`](/docs/guides/state.html)

This plugin is how you map user input to your game code. A guide on this topic exists: [Responding to user input](/docs/guides/actions.html).

~~~javascript
module.exports = {
  type: 'ActionMap',
  func: function () {
    return {
      'key': [{target: callback(), onRelease: true}],
    };
  }
};
~~~