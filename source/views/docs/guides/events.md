---
layout: documentation
---

# Events

## OnServerStart
`Server` `No Return Value`

This is the first event to fire within thes system. It receives the path of the game code and the modes array for the game.

~~~javascript
module.exports = {
  type: 'OnServerStart',
  func: function OnServerStart () {
    return function setup (path, modes) {};
  }
};
~~~

## OnServerReady
`Server` `No Return Value`

The `OnServerReady` plugins execute after the server has completed the `OnServerStart` events.

~~~javascript
module.exports = {
  type: 'OnServerReady',
  func: function OnServerReady () {
    return function setup () {};
  }
};
~~~

## OnServerStop
`Server` `No Return Value`

This is the last event in the system. It will fire just before the system exits.

~~~javascript
module.exports = {
  type: 'OnServerStop',
  func: function OnServerStop () {
    return function setup () {};
  }
};
~~~

## OnClientStart
`Client` `No Return Value`

The client executes this role when the client connects. The function receives a single parameter containing the initial game state.

~~~javascript
module.exports = {
  type: 'OnClientStart',
  func: function OnClientStart () {
    return function handleClientStart () {};
  }
};
~~~

## OnClientReady
`Client` [`Mode Enabled`](/docs/guides/restricted-execution.html) `No Return Value`

The `OnClientReady` plugins execute after the client has completed the `OnClientStart` events. This event is the best place to setup your game's client side rendering code. This plugin receives the current `dimensions`.

The guide for using this plugin as setup is [where to put your view code](/docs/guides/view-logic.html). [`Integrating Engines`](/docs/guides/integrating-engines.html) is also useful. As are the following tutorial parts: [`Getting Started II - Canvas`](/docs/tutorials/getting-started-ii-canvas.html), [`Getting Started II - three.js`](/docs/tutorials/getting-started-ii-threejs.html), [`Getting Started II - pixi.js`](/docs/tutorials/getting-started-ii-pixijs.html).

All `OnClientReady` plugins should return a function that accepts the dims.

~~~javascript
module.exports = {
  type: 'OnClientReady',
  func: function LevelOne () {
    return function setup (dims) {};
  }
};
~~~

Or with modes:

~~~javascript
module.exports = {
  type: 'OnClientReady',
  func: function BossLevel () {
    return ['hard', function setup (dims) {}];
  }
};
~~~

## OnConnect
`Client` [`Mode Enabled`](/docs/guides/restricted-execution.html) `No Return Value`

The client will execute when the client connects to the server. The callback receives the current state.

~~~javascript
module.exports = {
  type: 'OnConnect',
  func: function OnConnect () {
    return function handleEvent (state) {};
  }
};
~~~

## OnDisconnect
`Client` [`Mode Enabled`](/docs/guides/restricted-execution.html) `No Return Value`

The client will execute this functions when the client disconnects from the server. The callback receives the current state.

~~~javascript
module.exports = {
  type: 'OnDisconnect',
  func: function OnDisconnect () {
    return function handleEvent () {};
  }
};
~~~

## OnClientConnect
`Server` [`Mode Enabled`](/docs/guides/restricted-execution.html)

This event fires when a client connects to the server. It receives the game state, the socket and the game id and mode.

~~~javascript
module.exports = {
  type: 'OnClientConnect',
  func: function OnClientConnect () {
    return function handle (state, socket, game) {};
  }
};
~~~

## OnClientDisconnect
`Server` [`Mode Enabled`](/docs/guides/restricted-execution.html)

This event fires when a client disconnects from the server. It receives the game state, the socket and the game id and mode.

~~~javascript
module.exports = {
  type: 'OnClientDisconnect',
  func: function OnClientDisconnect () {
    return function handle (state, socket, game) {};
  }
};
~~~

## OnNewGame
`Server` [`Mutates State`](/docs/guides/state.html)

This event fires each time a player creates a new game.

~~~javascript
module.exports = {
  type: 'OnNewGame',
  func: function OnNewGame () {
    return function handle (game) {};
  }
};
~~~

## OnOutgoingClientPacket
`Client` `No Return Value`

This event fires whenever the client sends a packet. The packet is the parameters.

