---
layout: documentation
---

# Config

The config plugin is available to allow plugins within the system. The plugin sources config from the framework root before overriding the values with project specific ones. You can set your own config by creating a config.json and putting it in your project at the root level. Configures are deep merged. This means you only need to specify the properties you want to override.

The client get it's values by making a request to the server at startup.

## Client

These values are client only.

#### aspectRatio `2.6`
How much wider the game area is to it's height.

#### widescreenMinimumMargin `32`
How much margin should their be between the longest sides and the browser frame.

#### element `canvas`
The id of the element that will have the canvas attached to it.

#### inputElement `input`
The id of the element to accept input.

## Server

These values are server only.

#### physicsUpdateLoop `15`
Frequency in milliseconds to run the physics loop on the server.

#### pushUpdateFrequencyMs `45`
Frequency in milliseconds to push new state to the clients.

## Logging

#### logLevel `warn`
This sets the logging level. Logs below the configured value are not displayed.

Accepted values:
- trace
- debug
- info
- warn
- error

#### silencedPlugins

The plugins listed in this setting do not get logged. We call this plugins frequently and this results in a lot of noise.

The defaults are:

- $
- Config
- CurrentState
- GamesList
- LowestInputProcessed
- On
- OnInput
- OnOutgoingServerPacket
- OnPhysicsFrame
- RawStateAccess
- StateAccess
- StateMutator
- Time

### expressBunyonLoger

#### excludes

These properties are not reported by the expressBunyonLogger. We exclude these properties because they not useful.

The defaults are:

- req
- res
- res-headers
- response-hrtime
- short-body
- req-headers
- incoming
- req_id
- body
- user-agent
- os

## debug

These plugins

#### inputOverlay `false`
When set to true it puts an overlay up that shows the current server values for the mouse position, mouse button state, key state and touches.

#### network `false`
When set to true it puts an overlay up that displays the current network latency and traffic information.

#### time `false`
When set to true it displays the current time on the client and on the server.

## measure

These properties relate to configuring the [Profiler](Profiler.html)

#### timers

An array of strings that match plugins and their public methods. Any plugin that matches will be profiled.

~~~json
"measure": {
  "timers": [
    "ensemblejs:RenderLoop:run",
    "ensemblejs:On:*"
  ]
}
~~~

In this example only the `run` method on the `RenderLoop` plugin is profiled. Whilst all public methds on the `On` plugin are profiled.

# /defaults.json

~~~json
{
  "client": {
    "aspectRatio": 2.6,
    "widescreenMinimumMargin": 32,
    "element": "canvas",
    "inputElement": "input"
  },
  "server": {
    "physicsUpdateLoop": 15,
    "pushUpdateFrequencyMs": 45
  },
  "logging": {
    "logLevel": "warn",
    "silencedPlugins": [
      "$",
      "Config",
      "CurrentState",
      "GamesList",
      "LowestInputProcessed",
      "On",
      "OnInput",
      "OnOutgoingServerPacket",
      "OnPhysicsFrame",
      "RawStateAccess",
      "StateAccess",
      "StateMutator",
      "Time"
    ],
    "expressBunyanLogger": {
      "excludes": [
        "req",
        "res",
        "res-headers",
        "response-hrtime",
        "short-body",
        "req-headers",
        "incoming",
        "req_id",
        "body",
        "user-agent",
        "os"
      ]
    }
  },
  "debug": {
    "inputOverlay": false,
    "network": false,
    "time": false
  },
  "measure": {
    "timers": []
  }
}
~~~