---
layout: documentation
---

# StateAccess `dep` `1` `{}`

The `StateAccess` plugin is the way to get the current state on the server. It provides a single method called get. This will return either the value for properties, or if the value is a hash, a function that provides access to the next layer down.

Here is an example.

~~~javascript
var ourInaccessibleState = {
  player: {
    age: 34
  },
  month: "May"
}

var playerAge = state().get("player")("age");
var month = state().get("month");

console.log(playerAge);   //34
console.log(month);       //May
~~~