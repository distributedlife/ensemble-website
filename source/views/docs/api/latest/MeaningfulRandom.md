---
layout: documentation
---

# MeaningfulRandom
`Client` `Server`

A meaninful random number is one that will influence the outcome of the game. Consider a dice roll. The result is important to the game. This is a meaningful random number.

The `MeaningfulRandom` plugin is the one you must use to generate these numbers. The client implementation will return `Infinity` the server version will generate the real number. We do it this way because the server has to be the source of truth for the game. The client will run all the same logic and so, in order to stop different random numbers being generated, the client will always roll Infinity. Ensure your code handles infinity well.