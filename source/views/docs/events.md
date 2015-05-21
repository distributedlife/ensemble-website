---
layout: documentation
---
# [Reacting to framework events](#reacting-to-framework-events)

*Ensemble* ships with a set of six events that you can register listeners for. When an event occurs *ensemble* calls your function.

- `OnConnect`: called when the client has connected to the server.
- `OnDisconnect`: called when the client has disconnected from the server.
- `OnEachFrame`: called on each frame.
- `OnMute`: called when the player clicks the mute button.
- `OnPause`: called when the game pauses.
- `OnResize`: called when the screen resizes.
- `OnResume`: called when the game resumes.
- `OnUnmute`: called when the player clicks the unmute button.

## [An example approaches](#an-example-approaches)
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