---
layout: documentation
---

#OnPacket `∞` `ev` `ƒ` `Ø`
The client executes this role whenever it receives the packet from the server. The packet is mutable; changing it may result in undefined behaviour.

~~~javascript
'use strict';

module.exports = {
  type: 'OnPacket',
  func: function () {
    return function (packet) {
      // respond to new packet
    };
  }
};
~~~