---
layout: documentation
---

# InputCapture `∞` `dep` `{}` `Ø`

This plugin captures input and manages the current state of the input it cares for. An input capture plugin may focus on keyboard or mouse devices or touch input.

The socket client asks the input capture plugins for their current state so it can send it to the server.

## Write your own
If you want to write your own InputCapture you need to return an object with a method called `InputCapture`. When this executes you should bind your input handlers. This function should return an object with a function called `getCurrentState`. When called it should return the current input state.

~~~javascript
'use strict';

module.exports = {
  type: 'InputCapture',
  func: function () {
    return function () {
      return {
        getCurrentState: function () {
          return {};
        }
      };
    };
  }
};
~~~