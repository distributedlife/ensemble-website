---
layout: documentation
---

# Dimensions `dep` `{}` `1`

Ever wanted to know the current dimensions of the screen? This object is your friend. When call it will calculate the values and return and object describing the dimensions of the screen.

- usableWidth: the width of the canvas area
- usableHeight: the height of the canvas area
- marginSides: half the difference between the actual and usable width
- marginTopBottom: half the difference between the actual and usable height
- orientation: either "portrait or "landscape"
- screenWidth: the window innerWidth
- screenHeight: the window innerHeight
- ratio: the [`AspectRatio`](AspectRatio)

## Using it as a plugin
Use it like any other plugin.

~~~javascript
'use strict';

define('MyCode', ['Dimensions'], function(dimensions) {
  return function () {
    return dimensions().get().usableWidth;
  }
});
~~~

## Write your own
If you want to write your own `Dimensions` object then you need to adhere to two interfaces. The first is the plugin needs to return an object with a `get` method. This does the calculate and returns a second object with the properties.

~~~javascript
'use strict';

module.exports = {
  type: 'Dimensions',
  func: function () {
    return {
      get: function () {
        return {
          usableWidth: 1000,
          usableHeight: 500,
          marginSides: 10,
          marginTopBottom: 20,
          orientation: "portrait",
          screenWidth: 2000,
          screenHeight: 1000,
          ratio: "2.0"
        };
      }
    }
  }
};
~~~