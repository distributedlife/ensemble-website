---
layout: documentation
---

# Dimensions
`Client`

Ever wanted to know the current dimensions of the screen? This object is your friend. When call it will calculate the values and return and object describing the dimensions of the screen.

- usableWidth: the width of the canvas area
- usableHeight: the height of the canvas area
- marginSides: half the difference between the actual and usable width
- marginTopBottom: half the difference between the actual and usable height
- orientation: either "portrait or "landscape"
- screenWidth: the window innerWidth
- screenHeight: the window innerHeight
- ratio: the aspect ratio from the [`config`](Config.html)

## Usage

~~~javascript
define('OnPhysicsFrame', ['Dimensions'], function (dimensions) {
  return function tick () {
    return dimensions().get().usableWidth;
  }
});
~~~