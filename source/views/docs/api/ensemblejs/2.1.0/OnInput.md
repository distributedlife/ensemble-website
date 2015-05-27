---
layout: documentation
---

# OnInput `∞` `ev` `ƒ` `Ø`
This event callback fires each time the server receives an input packet from a client. The callback receives two parameters, the `rawData`: the wire data from the client and the received `timestamp`.

~~~javascript
'use strict';

module.exports = {
  type: 'InitialiseState',
  func: function () {
    return function(rawData, timestamp) {};
  }
};
~~~