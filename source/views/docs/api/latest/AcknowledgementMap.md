---
layout: documentation
---

# AcknowledgementMap
`Server` [`Mode Enabled`](/docs/guides/restricted-execution.html) [`Mutates State`](/docs/guides/state.html)

This plugin is how you map a client side non-interactive event to your game code. A guide on this topic exists: [Knowing when the user has seen something](/docs/guides/ackmap.html).

~~~javascript
module.exports = {
  type: 'AcknowledgementMap',
  func: function() {
    return {
      'my-key': [{target: myCallback }]
    };
  }
};
~~~