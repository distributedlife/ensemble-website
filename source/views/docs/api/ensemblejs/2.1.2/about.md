---
layout: documentation
---
# Changelog

## [2.1.2](https://github.com/ensemblejs/ensemblejs/commit/8110532d1b0761272d33312f76163dcdf94054e0)

- [FIX: missing file](https://github.com/ensemblejs/ensemblejs/commit/828f7f9d04b278a6687e9d6263c9dbdda36cd04a) ([Ryan Boucher](https://github.com/distributedlife))

## [2.1.1](https://github.com/ensemblejs/ensemblejs/commit/d7fcc116e23e9de68b812321247a72084afa0027)

- [FIX: calculation of frame delta no longer includes time spent paused](https://github.com/ensemblejs/ensemblejs/commit/cd882c4466562f31b2cb239987c1e371fbbbca7a) ([Ryan Boucher](https://github.com/distributedlife))

## [2.1.0](https://github.com/ensemblejs/ensemblejs/commit/c64b2a586e165cc0d49b3bedb48af6c680b412aa)

- [Input callbacks can get the current time delta](https://github.com/ensemblejs/ensemblejs/commit/0ba44d94caf9925a464cf9509ddcadb8e074a239) ([Ryan Boucher](https://github.com/distributedlife))

## [2.0.0](https://github.com/ensemblejs/ensemblejs/commit/54f913230d0633552308e82e1ec4af0ec8299ae4)

- [renamed keypress to onRelease](https://github.com/ensemblejs/ensemblejs/commit/841e2fc5552b38e5951cf0a96f6fd2c4b1f4211b) ([Ryan Boucher](https://github.com/distributedlife))
- [added mouse click tests which are really just keyboard input tests](https://github.com/ensemblejs/ensemblejs/commit/6c40822110d028f9d0b24b57c67277519b43d025) ([Ryan Boucher](https://github.com/distributedlife))
- [use gulp-sass rather than gulp-ruby-sass](https://github.com/ensemblejs/ensemblejs/commit/5abf9b1a2f04e4c58e4721b0abad1727936da68b) ([Ryan Boucher](https://github.com/distributedlife))
- [added ruby version for build tooling](https://github.com/ensemblejs/ensemblejs/commit/55f9c215083519ab38a41916713a31e0aedc346d) ([Ryan Boucher](https://github.com/distributedlife))

## [1.0.0](https://github.com/ensemblejs/ensemblejs/commit/baf9c88df8be5bd68cca95bc059d5f43eddfb5de)

- [the nothing callback can now mutate state like the other callbacks, fixed up tests around this behaviour. Added a breaking change around state expectations so this version won't work with prior versions of the client](https://github.com/ensemblejs/ensemblejs/commit/31c7a6c11bf4de6b935a19c5cef8f209355858bd) ([Ryan Boucher](https://github.com/distributedlife))

## [0.1.1](https://github.com/ensemblejs/ensemblejs/commit/5ed143f10fc27a7408977466603d9dcd59ff7c96)

- [updated deps](https://github.com/ensemblejs/ensemblejs/commit/fca21a24c23ed58a636cbf8f247a7359eadaa40d) ([Ryan Boucher](https://github.com/distributedlife))

## [0.1.0](https://github.com/ensemblejs/ensemblejs/commit/45f3eb4da520ca0bfbf1c6036e4e317caabf0de8)

- [extracted function to make if statement more readable](https://github.com/ensemblejs/ensemblejs/commit/3f6ff8dfab09727a0a08d08431cfa4965ab2faeb) ([Ryan Boucher](https://github.com/distributedlife))
- [reworded function to make it reflect what it does](https://github.com/ensemblejs/ensemblejs/commit/3db187aeeb82ba9dfce16aca3680fae294a8fe2d) ([Ryan Boucher](https://github.com/distributedlife))

## [0.0.12](https://github.com/ensemblejs/ensemblejs/commit/bd18f5f57a9ac38c92136fbbc504456dc9143f17)

- [updated the state emission frequency to 15ms. This will make client rendering of server values smoother](https://github.com/ensemblejs/ensemblejs/commit/e926794b1d76f872a70e3bd1c1a69e0cfa1b3092) ([Ryan Boucher](https://github.com/distributedlife))

## [0.0.10](https://github.com/ensemblejs/ensemblejs/commit/505df16706539abbe64026fa3f42e83a51435868)

- [the server update loop now mutates state changes; state mutator doesn't do anthing if it gets no state](https://github.com/ensemblejs/ensemblejs/commit/12115a3a4592b7f05c1b936365f753e65235a7f4) ([Ryan Boucher](https://github.com/distributedlife))

## [0.0.9](https://github.com/ensemblejs/ensemblejs/commit/b2f3ed18affcb4574fcdc3efa0382081ada54565)

- [ActionMap and AcknowledgementMaps are now arrays](https://github.com/ensemblejs/ensemblejs/commit/af177d5d57c2455a7209a4df7379ded908294a94) ([Ryan Boucher](https://github.com/distributedlife))

## [0.0.8](https://github.com/ensemblejs/ensemblejs/commit/d2d8d922d7b0187fe2a9b925844b35d448d747ed)

- [fix socket io namespace when there is but one mode](https://github.com/ensemblejs/ensemblejs/commit/42a79a2cb0b219d687791b8cde49f418fbd7379d) ([Ryan Boucher](https://github.com/distributedlife))

## [0.0.7](https://github.com/ensemblejs/ensemblejs/commit/c2c78e4e2072d71bbd1fec4d3451b0c91bee090d)

- [change single mode test to string and not array](https://github.com/ensemblejs/ensemblejs/commit/fa80a4c14a9930e3f2c6221ceaf60e82937bdc8e) ([Ryan Boucher](https://github.com/distributedlife))

## [0.0.6](https://github.com/ensemblejs/ensemblejs/commit/e6b365987210fba8c5c2a2c2e741969aa7a3618e)

- [handle situation where only single mode is supplied](https://github.com/ensemblejs/ensemblejs/commit/89c0b38b3b038fd824f97fa8f11490bdaa124877) ([Ryan Boucher](https://github.com/distributedlife))

## [0.0.5](https://github.com/ensemblejs/ensemblejs/commit/2a16b7a3d6094fe185077b7bd65210f5a546a8e9)

- [removed inch-unfurl dep](https://github.com/ensemblejs/ensemblejs/commit/1cac417767352ace9937d7519cecda5f644089a6) ([Ryan Boucher](https://github.com/distributedlife))

## [0.0.4](https://github.com/ensemblejs/ensemblejs/commit/68776d3d1631c7cedb76edf8bc7d4b7acc471f03)

- [fix reference to assets](https://github.com/ensemblejs/ensemblejs/commit/a95a789312119c7f7ce4fc3fa7f7460572748d06) ([Ryan Boucher](https://github.com/distributedlife))

## [0.0.3](https://github.com/ensemblejs/ensemblejs/commit/311d8c4c477eb8b8ff39976cceaa56975195d464)

- [copy source css files over; remove all references to inch](https://github.com/ensemblejs/ensemblejs/commit/815d1dc919a1c18d405476d7a9ab4f2af80f0a10) ([Ryan Boucher](https://github.com/distributedlife))

## [0.0.2](https://github.com/ensemblejs/ensemblejs/commit/2bc9d6e2fc03960d1ff13e9819cecf7f0055e3ef)

- [removed references to inch in assets; moved framework assets from game into repo](https://github.com/ensemblejs/ensemblejs/commit/e7864da57da30bc8136500b3cc31efe5300bb1a5) ([Ryan Boucher](https://github.com/distributedlife))
- [rename start-here to ensemble](https://github.com/ensemblejs/ensemblejs/commit/fe3e16bd84f9140448ea18e8afbb38a2c7070e29) ([Ryan Boucher](https://github.com/distributedlife))
- [renamed packagee](https://github.com/ensemblejs/ensemblejs/commit/c8e4fd90275695da7a5a3f2a6e7abaa135755f47) ([Ryan Boucher](https://github.com/distributedlife))