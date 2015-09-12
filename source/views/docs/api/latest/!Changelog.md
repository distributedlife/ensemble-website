---
layout: documentation
---
# Changelog

# September 2015

## [5.0.0](https://github.com/ensemblejs/ensemblejs/tree/v5.0.0)

- Merged the ensemblejs-client package into this project.

### Steps for upgrading

#### Remove old packages and install the latest version

~~~shell
npm rm ensemblejs-client
npm i ensemblejs@5.0.0 -S
~~~

#### Code changes:

- Rename: `ServerSideUpdate` to `OnPhysicsFrame`
- Rename: `View` to `OnClientReady`
- Rename: `OnEachFrame` to `OnRenderFrame`
- Remove direct references to `zepto-browserify`
- Delete the: `game/js/game.js`
- Delete the modes folder: `game/js/modes`
- `NewState` plugin is no longer used.
- `Element` has been replaced with the `Config` plugin
- `InputElement` has been replaced with the `Config` plugin
- `AspectRatio` has been replaced with the `Config` plugin
- `WidescreenMinimumMargin` has been replaced with the `Config` plugin

Before:

~~~javascript
element()
inputElement()
aspectRatio()
widescreenMinimumMargin()
~~~

After:

~~~javascript
config().client.element
config().client.inputElement
config().client.aspectRatio
config().client.widescreenMinimumMargin
~~~

#### Rewrite `/game.js`.

Before:

~~~javascript
require('ensemblejs').runGameAtPath(__dirname + '/game');
~~~

After:

~~~javascript
require('ensemblejs').server.runGameAtPath(__dirname + '/game');
~~~

#### Remove all references to `zepto-browserify`

~~~javascript
var $ = require('zepto-browserify').$;
~~~

and replace them with the new `$` module. Just remember to replace `$` with `$()` as it's now a plugin.

So:

~~~javascript
var canvas = $('<canvas/>', { id: 'scene' });
~~~

becomes:

~~~javascript
var canvas = $()('<canvas/>', { id: 'scene' });
~~~

#### New gulpfile

