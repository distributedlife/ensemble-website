---
layout: documentation
---
# api-documentation

The client and server components of *ensemblejs* exposes places where you can put your code to run. These are either event callbacks or roles that your code needs to fill.

Short-hand labels throughout the documentation provide at a glance details about each role. The short-hands are described below.

## arrays
`∞`
There can be any number of registered role for the type. Including zero.

## constant
`const`
Roles of this type return a constant object that do not change.

## dependencies
`dep`
Roles of this type need to be explicitly wired as dependencies before use.

## deprecated
`deprecated`
We have deprecated this role in this release. It's use is ill-advised.

## events
`ev`
Roles with this attribute are event driven. They will execute automatically and you do not need to require them as dependencies

## functions
`ƒ`
Roles of this type must return a single function.

## mutable
`Ø`
Roles of this type will have their return values discarded.

## objects
`{}`
Roles of this type must return an object that adheres to the interface.

## singleton
`1`
At most one of these in the system. Defining a second will replace the first and result in undefined behaviour.

## Supports mode restriction
`['*']`
Roles of this type allow you to control which game mode to apply them.