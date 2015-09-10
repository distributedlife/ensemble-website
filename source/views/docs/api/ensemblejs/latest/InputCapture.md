---
layout: documentation
---

# InputCapture `Client`

This plugin captures input and manages the current state of the input it focuses on. Input capture plugins exist for keyboard, mouse and touch support.

## Write your own
If you want to write your own InputCapture you need to return a single function that when called it will return the current input state. Input binding should setup during the [`OnClientStart`](OnClientStart.html) event

~~~javascript
'use strict';

module.exports = {
  type: 'InputCapture',
  func: function MyInputCapturePlugin () {
    return function getCurrentState () {
      return {};
    };
  }
};
~~~