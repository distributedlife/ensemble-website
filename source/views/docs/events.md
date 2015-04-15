---
layout: documentation
---
# Reacting to framework events

*Ensemble* ships with a set of six events that you can register listeners for. When an event occurs *ensemble* calls your function.

- `OnMute`: called when the player clicks the mute button.
- `OnUnmute`: called when the player clicks the unmute button.
- `OnPause`: called when the game pauses.
- `OnResume`: called when the game resumes.
- `OnConnect`: called when the client has connected to the server.
- `OnDisconnect`: called when the client has disconnected from the server.

## An example approaches
~~~javascript
'use strict';

var Howler = require('howler').Howler;

module.exports = {
  type: 'OnMute',
  func: function () {
    return function () {
      Howler.mute();
    };
  }
};
~~~