---
layout: documentation
---

# OnError [`[*]`](/website/docs/api/format#arrays) [`e`](/website/docs/api/#events) [`ƒ`](/website/docs/api/#functions) [`Ø`](/website/docs/api/#mutable)

[`Deprecated`](/website/docs/api/#deprecated). The error system within ensemblejs-client is changing. This can be used to listen for socket events that are current sent to the browser console.

Executes whenever the socket has an error. Receives the error data from the socket as a parameter.

~~~javascript
'use strict';

module.exports = {
  type: 'OnError',
  func: function() {
    return function(data) {
      //code
    };
  }
};
~~~