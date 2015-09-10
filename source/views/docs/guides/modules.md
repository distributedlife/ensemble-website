---
layout: documentation
---

# Plugins
At some point in your life you're going to interact with the *Ensemble* plugin system. You have two options: load a plugin or define your own.

## Loading a Plugin
Loading a plugin is pretty easy to do. It will happen automatically for you if you put it in one of the predefined js folders.

## Defining a Plugin
More often than not you'll be defining a plugin. Defining a plugin is writing code that'll another part of the system executes. More often than not where you define your code will be far removed from where it executes.

This will force your plugins to be self-contained. This is a design goal.

### Roles
A plugin fills a role. You can think of these as types from a typed language. Each role defines an implicit interface. Adhere to that implicit interface and all will be well.

Most interfaces are trending towards being a single function.

The key difference between this system and an existing JavaScript module loader i.e. CommonJs or require.js, is that those module loaders are about loading a specific module. Give me the async module, etc. This is about having a dependency on an interface i.e. give me whoever fills the async role. Or, for arrays, give me everyone who claims to do that role.

### Scopes
Scopes let you limit which game modes your code executes. Rather than returning the original constant, function or hash you return an array. The first element is the mode in which the game runs and the second is the original constant, function or hash.

Using a '*' indicates the game executes in all modes. As does not setting a mode.

~~~javascript
return function() { console.log('executes in all modes'); };
return ['*', function() { console.log('same to above'); }];
return ['my-game', function() { console.log('my-game only'); }];
return [['my-game', 'other-mode'], function() { console.log('both my-game and other-mode only'); }];
~~~

This plugin supports restricted execution to specific game modes. This [guide explains how to set this up](/docs/guides/restricted-execution.html).

### Namespaces

You namespace any roles that you define yourself.

`Server` vs. `AndyGame-Server`

### Examples

Each plugin has some accompanying boilerplate. You have to define the role (known as type). You can define your dependencies and supply a function that accepts those dependences.


#### Returning a function (and how to use dependencies)

~~~ javascript
// static includes
var each = require('lodash').each;

module.exports = {
  type: "Effectasaurus",
  deps: ["EffectMapper"],
  func: function (effectMapper) {
    //Static and private properties and functions
    var effects = [];

    var addEffect = function (effect) {
      effects.push(effect);
    };

    //Or, return a new function that the consumer executes
    return function () {
      var particles = [];
      var addParticle = function (particle) {
        particles.push(particle);
      };

      return {
        publicProperty: "Seventeen",
        exposeAddParticle: function (particle) {
          return add(particle);
        },
        exposeAddEffect: function (effectOptions) {
          return addEffect(effectMapper()(effectOptions));
        }
      }
    }
  }
};
~~~

#### Returning a hash (also an example without dependencies)

~~~ javascript
module.exports = {
    type: "ModuleWithNoDependencies",
    func: function () {
        //Static and private properties and functions
        var effects = [];

        //define a public interface.
        return {
            addEffect: function (effect) {
                effects.add(effect);
            }
        };
    }
};
~~~

#### Using DefinePlugin

There is a third approach where you can use the `DefinePlugin` plugin

~~~ javascript
definePlugin()("IHasDependencies", ["DepA"], function (depA) {
    var effects = [];

    return {
        addEffect: function (effect) {
            effects.add(depA()());
        }
    };
});
~~~

#### Using Dependencies
One important thing to remember when using dependencies: you can't use them **during the define phase**. I let you load plugins in any order. Because of this you can't use a dependency until all the plugins have loaded. I don't guarantee that it will be there.

If you use your dependencies within the object you are returning, then you will be ok. Here is a code example that shows you the two places.

~~~ javascript
definePlugin()("IHasDependencies2", ["DepB"], function (depB) {
    //Executed when the plugin loads
    //depB() <-- this will fail with "Plugin DebB not found."

    return function () {
        //Executed when the consumer invokes plugin.
        return depB();
    };
});
~~~