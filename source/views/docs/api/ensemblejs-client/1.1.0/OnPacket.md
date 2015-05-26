---
layout: documentation
---

#OnPacket [`[*]`](#arrays) [`e`](#events) [`ƒ`](#functions) [`Ø`](#mutable)
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