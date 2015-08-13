---
layout: documentation
---

# Logger `1` `{}`

Both the client and the server come with access to the `Logger` plugin that you can use to log information.

Ensemble has five log methods. The wording is taking from the [node-bunyan](https://github.com/trentm/node-bunyan) library that ensemblejs uses.

- trace: Logging from external libraries used by your app or very detailed application logging.
- debug: Anything else, i.e. too verbose to include in "info" level including parameters passed to functions.
- info: etail on regular operation. Arguments are not logged at this level.
- warn: A note on something that should be looked at by an operator eventually.
- error: Fatal for a particular request, but the service/app continues servicing other requests. An operator should look at this soon(ish).

A guide on this topic exists: [Logging](/docs/guides/logging.html).