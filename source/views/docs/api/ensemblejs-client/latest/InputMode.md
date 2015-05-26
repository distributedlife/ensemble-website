---
layout: documentation
---

# InputMode `∞` `dep` `{}` `Ø`

An input mode modules capture input and manages the current state of the input it cares for. An input mode may focus on keyboard or mouse devices or touch input. An input mode could do more.

The socket client asks the input modes for their current state so it can send it to the server.

## Write your own
If you want to write your own InputMode you need to return an object with a method called `InputMode`. When this executes you should bind your input handlers. This function should return an object with a function called `getCurrentState`. When called it should return the current input state.

~~~javascript
'use strict';

module.exports = {
  type: 'InputMode',
  func: function () {
    return {
      InputMode: function () {
        return {
          getCurrentState: function () {
            return {};
          }
        };
      };
    }
  }
};
~~~