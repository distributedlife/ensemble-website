---
layout: documentation
---

# RegisterEffect

The effect systems allows you to schedule code that will run for a period of time and then get cleaned up once it's finished. The plugin has a single function that accepts an effect callback. Each effect needs two methods:

- tick: receives a delta each frame
- isAlive: when this function returns false the effect ends
