---
layout: documentation
---
# Changelog

## [4.2.0](https://github.com/ensemblejs/ensemblejs/commit/6cf2da83c4b05d7f1c902fd36e72548856d6698e)

- [ignore case when registering keys](https://github.com/ensemblejs/ensemblejs/commit/776f443bed7a253a99364d460a1eaa0304f4283e)
- [config support](https://github.com/ensemblejs/ensemblejs/commit/776f443bed7a253a99364d460a1eaa0304f4283e)

## [4.1.0](https://github.com/ensemblejs/ensemblejs/commit/fe84ebbf7c451ba6decad7d5388f48bd7741813c)

- [support for configuration file to set log level or silence logging of plugins](https://github.com/ensemblejs/ensemblejs/commit/dfcd88ad804ee70c06a320ecc76c976b94b187d7)

## [4.0.0](https://github.com/ensemblejs/ensemblejs/commit/03b0309047faaf638b7ac6c3f3c22221e4adb2b3)

- [Framework now logs socket events](https://github.com/ensemblejs/ensemblejs/commit/77ec8e5ed45bbb8fbe14fee7a6d22f8134d50197)
- [Remove CLI and the need for a global install](https://github.com/ensemblejs/ensemblejs/commit/16ce80a493dc9f4e76db46ea7664a0f85429bfd6)
- [Framework now supports logging](https://github.com/ensemblejs/ensemblejs/commit/f1168bdfb2f82792b2bc7b9bc5c6a1a2b45ceec5)

### Steps for upgrading.
The breaking change is the removal of the CLI aspect of the ensemblejs framework. Installin the package globally is no longer neccessary.

Add a new file to your repository. Name it something like game.js. The contents will look like this.

~~~javascript
require('ensemblejs').runGameAtPath(process.cwd() + '/game');
~~~

Change the scripts part of your package.json. The start script will start your game.

~~~json
"scripts": {
 "start": "gulp && node game.js"
}
~~~

If you have bunyan installed globally: `npm i bunyan -g` then you can use the following to format the log output.

~~~json
"scripts": {
 "start": "gulp && node game.js | bunyan -o short -l info"
}
~~~

## [3.2.1](https://github.com/ensemblejs/ensemblejs/commit/b66eb70a89f62b4df16130038683b9e6fe56daf5)

- [serve compressed content if requested](https://github.com/ensemblejs/ensemblejs/commit/f5acd7f9ce336840251eb3b6c0870a69d57097e0)
- [use package.json for version number](https://github.com/ensemblejs/ensemblejs/commit/3f450b74ebb296d2a8846b18447ffab8fa07ef95)

## [3.1.4](https://github.com/ensemblejs/ensemblejs/commit/e2ce86759c938f560069fe5f85ebe378e0ec16a4)

- [Jade files update to reference minified files](https://github.com/ensemblejs/ensemblejs/commit/fa13b6dabea14d8a291aa9fefc0ac35438090d2c)

>>>>>>> Stashed changes
## [3.1.0](https://github.com/ensemblejs/ensemblejs/commit/04a43117546e5b33964ab6a00611126c962fc08c)

- [add support for game code to apply to multiple modes](https://github.com/ensemblejs/ensemblejs/commit/96d7f62b75120f959dd05631c714e1656e5023b3)

## [3.0.0](https://github.com/ensemblejs/ensemblejs/commit/45de51c916749e500917b62e6159fe9e9d56f2c0)

- Support for multiple games per server instance. Each request is now a new game.
- Support ability to configure gamedev code to execute for only some game modes e.g. different AI for easy/ normal / hard modes.
- Remove need for modes.js to configure game modes
- Support for optional modes.json to list game modes.

## [2.1.2](https://github.com/ensemblejs/ensemblejs/commit/8110532d1b0761272d33312f76163dcdf94054e0)

- [FIX: missing file](https://github.com/ensemblejs/ensemblejs/commit/828f7f9d04b278a6687e9d6263c9dbdda36cd04a)

## [2.1.1](https://github.com/ensemblejs/ensemblejs/commit/d7fcc116e23e9de68b812321247a72084afa0027)

- [FIX: calculation of frame delta no longer includes time spent paused](https://github.com/ensemblejs/ensemblejs/commit/cd882c4466562f31b2cb239987c1e371fbbbca7a)

## [2.1.0](https://github.com/ensemblejs/ensemblejs/commit/c64b2a586e165cc0d49b3bedb48af6c680b412aa)

- [Input callbacks can get the current time delta](https://github.com/ensemblejs/ensemblejs/commit/0ba44d94caf9925a464cf9509ddcadb8e074a239)

## [2.0.0](https://github.com/ensemblejs/ensemblejs/commit/54f913230d0633552308e82e1ec4af0ec8299ae4)

- [renamed keypress to onRelease](https://github.com/ensemblejs/ensemblejs/commit/841e2fc5552b38e5951cf0a96f6fd2c4b1f4211b)
- [added mouse click tests which are really just keyboard input tests](https://github.com/ensemblejs/ensemblejs/commit/6c40822110d028f9d0b24b57c67277519b43d025)
- [use gulp-sass rather than gulp-ruby-sass](https://github.com/ensemblejs/ensemblejs/commit/5abf9b1a2f04e4c58e4721b0abad1727936da68b)
- [added ruby version for build tooling](https://github.com/ensemblejs/ensemblejs/commit/55f9c215083519ab38a41916713a31e0aedc346d)

## [1.0.0](https://github.com/ensemblejs/ensemblejs/commit/baf9c88df8be5bd68cca95bc059d5f43eddfb5de)

- [the nothing callback can now mutate state like the other callbacks, fixed up tests around this behaviour. Added a breaking change around state expectations so this version won't work with prior versions of the client](https://github.com/ensemblejs/ensemblejs/commit/31c7a6c11bf4de6b935a19c5cef8f209355858bd)

## [0.1.1](https://github.com/ensemblejs/ensemblejs/commit/5ed143f10fc27a7408977466603d9dcd59ff7c96)

- [updated deps](https://github.com/ensemblejs/ensemblejs/commit/fca21a24c23ed58a636cbf8f247a7359eadaa40d)

## [0.1.0](https://github.com/ensemblejs/ensemblejs/commit/45f3eb4da520ca0bfbf1c6036e4e317caabf0de8)

- [extracted function to make if statement more readable](https://github.com/ensemblejs/ensemblejs/commit/3f6ff8dfab09727a0a08d08431cfa4965ab2faeb)
- [reworded function to make it reflect what it does](https://github.com/ensemblejs/ensemblejs/commit/3db187aeeb82ba9dfce16aca3680fae294a8fe2d)

## [0.0.12](https://github.com/ensemblejs/ensemblejs/commit/bd18f5f57a9ac38c92136fbbc504456dc9143f17)

- [updated the state emission frequency to 15ms. This will make client rendering of server values smoother](https://github.com/ensemblejs/ensemblejs/commit/e926794b1d76f872a70e3bd1c1a69e0cfa1b3092)

## [0.0.10](https://github.com/ensemblejs/ensemblejs/commit/505df16706539abbe64026fa3f42e83a51435868)

- [the server update loop now mutates state changes; state mutator doesn't do anthing if it gets no state](https://github.com/ensemblejs/ensemblejs/commit/12115a3a4592b7f05c1b936365f753e65235a7f4)

## [0.0.9](https://github.com/ensemblejs/ensemblejs/commit/b2f3ed18affcb4574fcdc3efa0382081ada54565)

- [ActionMap and AcknowledgementMaps are now arrays](https://github.com/ensemblejs/ensemblejs/commit/af177d5d57c2455a7209a4df7379ded908294a94)

## [0.0.8](https://github.com/ensemblejs/ensemblejs/commit/d2d8d922d7b0187fe2a9b925844b35d448d747ed)

- [fix socket io namespace when there is but one mode](https://github.com/ensemblejs/ensemblejs/commit/42a79a2cb0b219d687791b8cde49f418fbd7379d)

## [0.0.7](https://github.com/ensemblejs/ensemblejs/commit/c2c78e4e2072d71bbd1fec4d3451b0c91bee090d)

- [change single mode test to string and not array](https://github.com/ensemblejs/ensemblejs/commit/fa80a4c14a9930e3f2c6221ceaf60e82937bdc8e)

## [0.0.6](https://github.com/ensemblejs/ensemblejs/commit/e6b365987210fba8c5c2a2c2e741969aa7a3618e)

- [handle situation where only single mode is supplied](https://github.com/ensemblejs/ensemblejs/commit/89c0b38b3b038fd824f97fa8f11490bdaa124877)

## [0.0.5](https://github.com/ensemblejs/ensemblejs/commit/2a16b7a3d6094fe185077b7bd65210f5a546a8e9)

- [removed inch-unfurl dep](https://github.com/ensemblejs/ensemblejs/commit/1cac417767352ace9937d7519cecda5f644089a6)

## [0.0.4](https://github.com/ensemblejs/ensemblejs/commit/68776d3d1631c7cedb76edf8bc7d4b7acc471f03)

- [fix reference to assets](https://github.com/ensemblejs/ensemblejs/commit/a95a789312119c7f7ce4fc3fa7f7460572748d06)

## [0.0.3](https://github.com/ensemblejs/ensemblejs/commit/311d8c4c477eb8b8ff39976cceaa56975195d464)

- [copy source css files over; remove all references to inch](https://github.com/ensemblejs/ensemblejs/commit/815d1dc919a1c18d405476d7a9ab4f2af80f0a10)

## [0.0.2](https://github.com/ensemblejs/ensemblejs/commit/2bc9d6e2fc03960d1ff13e9819cecf7f0055e3ef)

- [removed references to inch in assets; moved framework assets from game into repo](https://github.com/ensemblejs/ensemblejs/commit/e7864da57da30bc8136500b3cc31efe5300bb1a5)
- [rename start-here to ensemble](https://github.com/ensemblejs/ensemblejs/commit/fe3e16bd84f9140448ea18e8afbb38a2c7070e29)
- [renamed packagee](https://github.com/ensemblejs/ensemblejs/commit/c8e4fd90275695da7a5a3f2a6e7abaa135755f47)