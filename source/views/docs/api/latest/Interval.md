---
layout: documentation
---

# Interval
`Client` `Server`

The interval plugin allows you to create a plugin that when called by the `OnRenderFrame` or `OnPhysicsFrame` plugins will self-regulate to only run a configured number of times per interval e.g. once a second.

## Example

~~~javascript
module.exports = {
  type: 'OnPhysicsFrame',
  deps: ['Interval'],
  func: function OnPhysicsFrame (interval) {
    function myCode () {
      console.log('called');
    }

    return interval()(myCode).every(2).minutes();
  }
}
~~~

## Usage

~~~javascript
interval()(myCode).every(1).millisecond();
interval()(myCode).every(15).milliseconds();
interval()(myCode).every(1).second();
interval()(myCode).every(15).seconds();
interval()(myCode).every(1).minutes();
interval()(myCode).every(15).minutes();
interval()(myCode).every(1).hour();
interval()(myCode).every(15).hours();

interval()(myCode).about(15).timesPer.second();
interval()(myCode).about(15).timesPer.minute();
interval()(myCode).about(15).timesPer.hour();
~~~