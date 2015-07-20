---
layout: documentation
---

# Config `1` `{}` `dep`

The config plugin is available to allow plugins within the system. The plugin sources config from the framework root before overriding the values with project specific ones. You can set your own config by creating a config.json and putting it in the project root.

## Logging

### logLevel `warn`
This sets the logging level. Logs below the configured are not displayed.

Accepted values:
- trace
- debug
- info
- warn
- error

### silencedPlugins

The plugins listed in this setting do not get logged. We call this plugins frequently and this results in a lot of noise.

The defaults are:

- GamesList
- ServerSideUpdate
- StateAccess
- RawStateAccess
- StateMutator
- OnInput
- NewState

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

## Debug

### inputOverlay `false`
When set to true it puts an overlay up that shows the current server values for the mouse position, mouse button state, key state and touches.