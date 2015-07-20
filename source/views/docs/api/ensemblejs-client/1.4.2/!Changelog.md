---
layout: documentation
---
# Changelog

## [1.4.2](https://github.com/ensemblejs/ensemblejs-client/commit/af14e2c23551947976a8f7337a066ed74cf0ca41)

- [update to plug-n-play@3.1.1](https://github.com/ensemblejs/ensemblejs-client/commit/70ae320934cd75097c8e196dc6fe36d0156bc625) ([Ryan Boucher](https://github.com/distributedlife))

## [1.4.1](https://github.com/ensemblejs/ensemblejs-client/commit/3cf64cffee5cdbb5b0faf74bdeec3d044c36747c)

- [Updated dependencies to pickup new Logger plugin](https://github.com/ensemblejs/ensemblejs-client/commit/80a2727d17e0b0305a73831a6aec189dfe7ed31a) ([Ryan Boucher](https://github.com/distributedlife))

## [1.4.0](https://github.com/ensemblejs/ensemblejs-client/commit/24a6f0af49c1ddf73259a7dd34b15b5a83ac776a)

- [Don't send packets when there has been no changes](https://github.com/ensemblejs/ensemblejs-client/commit/ac186517cf2b00b995e159cba418d6f63f603b12) ([Ryan Boucher](https://github.com/distributedlife))

## [1.3.0](https://github.com/ensemblejs/ensemblejs-client/commit/1ed3595919006c1ead194f3fb536eba6852d9630)

- [Use plug-n-play@3 which comes with logging support for plugins](https://github.com/ensemblejs/ensemblejs-client/commit/fd81f10b1b5b1be195c7373c9106639b01177111) ([Ryan Boucher](https://github.com/distributedlife))

## [1.2.3](https://github.com/ensemblejs/ensemblejs-client/commit/8c4a19a19e58c89c6a590b273ee365ab2c245c6d)

- [Use window location origin for host and port for socket.io](https://github.com/ensemblejs/ensemblejs-client/commit/983679de106699b91212c95452823b3946d3ad23) ([Ryan Boucher](https://github.com/distributedlife))

## [1.2.1](https://github.com/ensemblejs/ensemblejs-client/commit/47b19218fa56846484ec3c836f90955c37ae3e9f)

- [uses envvar to set serverurl or defaults to localhost](https://github.com/ensemblejs/ensemblejs-client/commit/dfd81a995015d31edb444861aa677a87cd323348) ([Ryan Boucher](https://github.com/distributedlife))
- [use package.json for version](https://github.com/ensemblejs/ensemblejs-client/commit/74e4549347771834f160e01c62b64449308bac71) ([Ryan Boucher](https://github.com/distributedlife))

## [1.1.1](https://github.com/ensemblejs/ensemblejs-client/commit/974b9f08dbd870f06b33ca80b86cf93f968ac6b8)

- [FIX: Client no longer sends input when paused](https://github.com/ensemblejs/ensemblejs-client/commit/dffe8c0d06a7e9fc83a6827820c531f6620c37bb) ([Ryan Boucher](https://github.com/distributedlife))

## [1.1.0](https://github.com/ensemblejs/ensemblejs-client/commit/a1915948553305c725904ddbfc3d3580521ffdd1)

- [mouse click support](https://github.com/ensemblejs/ensemblejs-client/commit/610e03f5829c6390512700d06f2b73c7d6216ca0) ([Ryan Boucher](https://github.com/distributedlife))
- [Fix up input layer resizing.](https://github.com/ensemblejs/ensemblejs-client/commit/56e2a08eb93c8ed2530cc1a6bd3cfee176859986) ([Andy Shaw](https://github.com/henrythehamster))

## [1.0.2](https://github.com/ensemblejs/ensemblejs-client/commit/3b00a6b85a1b6e5444d58a5c72219a74382f1bbd)

- [set on initialise to be an plugin array](https://github.com/ensemblejs/ensemblejs-client/commit/812b0384577fe1d9a8d57f47d2a74b5979ab4736) ([Ryan Boucher](https://github.com/distributedlife))

## [1.0.1](https://github.com/ensemblejs/ensemblejs-client/commit/ac4bf0bda51b211fb31179faf360f734f9585042)

- [moved initialise callback invocation out of socket connect and into client assembly](https://github.com/ensemblejs/ensemblejs-client/commit/e9c0e5c870098f7547a3f12c62b47dd1c2b6a3bf) ([Ryan Boucher](https://github.com/distributedlife))
- [refactored the socket client code](https://github.com/ensemblejs/ensemblejs-client/commit/26000a3ea2fb4e52850327360f8f2893014fef8a) ([Ryan Boucher](https://github.com/distributedlife))
- [fix up client socket tests](https://github.com/ensemblejs/ensemblejs-client/commit/ee7003c9109477a25c6d05e83c0ac3617e8bf56b) ([Ryan Boucher](https://github.com/distributedlife))

## [1.0.0](https://github.com/ensemblejs/ensemblejs-client/commit/c31df1e75f18972bab21314013281b32b6db769b)

- [Bump to 1.0.0 so that NPM does auto-updating](https://github.com/ensemblejs/ensemblejs-client/commit/c5a416c1b384e92cf1728783ed10553eb1119005) ([Ryan Boucher](https://github.com/distributedlife))
- [expanded display into events](https://github.com/ensemblejs/ensemblejs-client/commit/6dd2024c060fc41da2c980b77a6fb99e88fdd720) ([Ryan Boucher](https://github.com/distributedlife))
- [rewrote the view-setup, on-resize and on-each-frames to be event driven callbacks](https://github.com/ensemblejs/ensemblejs-client/commit/657561c30452a5c30e32019deef033eac06d4c7f) ([Ryan Boucher](https://github.com/distributedlife))
- [mouse x and y values are now i n a mouse scope when pushed over the wire](https://github.com/ensemblejs/ensemblejs-client/commit/5dd66aca9884ef4623b5ae55aa094370f3316672) ([Ryan Boucher](https://github.com/distributedlife))

## [0.1.0](https://github.com/ensemblejs/ensemblejs-client/commit/133987651f03197a85691078e5c6da6e0a765131)

- [save player id; renamed setup and update event names](https://github.com/ensemblejs/ensemblejs-client/commit/d1ff2cd3dd25dc25987b31a889df80e1e4fac0b8) ([Ryan Boucher](https://github.com/distributedlife))

## [0.0.9](https://github.com/ensemblejs/ensemblejs-client/commit/495492650fb4b6f9bb869e25962b4422d122c810) ([Ryan Boucher](https://github.com/distributedlife))

- [default the game mode to 'game', expose set on the facade](https://github.com/ensemblejs/ensemblejs-client/commit/ed95d6c88b78351dee355064734cc22dd78d5817) ([Ryan Boucher](https://github.com/distributedlife))

## [0.0.8](https://github.com/ensemblejs/ensemblejs-client/commit/315ec546715e9f290a5488fbbd38aab0c627e7a2)

- [included missing dep](https://github.com/ensemblejs/ensemblejs-client/commit/d07fa150aa1db69885235b957af20fee8c015065) ([Ryan Boucher](https://github.com/distributedlife))

## [0.0.7](https://github.com/ensemblejs/ensemblejs-client/commit/4aed701d2a166adcd89dae4b105d3be3a679d722)

- [removed unused param for client assembly that was missed because we don't test the interface](https://github.com/ensemblejs/ensemblejs-client/commit/f8f149109025ac1a77d1549a44c4ba9311090bb0) ([Ryan Boucher](https://github.com/distributedlife))
- [Removed commented code from update loop](https://github.com/ensemblejs/ensemblejs-client/commit/c08dad5a09a79a3f728f9e691797286b7cb122ed) ([Ryan Boucher](https://github.com/distributedlife))

## [0.0.6](https://github.com/ensemblejs/ensemblejs-client/commit/b38a85dd4ce3dc45690e073c1622a6f5368ffb8c)

- [added more view code as actual view code; removed icon layout](https://github.com/ensemblejs/ensemblejs-client/commit/68dc18d082bb2bee7f39e8bcb5cf00269895b6cd) ([Ryan Boucher](https://github.com/distributedlife))

## [0.0.5](https://github.com/ensemblejs/ensemblejs-client/commit/357eee791ba1b4185f335728edee0ee5dcd11601)

- [fixed incorrected use of pending ack api](https://github.com/ensemblejs/ensemblejs-client/commit/79c73d9fc3399fc04db1a3c997915f1120b8ba21) ([Ryan Boucher](https://github.com/distributedlife))

## [0.0.4](https://github.com/ensemblejs/ensemblejs-client/commit/d71bb294b4451b7b2690796dad07640854876e06)

- [pending acks is now a plugin](https://github.com/ensemblejs/ensemblejs-client/commit/66998bf1f0e909887274c876ba478f16e928e119) ([Ryan Boucher](https://github.com/distributedlife))

## [0.0.3](https://github.com/ensemblejs/ensemblejs-client/commit/744dd315211feaf9adc088738825361d6d8bb670)

- [renamed view-logic/ViewLogic to views; fixed tests](https://github.com/ensemblejs/ensemblejs-client/commit/523b02a93092e401da6891291374890f26b30151) ([Ryan Boucher](https://github.com/distributedlife))

## [0.0.2](https://github.com/ensemblejs/ensemblejs-client/commit/ef86b1221289fbeb19819c11b0ddf3d2d21dd085)

- [add missing socket-io dep](https://github.com/ensemblejs/ensemblejs-client/commit/0977c6e9e4578b9f78d3a3cd1ea67817e36af4d1) ([Ryan Boucher](https://github.com/distributedlife))
- [extracted from prior work](https://github.com/ensemblejs/ensemblejs-client/commit/814dfc6552f673942b58bf465b18d6eb43667f3e) ([Ryan Boucher](https://github.com/distributedlife))
