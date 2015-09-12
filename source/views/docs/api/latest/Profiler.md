---
layout: documentation
---

# Profiler

The ensemblejs framework comes with a profiler built in and can measure all public methods on your plugins.

You configure the profiler with the [Config](Config.html) plugin. The example configuration below will measure the `run` method in the `RenderLoop` plugin and all matching public methods in the `On` plugin. The wildcard is a starts-with matcher so `ensemblejs:On:client*` would be all public client methods that start with `client`.

~~~json
"measure": {
  "timers": [
    "ensemblejs:RenderLoop:run",
    "ensemblejs:On:*"
  ]
}
~~~

## Custom Profiling

You may want to profile a private method or something that is not automatically profiled. You create a profiler whenever you want and either measure automagically or manually.

Include the profiler as a dependency to your plugin and create a new timer.

~~~javascript
var frequency = 10;
var timer = profiler().timer('mygame', 'player', 'thinkTime', frequency);
~~~

The first three parameters will result in the key: "mygame:player:thinktime". Even when manually created you still need to specify the `timers` property in your config to get the results. This is so you can measure in some environments or for some players but not all. The frequency is what percentage of samples to record. A frequency of 10 is 1 in every 10 samples is record or 10%. A frequency of 100 is 1%, etc. Fewer samples is less accurate data but has a reduced impact on the performance of the code under test.

### To measure manually

As long as all your numbers are in the same base then you can add them using the `manual` function. The profiler will work out the distribution.

~~~javascript
var thinkTime = 340;
timer.manual(thinkTime)
~~~

### To measure automatically

Automatic measurement uses the [`Time`](Time.html) module to record the duration.

~~~javascript
timer.fromHere();
//some other code
timer.toHere();
~~~

## Viewing Results

When the client [disconnects](/docs/guides/events.html#OnDisconnect) it prints the profile numbers. Stopping the server will cause the client to disconnect and give you the numbers you want. The server [`OnServerStop`](/docs/guides/events.html#OnServerStop) event will dump the information to the server console.

### Result Format

~~~json
{
  "namespace": "ensemblejs",
  "plugin": "socket",
  "name": "latency",
  "frequency": 1,
  "samples": 256,
  "min": 1.6275510787963867,
  "max": 133.01310300827026,
  "50th": 1.776980996131897,
  "75th": 1.776980996131897,
  "95th": 1.8611329793930054,
  "99th": 1.8611329793930054
}
~~~

## Disable all profiling

Use this configuration:

~~~json
"measure": {
  "timers": []
}
~~~