~~~javascript
module.exports = {
  type: 'OnOutgoingClientPacket',
  func: function OnOutgoingClientPacket () {
    return function handle (packet) {};
  }
};
~~~

## OnOutgoingServerPacket
`Server` `No Return Value`

This event fires whenever the server sends a packet. The packet and the socketId are the parameters.

~~~javascript
module.exports = {
  type: 'OnOutgoingServerPacket',
  func: function OnOutgoingServerPacket () {
    return function handle (socketId, packet) {};
  }
};
~~~

## OnIncomingServerPacket
`Client` `No Return Value`

This event fires whenever a packet from the server reaches the client. The packet is the parameter.

~~~javascript
module.exports = {
  type: 'OnIncomingServerPacket',
  func: function OnIncomingServerPacket () {
    return function handle (packet) {};
  }
};
~~~

## OnPhysicsFrame
`Server` `Client` [`Mode Enabled`](/docs/guides/restricted-execution.html) [`Mutates State`](/docs/guides/state.html)

Both the client and the server have physics loops that run independently of each other. These call `OnPhysicsFrame` callbacks supplying the current game state and the delta. The delta is the elapsed game time since the last frame. This time excludes any time the game is in a paused state.

~~~javascript
module.exports = {
  type: 'OnPhysicsFrame',
  func: function OnPhysicsFrame () {
    return function tick (state, delta) {
      return {
        changed: 'state'
      };
    };
  }
};
~~~

## OnPause
`Server` [`Mode Enabled`](/docs/guides/restricted-execution.html) [`Mutates State`](/docs/guides/state.html)

Executed when the player pauses the game. The current game state is the first parameter.

~~~javascript
'use strict';

module.exports = {
  type: 'OnPause',
  func: function OnPause () {
    return function handlePause (state) {};
  }
};
~~~

## OnResume
`Server` [`Mode Enabled`](/docs/guides/restricted-execution.html) [`Mutates State`](/docs/guides/state.html)

The server executes this role when any client sends an unpause message. The current game state is the first parameter.

~~~javascript
module.exports = {
  type: 'OnResume',
  func: function OnResume () {
    return function onResumeCallback (state) {
      var myState = state.for('my-game').get('property');

      return {
        'my-game': {
          property: myState + 1;
        }
      };
    };
  }
};
~~~

## OnMute
`Client`, `No Return Value`

Executed when the player mutes the sound. *Ensemblejs* handles muting and unmuting through UI controls and keyboard bindings. When the player invokes one of these methods this callback executes.

~~~javascript
'use strict';

module.exports = {
  type: 'OnMute',
  func: function OnMute () {
    return function handleOnMute () {};
  }
};
~~~

## OnUnmute
`Client`, `No Return Value`

Executed when the player unmutes the sound. *Ensemblejs* handles muting and unmuting through UI controls and keyboard bindings. When the player invokes one of these methods this callback executes.

~~~javascript
'use strict';

module.exports = {
  type: 'OnUnmute',
  func: function OnUnmute () {
    return function handleOnUnmute () {};
  }
};
~~~

## OnResize
`Client` `No Return Value`

This function executes whenever the screen resizes. *ensemblejs* calculates the new [`Dimensions`](/docs/api/latest/Dimensions.html) for the screen and passes them to the callback.

~~~javascript
'use strict';

module.exports = {
  type: 'OnResize',
  func: function OnResize () {
    return function handleResize (dims) {};
  }
};
~~~

## OnInput
`Server` `No Return Value`

This event callback fires each time the server receives an input packet from a client. The callback receives four parameters, the `rawData`: the wire data from the client, the received `timestamp`, the current game id and mode.

~~~javascript
module.exports = {
  type: 'OnInput',
  func: function OnInput () {
    return function handle (rawData, timestamp, gameId, mode) {};
  }
};
~~~

## OnError
`Deprecated` `Server` `Client` `No Return Value`

This event will listen for socket events that are current sent to the browser console. Executes whenever the socket has an error. The callback receives the error data from the socket as a parameter.

~~~javascript
module.exports = {
  type: 'OnError',
  func: function OnError () {
    return function beNotifiedOfError (data) {};
  }
};
~~~