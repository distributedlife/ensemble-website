---
layout: documentation
---

# Restricted Execution

By default all plugins registered execute for every game. This may not be the desired outcome when you have more than one game mode.

Consider a game where the player starts off with a 100 units of ammo. The game supports three skill levels: *normal*, *hard* and *goulish*. The key difference between the skill levels is the emphasis on effective use of resources. We want to reduce the starting ammo for the player. The health remains constant across all three levels.


~~~javascript
module.exports = {
  type: 'StateSeed',
  func: function () {
    return {
      'game': {
        'ammo': 100,
        'health': 100
      }
    };
  }
};
~~~

Our 100 ammo with our default setup isn't going to work here. Let's define a set of common attributes for all game modes. This just has our health at the moment.

Note that in the following samples I've removed the plugin boilerplate. Also note that each of these plugins will be placed in a separate file. This is because of our convention of defining one plugin per file.

~~~javascript
return {
  'game': {
    'health': 100
  }
};
~~~

Now we can define three separate plugins. One for each skill level. Note that we are no longer returning a hash, but rather an array. The first element is the game mode and the second attribute is the original hash.

Normal.

~~~javascript
return ['normal', {
  'game': {
    'ammo': 100
  }
}];
~~~

Hard.

~~~javascript
return ['hard', {
  'game': {
    'ammo': 60
  }
}];
~~~

And goulish.

~~~javascript
return ['goulish', {
  'game': {
    'ammo': 20
  }
}];
~~~

## A modes file.

You'll need to tell the game engine about the game modes the player can use. Do this through a modes.json file that you put in the `game/js` folder.

~~~json
["normal", "hard", "goulish"]
~~~

This file is not required if you have one game mode. See [this guide](/docs/guides/routes.html) for more information.