---
layout: documentation
---

# PendingAcknowledgements `dep`, `{}`, `1`

Acknowledgements are how you tell the game server that the client has *seen* an event. This is different to [user input](/docs/guides/actions.html) as [acknowledgements](/docs/guides/ackmap.html) are non-interactive client to server notifications.

Read [this](/docs/guides/ackmap.html) for how to use this plugin and the associated acknowledgement map.

## To Write your own
This work is already done so you don't need to do anything. If you wanted to write your own then you need to adhere to this interface.

~~~javascript
'use strict';

module.exports = {
  type: 'PendingAcknowledgements',
  func: function () {
    return {
      flush: function () {},
      add: function (packetId) {},
      ackLast: function (name) {}
    };
  }
};
~~~

- flush: returns the current pending acknowledgements and resets the pending list.
- add: pushes a packet onto the unacked list
- ackLast: puts an acknowledgement on the last received packet.

Any custom `PendingAcknowledgements` needs to load before the defaults load. Do this in the client side entrypoint.