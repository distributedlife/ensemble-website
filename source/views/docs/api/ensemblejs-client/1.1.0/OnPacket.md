---
layout: documentation
folders: ["docs", "api", "ensemblejs-client", "1.1.0"]
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

##arrays, `[*]`
There can be any number of registered role for the type. Including zero.

##functions, `ƒ`
Roles of this type should return a single function.

##events, `e`
Roles with this attribute are event driven. They will execute automatically and you do not need to require them as dependencies

##singleton, `AΩ`
At most one of these in the system. Defining a second will replace the first and result in undefined behaviour.

##objects, `{}`
Roles of this type should return an object that adheres to the interface.

##dependenecies, `dep`
Roles of this type need to be explicitly wired as dependencies before use.

##mutable, `Ø`
Roles of this type have their return values discarded.

##deprecated, `deprecated`
We have deprecated this role in this release. It's use is ill-advised.