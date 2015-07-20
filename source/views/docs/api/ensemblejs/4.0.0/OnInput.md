---
layout: documentation
---

# OnInput `∞` `ev` `ƒ` `Ø`
This event callback fires each time the server receives an input packet from a client. The callback receives four parameters, the `rawData`: the wire data from the client, the received `timestamp`, the current gameId and the current game mode.

~~~javascript
'use strict';

module.exports = {
  type: 'InitialiseState',
  func: function () {
    return function(rawData, timestamp, gameId, mode) {};
  }
};
~~~