---
layout: documentation
---

# Logging
Most logging you need is already baked into the ensemblejs framework. Both on the client and on the server any warnings or errors you generate prints to the log.

You can control the degree of logging using the `config.json`.

~~~json
{
  "logging": {
    "logLevel": "warn"
  }
}
~~~

The default value is `warn`. The allowed values are:

- trace: Logging from external libraries used by your app or very detailed application logging.
- debug: Anything else, i.e. too verbose to include in "info" level including parameters passed to functions.
- info: Detail on regular operation. Arguments are not logged at this level.
- warn: A note on something that should be looked at by an operator eventually.
- error: Fatal for a particular request, but the service/app continues servicing other requests. An operator should look at this now.

The ensemblejs logger sends the events to [node-bunyan](https://github.com/trentm/node-bunyan) before they are printed. You can control the log level using bunyan too.

~~~shell
node game.js | bunyan -l info
~~~

The difference between two the two log levels are: when you set the log level in the config file, any logs below that level are replaced with empty functions. This improves the performance of the application. When the log level is controlled at bunyan the system still produces the log, bunyan doesn't display it.

## Framework Logging
At the `info` level the framework will log the execution of all public methods on plugins. At the `debug` level the framework will log the arguments for these plugins as well.

If this is too much then you can silence specific server plugins. Silencing the client plugins will come at a later date. The default silenced client plugins are:

~~~json
[
  "CurrentState",
  "On",
  "OnClientPacket",
  "OnPhysicsFrame",
  "OnPhysicsFrameCompleted",
  "OnRenderFrame",
  "OnServerPacket",
  "PacketAcknowledgements",
  "PhysicsLoop",
  "RenderLoop",
  "StateTracker"
]
~~~

The server uses the config.json file. The defaults are:

~~~json
{
  "logging": {
    "silencedPlugins": [
      "GamesList",
      "OnPhysicsFrame",
      "StateAccess",
      "RawStateAccess",
      "StateMutator",
      "NewState",
      "CurrentState",
      "OnInput"
    ],
  }
}
~~~