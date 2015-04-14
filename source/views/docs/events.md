---
layout: documentation
---
# Reacting to framework events

*Ensemble* ships with a set of six events that you can register listeners for. When an event occurs *ensemble* calls your function.

- `OnMuteCallback`: called when the player clicks the mute button.
- `OnUnmuteCallback`: called when the player clicks the unmute button.
- `OnPauseCallback`: called when the game pauses.
- `OnResumeCallback`: called when the game resumes.
- `OnConnect`: called when the client has connected to the server.
- `OnDisconnect`: called when the client has disconnected from the server.

## An example approaches
~~~javascript
'use strict';

var Howler = require('howler').Howler;

module.exports = {
  type: 'OnMuteCallback',
  func: function () {
    return function () {
      Howler.mute();
    };
  }
};
~~~