You can download one from [here](https://raw.githubusercontent.com/ensemblejs/ensemblejs-pixijs-demo/master/gulpfile.js).

~~~script
rm gulpfile.js
wget https://raw.githubusercontent.com/ensemblejs/ensemblejs-pixijs-demo/master/gulpfile.js
~~~

#### Update package.json

We need to add a new transform to the project. The library comes packaged with ensemblejs but is configured at the game level.

Add `require-globify` as the third transform like so:

~~~javascript
"browserify": {
  "transform": [
    "browserify-shim",
    [
      "jadeify",
      {
        "compileDebug": false,
        "pretty": false
      }
    ],
    "require-globify"
  ]
},
~~~

#### API Changes

~~~javascript
acknowledgements().ackLast('show-challenge');
~~~

is now:

~~~javascript
acknowledgements().ack('show-challenge');
~~~


# July, 2015

## ensemblejs package

### [4.3.0](https://github.com/ensemblejs/ensemblejs/commit/6dc4202ae5f0de9f28b75b7537d61f2b104386b0)

- [ActionMaps now support key modifiers](https://github.com/ensemblejs/ensemblejs/commit/4f398b0c101f44de07818eea388e189eee71d210)
- [Validators run at application launch and let you know something isn't right](https://github.com/ensemblejs/ensemblejs/commit/28efb570ef0e1da4fa78323b23b54f1e540822fa)
- [First validator checks action maps for unsupported key combinations cltr+tab and shift+ctrl+tab](https://github.com/ensemblejs/ensemblejs/commit/28efb570ef0e1da4fa78323b23b54f1e540822fa)
- [IntervalServerSideUpdate rate limits ServerSideUpdate functions to the frequency you want](https://github.com/ensemblejs/ensemblejs/commit/28efb570ef0e1da4fa78323b23b54f1e540822fa)

### [4.2.1](https://github.com/ensemblejs/ensemblejs/commit/2c6b7ff0ec1b9724bdf5f4675c683a6d190388bc)

- [Debug mode to capture anchor action map]()

### [4.2.0](https://github.com/ensemblejs/ensemblejs/commit/6cf2da83c4b05d7f1c902fd36e72548856d6698e)

- [ignore case when registering keys](https://github.com/ensemblejs/ensemblejs/commit/776f443bed7a253a99364d460a1eaa0304f4283e)
- [config support](https://github.com/ensemblejs/ensemblejs/commit/776f443bed7a253a99364d460a1eaa0304f4283e)

## ensemblejs-client package

### [2.2.0](https://github.com/ensemblejs/ensemblejs-client/commit/9fba0e2e1d62e27c05a5d49f1132226eece0a75e)

- [key modifiers now sent to server](https://github.com/ensemblejs/ensemblejs-client/commit/62ae4f28b4d1576b2ec8dc1456afdde3932c1275)

### [2.1.0](https://github.com/ensemblejs/ensemblejs-client/commit/9e7ab9d655900994d0096e8b4449c06418de29ae)

- [Add support for anchor actions](https://github.com/ensemblejs/ensemblejs-client/commit/7803d415265e4753d2b52896b9f5e42262eec20c)
- [Fixed issue where merging input sources resulted in data loss](https://github.com/ensemblejs/ensemblejs-client/commit/7803d415265e4753d2b52896b9f5e42262eec20c)

### [2.0.0](https://github.com/ensemblejs/ensemblejs-client/commit/830e545b339705120c2400bfcbd9ac03b28ed984)

- [browserify transform to support nested transforms](https://github.com/ensemblejs/ensemblejs-client/commit/ea328ff55e0e108242bf36628c32d0a6600c0015)
- [Client now receives config from the server at startup](https://github.com/ensemblejs/ensemblejs-client/commit/02afe9c65dd7b7a80473c48ff7982349694c2423)
- [Debug mode shows input state](https://github.com/ensemblejs/ensemblejs-client/commit/02afe9c65dd7b7a80473c48ff7982349694c2423)
- [CurrentState is now it's own plugin](https://github.com/ensemblejs/ensemblejs-client/commit/7c18c2bbbcff449aed36eef08980906aa11287d3)
- [StateTracker now pushes id on all array change callbacks](https://github.com/ensemblejs/ensemblejs-client/commit/02afe9c65dd7b7a80473c48ff7982349694c2423)
- [renamed PendingAcknowledgements to PacketAcknowledgements](https://github.com/ensemblejs/ensemblejs-client/commit/2910c4e476612b6033a9c122e87ad47202412c17)

#### Internal Changes
- [Renamed InputMode to InputCapture](https://github.com/ensemblejs/ensemblejs-client/commit/6af94b736b8a6821f2381f93d93512f6fda9d6ff)
- [Split InputCapture into one module for touch, mouse and keyboard](https://github.com/ensemblejs/ensemblejs-client/commit/b88e7b48e1f3b3e16da17b592ba19f4225a40e95)
- [resize needs to be called once at the start](https://github.com/ensemblejs/ensemblejs-client/commit/02e9d7ee3a3ae84bc19dca47feead1cf872528c5)
- [resize binding setup is now an OnInitialise event](https://github.com/ensemblejs/ensemblejs-client/commit/284f69dc00423aa9a01370bba8aee1962c61d290)

#### Steps for upgrading

##### Mouse click Action Map
The mouse names of `button1`, `button2` and `button3` are no longer supported. Use `primary`, `secondary` and `tertiary`.

##### Getting the current state on the client
You can no longer as the StateTracker for the current state. It's now the responsibility of the CurrentState plugin.

So this:

~~~javascript
module.exports = {
  deps: ['StateTracker'],
  func: function (tracker) {
    var myState = function(state) { state.myState; };

    return function() {
      tracker().get(myState);
    }
  }
}
~~~

is now this:

~~~javascript
module.exports = {
  deps: ['CurrentState'],
  func: function (currentState) {
    var myState = function(state) { state.myState; };

    return function() {
      currentState().get(myState);
    }
  }
}
~~~

#### Tracking array changes
The `onElementAdded`, `onElementRemoved` and `onElementChanged` methods have changed what they pass to your callback.

In all three cases they pass the element `id` as the first parameter. This to formalises the concept of the id and to make it more explicit that array elements need ids.

The callbacks now have this signiture:

~~~javascript
function elementAdded (id, currentState, data);
function elementRemoved (id, stateAtRemoval, data);
function elementChanged (id, currentState, priorState, data);
~~~


# June, 2015

## ensemblejs package

### [4.1.0](https://github.com/ensemblejs/ensemblejs/commit/fe84ebbf7c451ba6decad7d5388f48bd7741813c)

- [support for configuration file to set log level or silence logging of plugins](https://github.com/ensemblejs/ensemblejs/commit/dfcd88ad804ee70c06a320ecc76c976b94b187d7)

### [4.0.0](https://github.com/ensemblejs/ensemblejs/commit/03b0309047faaf638b7ac6c3f3c22221e4adb2b3)

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

### [3.2.1](https://github.com/ensemblejs/ensemblejs/commit/b66eb70a89f62b4df16130038683b9e6fe56daf5)

- [serve compressed content if requested](https://github.com/ensemblejs/ensemblejs/commit/f5acd7f9ce336840251eb3b6c0870a69d57097e0)
- [use package.json for version number](https://github.com/ensemblejs/ensemblejs/commit/3f450b74ebb296d2a8846b18447ffab8fa07ef95)

### [3.1.4](https://github.com/ensemblejs/ensemblejs/commit/e2ce86759c938f560069fe5f85ebe378e0ec16a4)

- [Jade files update to reference minified files](https://github.com/ensemblejs/ensemblejs/commit/fa13b6dabea14d8a291aa9fefc0ac35438090d2c)

### [3.1.0](https://github.com/ensemblejs/ensemblejs/commit/04a43117546e5b33964ab6a00611126c962fc08c)

- [add support for game code to apply to multiple modes](https://github.com/ensemblejs/ensemblejs/commit/96d7f62b75120f959dd05631c714e1656e5023b3)

### [3.0.0](https://github.com/ensemblejs/ensemblejs/commit/45de51c916749e500917b62e6159fe9e9d56f2c0)

- Support for multiple games per server instance. Each request is now a new game.
- Support ability to configure gamedev code to execute for only some game modes e.g. different AI for easy/ normal / hard modes.
- Remove need for modes.js to configure game modes
- Support for optional modes.json to list game modes.

### [2.1.2](https://github.com/ensemblejs/ensemblejs/commit/8110532d1b0761272d33312f76163dcdf94054e0)

- [FIX: missing file](https://github.com/ensemblejs/ensemblejs/commit/828f7f9d04b278a6687e9d6263c9dbdda36cd04a)

### [2.1.1](https://github.com/ensemblejs/ensemblejs/commit/d7fcc116e23e9de68b812321247a72084afa0027)

- [FIX: calculation of frame delta no longer includes time spent paused](https://github.com/ensemblejs/ensemblejs/commit/cd882c4466562f31b2cb239987c1e371fbbbca7a)

## ensemblejs-client package

### [1.4.2](https://github.com/ensemblejs/ensemblejs-client/commit/af14e2c23551947976a8f7337a066ed74cf0ca41)

- [update to plug-n-play@3.1.1](https://github.com/ensemblejs/ensemblejs-client/commit/70ae320934cd75097c8e196dc6fe36d0156bc625)

### [1.4.1](https://github.com/ensemblejs/ensemblejs-client/commit/3cf64cffee5cdbb5b0faf74bdeec3d044c36747c)

- [Updated dependencies to pickup new Logger plugin](https://github.com/ensemblejs/ensemblejs-client/commit/80a2727d17e0b0305a73831a6aec189dfe7ed31a)

### [1.4.0](https://github.com/ensemblejs/ensemblejs-client/commit/24a6f0af49c1ddf73259a7dd34b15b5a83ac776a)

- [Don't send packets when there has been no changes](https://github.com/ensemblejs/ensemblejs-client/commit/ac186517cf2b00b995e159cba418d6f63f603b12)

### [1.3.0](https://github.com/ensemblejs/ensemblejs-client/commit/1ed3595919006c1ead194f3fb536eba6852d9630)

- [Use plug-n-play@3 which comes with logging support for plugins](https://github.com/ensemblejs/ensemblejs-client/commit/fd81f10b1b5b1be195c7373c9106639b01177111)

### [1.2.3](https://github.com/ensemblejs/ensemblejs-client/commit/8c4a19a19e58c89c6a590b273ee365ab2c245c6d)

- [Use window location origin for host and port for socket.io](https://github.com/ensemblejs/ensemblejs-client/commit/983679de106699b91212c95452823b3946d3ad23)

### [1.2.1](https://github.com/ensemblejs/ensemblejs-client/commit/47b19218fa56846484ec3c836f90955c37ae3e9f)

- [uses envvar to set serverurl or defaults to localhost](https://github.com/ensemblejs/ensemblejs-client/commit/dfd81a995015d31edb444861aa677a87cd323348)
- [use package.json for version](https://github.com/ensemblejs/ensemblejs-client/commit/74e4549347771834f160e01c62b64449308bac71)

### [1.1.1](https://github.com/ensemblejs/ensemblejs-client/commit/974b9f08dbd870f06b33ca80b86cf93f968ac6b8)

- [FIX: Client no longer sends input when paused](https://github.com/ensemblejs/ensemblejs-client/commit/dffe8c0d06a7e9fc83a6827820c531f6620c37bb)

# May, 2015

## ensemblejs package

### [2.1.0](https://github.com/ensemblejs/ensemblejs/commit/c64b2a586e165cc0d49b3bedb48af6c680b412aa)

- [Input callbacks can get the current time delta](https://github.com/ensemblejs/ensemblejs/commit/0ba44d94caf9925a464cf9509ddcadb8e074a239)

### [2.0.0](https://github.com/ensemblejs/ensemblejs/commit/54f913230d0633552308e82e1ec4af0ec8299ae4)

- [renamed keypress to onRelease](https://github.com/ensemblejs/ensemblejs/commit/841e2fc5552b38e5951cf0a96f6fd2c4b1f4211b)
- [added mouse click tests which are really just keyboard input tests](https://github.com/ensemblejs/ensemblejs/commit/6c40822110d028f9d0b24b57c67277519b43d025)
- [use gulp-sass rather than gulp-ruby-sass](https://github.com/ensemblejs/ensemblejs/commit/5abf9b1a2f04e4c58e4721b0abad1727936da68b)
- [added ruby version for build tooling](https://github.com/ensemblejs/ensemblejs/commit/55f9c215083519ab38a41916713a31e0aedc346d)

### [1.0.0](https://github.com/ensemblejs/ensemblejs/commit/baf9c88df8be5bd68cca95bc059d5f43eddfb5de)

- [the nothing callback can now mutate state like the other callbacks, fixed up tests around this behaviour. Added a breaking change around state expectations so this version won't work with prior versions of the client](https://github.com/ensemblejs/ensemblejs/commit/31c7a6c11bf4de6b935a19c5cef8f209355858bd)

### [0.1.1](https://github.com/ensemblejs/ensemblejs/commit/5ed143f10fc27a7408977466603d9dcd59ff7c96)

- [updated deps](https://github.com/ensemblejs/ensemblejs/commit/fca21a24c23ed58a636cbf8f247a7359eadaa40d)

## ensemblejs-client package

### [1.1.0](https://github.com/ensemblejs/ensemblejs-client/commit/a1915948553305c725904ddbfc3d3580521ffdd1)

- [mouse click support](https://github.com/ensemblejs/ensemblejs-client/commit/610e03f5829c6390512700d06f2b73c7d6216ca0)
- [Fix up input layer resizing.](https://github.com/ensemblejs/ensemblejs-client/commit/56e2a08eb93c8ed2530cc1a6bd3cfee176859986)

### [1.0.2](https://github.com/ensemblejs/ensemblejs-client/commit/3b00a6b85a1b6e5444d58a5c72219a74382f1bbd)

- [set on initialise to be an plugin array](https://github.com/ensemblejs/ensemblejs-client/commit/812b0384577fe1d9a8d57f47d2a74b5979ab4736)

### [1.0.1](https://github.com/ensemblejs/ensemblejs-client/commit/ac4bf0bda51b211fb31179faf360f734f9585042)

- [moved initialise callback invocation out of socket connect and into client assembly](https://github.com/ensemblejs/ensemblejs-client/commit/e9c0e5c870098f7547a3f12c62b47dd1c2b6a3bf)
- [refactored the socket client code](https://github.com/ensemblejs/ensemblejs-client/commit/26000a3ea2fb4e52850327360f8f2893014fef8a)
- [fix up client socket tests](https://github.com/ensemblejs/ensemblejs-client/commit/ee7003c9109477a25c6d05e83c0ac3617e8bf56b)

### [1.0.0](https://github.com/ensemblejs/ensemblejs-client/commit/c31df1e75f18972bab21314013281b32b6db769b)

- [Bump to 1.0.0 so that NPM does auto-updating](https://github.com/ensemblejs/ensemblejs-client/commit/c5a416c1b384e92cf1728783ed10553eb1119005)
- [expanded display into events](https://github.com/ensemblejs/ensemblejs-client/commit/6dd2024c060fc41da2c980b77a6fb99e88fdd720)
- [rewrote the view-setup, on-resize and on-each-frames to be event driven callbacks](https://github.com/ensemblejs/ensemblejs-client/commit/657561c30452a5c30e32019deef033eac06d4c7f)
- [mouse x and y values are now i n a mouse scope when pushed over the wire](https://github.com/ensemblejs/ensemblejs-client/commit/5dd66aca9884ef4623b5ae55aa094370f3316672)

### [0.1.0](https://github.com/ensemblejs/ensemblejs-client/commit/133987651f03197a85691078e5c6da6e0a765131)

- [save player id; renamed setup and update event names](https://github.com/ensemblejs/ensemblejs-client/commit/d1ff2cd3dd25dc25987b31a889df80e1e4fac0b8)

# April, 2015

## ensemblejs package

### [0.1.0](https://github.com/ensemblejs/ensemblejs/commit/45f3eb4da520ca0bfbf1c6036e4e317caabf0de8)

- [extracted function to make if statement more readable](https://github.com/ensemblejs/ensemblejs/commit/3f6ff8dfab09727a0a08d08431cfa4965ab2faeb)
- [reworded function to make it reflect what it does](https://github.com/ensemblejs/ensemblejs/commit/3db187aeeb82ba9dfce16aca3680fae294a8fe2d)

### [0.0.12](https://github.com/ensemblejs/ensemblejs/commit/bd18f5f57a9ac38c92136fbbc504456dc9143f17)

- [updated the state emission frequency to 15ms. This will make client rendering of server values smoother](https://github.com/ensemblejs/ensemblejs/commit/e926794b1d76f872a70e3bd1c1a69e0cfa1b3092)

### [0.0.10](https://github.com/ensemblejs/ensemblejs/commit/505df16706539abbe64026fa3f42e83a51435868)

- [the server update loop now mutates state changes; state mutator doesn't do anthing if it gets no state](https://github.com/ensemblejs/ensemblejs/commit/12115a3a4592b7f05c1b936365f753e65235a7f4)

### [0.0.9](https://github.com/ensemblejs/ensemblejs/commit/b2f3ed18affcb4574fcdc3efa0382081ada54565)

- [ActionMap and AcknowledgementMaps are now arrays](https://github.com/ensemblejs/ensemblejs/commit/af177d5d57c2455a7209a4df7379ded908294a94)

### [0.0.8](https://github.com/ensemblejs/ensemblejs/commit/d2d8d922d7b0187fe2a9b925844b35d448d747ed)

- [fix socket io namespace when there is but one mode](https://github.com/ensemblejs/ensemblejs/commit/42a79a2cb0b219d687791b8cde49f418fbd7379d)

### [0.0.7](https://github.com/ensemblejs/ensemblejs/commit/c2c78e4e2072d71bbd1fec4d3451b0c91bee090d)

- [change single mode test to string and not array](https://github.com/ensemblejs/ensemblejs/commit/fa80a4c14a9930e3f2c6221ceaf60e82937bdc8e)

### [0.0.6](https://github.com/ensemblejs/ensemblejs/commit/e6b365987210fba8c5c2a2c2e741969aa7a3618e)

- [handle situation where only single mode is supplied](https://github.com/ensemblejs/ensemblejs/commit/89c0b38b3b038fd824f97fa8f11490bdaa124877)

### [0.0.5](https://github.com/ensemblejs/ensemblejs/commit/2a16b7a3d6094fe185077b7bd65210f5a546a8e9)

- [removed inch-unfurl dep](https://github.com/ensemblejs/ensemblejs/commit/1cac417767352ace9937d7519cecda5f644089a6)

### [0.0.4](https://github.com/ensemblejs/ensemblejs/commit/68776d3d1631c7cedb76edf8bc7d4b7acc471f03)

- [fix reference to assets](https://github.com/ensemblejs/ensemblejs/commit/a95a789312119c7f7ce4fc3fa7f7460572748d06)

### [0.0.3](https://github.com/ensemblejs/ensemblejs/commit/311d8c4c477eb8b8ff39976cceaa56975195d464)

- [copy source css files over; remove all references to inch](https://github.com/ensemblejs/ensemblejs/commit/815d1dc919a1c18d405476d7a9ab4f2af80f0a10)

### [0.0.2](https://github.com/ensemblejs/ensemblejs/commit/2bc9d6e2fc03960d1ff13e9819cecf7f0055e3ef)

- [removed references to inch in assets; moved framework assets from game into repo](https://github.com/ensemblejs/ensemblejs/commit/e7864da57da30bc8136500b3cc31efe5300bb1a5)
- [rename start-here to ensemble](https://github.com/ensemblejs/ensemblejs/commit/fe3e16bd84f9140448ea18e8afbb38a2c7070e29)
- [renamed packagee](https://github.com/ensemblejs/ensemblejs/commit/c8e4fd90275695da7a5a3f2a6e7abaa135755f47)

## ensemblejs-client package

### [0.0.9](https://github.com/ensemblejs/ensemblejs-client/commit/495492650fb4b6f9bb869e25962b4422d122c810)

- [default the game mode to 'game', expose set on the facade](https://github.com/ensemblejs/ensemblejs-client/commit/ed95d6c88b78351dee355064734cc22dd78d5817)

### [0.0.8](https://github.com/ensemblejs/ensemblejs-client/commit/315ec546715e9f290a5488fbbd38aab0c627e7a2)

- [included missing dep](https://github.com/ensemblejs/ensemblejs-client/commit/d07fa150aa1db69885235b957af20fee8c015065)

### [0.0.7](https://github.com/ensemblejs/ensemblejs-client/commit/4aed701d2a166adcd89dae4b105d3be3a679d722)

- [removed unused param for client assembly that was missed because we don't test the interface](https://github.com/ensemblejs/ensemblejs-client/commit/f8f149109025ac1a77d1549a44c4ba9311090bb0)
- [Removed commented code from update loop](https://github.com/ensemblejs/ensemblejs-client/commit/c08dad5a09a79a3f728f9e691797286b7cb122ed)

### [0.0.6](https://github.com/ensemblejs/ensemblejs-client/commit/b38a85dd4ce3dc45690e073c1622a6f5368ffb8c)

- [added more view code as actual view code; removed icon layout](https://github.com/ensemblejs/ensemblejs-client/commit/68dc18d082bb2bee7f39e8bcb5cf00269895b6cd)

### [0.0.5](https://github.com/ensemblejs/ensemblejs-client/commit/357eee791ba1b4185f335728edee0ee5dcd11601)

- [fixed incorrected use of pending ack api](https://github.com/ensemblejs/ensemblejs-client/commit/79c73d9fc3399fc04db1a3c997915f1120b8ba21)

### [0.0.4](https://github.com/ensemblejs/ensemblejs-client/commit/d71bb294b4451b7b2690796dad07640854876e06)

- [pending acks is now a plugin](https://github.com/ensemblejs/ensemblejs-client/commit/66998bf1f0e909887274c876ba478f16e928e119)

### [0.0.3](https://github.com/ensemblejs/ensemblejs-client/commit/744dd315211feaf9adc088738825361d6d8bb670)

- [renamed view-logic/ViewLogic to views; fixed tests](https://github.com/ensemblejs/ensemblejs-client/commit/523b02a93092e401da6891291374890f26b30151)

### [0.0.2](https://github.com/ensemblejs/ensemblejs-client/commit/ef86b1221289fbeb19819c11b0ddf3d2d21dd085)

- [add missing socket-io dep](https://github.com/ensemblejs/ensemblejs-client/commit/0977c6e9e4578b9f78d3a3cd1ea67817e36af4d1)
- [extracted from prior work](https://github.com/ensemblejs/ensemblejs-client/commit/814dfc6552f673942b58bf465b18d6eb43667f3e)
