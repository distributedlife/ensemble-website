---
layout: documentation
---

# SocketBehaviour `dep`, `1`, `{}`

SocketBehaviour is the client half of the socket connection. It sets up event bindings for the following:

- connect: calls [`OnConnect`](OnConnect) plugins
- disconnect: calls [`OnDisconnect`](OnDisconnect) plugins
- playerId: sets the playerId
- initialState: calls [`OnSetup`](OnSetup) plugins
- updateState: calls [`OnPacket`](OnPacket) plugins
- error: calls [`OnError`](OnError) plugins

It also wires the following window events

- blur: emit pause event when game loses focus
- focus: emit unpause event when game regains focus
- mousedown: emit unpause event when game regains focus
- mouseup: emit unpause event when game regains focus

## To Write your own
This work is already done so you don't need to do anything. If you wanted to write your own then you need to adhere to this interface.

~~~javascript
'use strict';

module.exports = {
  type: 'SocketBehaviour',
  func: function () {
    return {
      connect: function () {
        //connect to server
      }
    }
  }
};
~~~

Any custom `SocketBehaviour` needs to load before the defaults load. Do this in the client side entrypoint.