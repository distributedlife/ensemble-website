---
layout: documentation
---

# Knowing when the user has seen something
The acknowledgement map is how we know that a state has reached the client. At present, this is **any** of the gamer's clients. The current use case is determining when the **client** has seen something. The [Challenge:Response](https://github.com/distributedlife/challenge-response/) game uses this to start the timer after the player seens the challenge.

## Server Side
Like the input map, the acknowledgement map is just a mapping of acknowledgements to functions.

~~~javascript
var onAck = function(state, ack) {
  //ack.rcvdTimestamp
};

module.exports = {
  type: 'AcknowledgementMap',
  func: function() {
    return {
      'my-key': [{target: onAck }]
    };
  }
};
~~~

This plugin supports restricted execution to specific game modes. This [guide explains how to set this up](/docs/guides/restricted-execution.html).

## Client Side
To send an ack from the client you can use the [`PacketAcknowledgments`](/docs/api/ensemblejs-client/latest/PacketAcknowledgements.html) plugin.

~~~javascript
packetAcknowledgements().ackLast('my-key');
~~~
