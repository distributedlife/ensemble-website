---
layout: documentation
---

# Config `1` `{}` `dep`

The config plugin is available to allow plugins within the system. The plugin sources config from the framework root before overriding the values with project specific ones. You can set your own config by creating a config.json and putting it in the project root.

The client get it's values by making a request to the server at startup.

## Logging

### logLevel `warn`
This sets the logging level. Logs below the configured are not displayed.

Accepted values:
- trace
- debug
- info
- warn
- error

## Debug

### inputOverlay `false`
When set to true it puts an overlay up that shows the current server values for the mouse position, mouse button state, key state and touches.