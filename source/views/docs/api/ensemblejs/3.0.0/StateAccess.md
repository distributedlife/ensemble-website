---
layout: documentation
---

# StateAccess `dep` `1` `{}`

The `StateAccess` plugin is the way to get the current state on the server. It provides a single method called for. This will provide access to your game's state. From here you can use the `get` function to retreive either the value for properties, or if the value is a hash, a function that provides access to the next layer down.

Here is an example.

~~~javascript
var ourInaccessibleState = {
  namespace: {
    player: {
      age: 34
    },
    month: "May"
  }
}

var playerAge = state().for('namespace').get("player")("age");
var month = state().for('namespace').get("month");

console.log(playerAge);   //34
console.log(month);       //May
~~~