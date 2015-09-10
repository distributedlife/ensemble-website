---
layout: documentation
---

# Physics & Render Loops

Both the server and the client have two loops running on them. These handle the physics, rendering and state transmission. This guide talks about the loops and how you can get involved.

## Client Side

### Physics Loop

The *ensemblejs* framework comes with client side prediction built in. The physics loop runs on the client and on the server. In both cases the same code executes. The difference is the source state. The client operates on the last known server state and then replays all input since that last known state. The server processes all input as it comes in.

The primary differences are the server state is behind the client due to latency and the client physics loop only processes input it knows about.

The default interval for the physics loop is 15ms. If you want some to run in the physics loop create an [`OnPhysicsLoop`](/docs/api/Events#OnPhysicsLoop.html) plugin.

~~~json
"client": {
  "physicsUpdateLoop": 15
}
~~~

### Render Loop

The render loop uses `requestAnimationFrame` to synchronise with the browser's refresh cycle. Each frame the render loop calls all the [`OnRenderFrame`](/docs/api/latest/Events#OnRenderFrame.html) events. If the total execution time of the frame callbacks is less than 15ms you'll get a framerate of 60fps. Otherwise it will drop down to 30fps or 15fps.

We recommend you use the [state tracker](/docs/guides/tracking-state-changes.html) to alter your renderable objects rather than using the [`OnRenderFrame`](/docs/api/latest/Events#OnRenderFrame.html). This will help to keep your render loop as short as possible.

## Server Side

### Physics Loop

The server physics loop processes all the input from all the clients. It updates the latest state and keeps track of which input from the clients it has processed.

The default interval for the physics loop is 15ms. If you want some to run in the physics loop create an [`OnPhysicsLoop`](/docs/api/Events#OnPhysicsLoop.html) plugin.

~~~json
"server": {
  "physicsUpdateLoop": 15
}
~~~


### State Transmission

The server sends state out to all connected servers multiple times per second. The interval defaults to 45ms. This fires an [`OnOutgoingServerPacket`](/docs/api/latest/Events.html#OnOutgoingServerPacket) event.

~~~json
"server": {
  "pushUpdateFrequencyMs": 45
}
~~~