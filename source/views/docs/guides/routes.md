---
layout: documentation
---
# Game URLs / Routes
The INCH framework sets up urls that the player will use to access your game. The first route is the index or '/'. More routes exists based on the complexity of your game. Game modes (arcade, endless, etc.) generate routes, as do different levels.

I'll use the two demo games as an example. Challenge:Response comes with three modes: easy, hard, sound-only and visual-only. The solitare game has one mode.

# Single Mode Game
The most simple scenario is where you have a single mode for your game. You don't want to have levels or gameplay variations e.g. easy, hard, arcade, etc.

This means the index page will be your game. Your url will be something like: https://solitare.ensemblejs.com/

To achieve this you do nothing.

Done.


# Different Modes
You may have different modes for your game. This could be a game like Challenge:Response where there are four modes. Or you may have an endless mode where the ability to endure becomes more important.

Your `modes.json` file contains an array of entries.

~~~json
["easy", "hard", "visual-only", "audio-only"]
~~~

You'll end up with five urls:

- `https://challenge-response.ensemblejs.com/` – This is the index page that will be a static path. You can style this as HTML and this is where you'll provide links to the game modes
- `https://challenge-response.ensemblejs/easy` – This will load the easy version of the game.
- `https://challenge-response.ensemblejs/hard` – This will load the hard version of the game
- `https://challenge-response.ensemblejs/visual-only` – This will load the visual only version of the game
- `https://challenge-response.ensemblejs/audio-only` – This will load the audio only version of the game

**Note**: *As the game modes are part of the url you need to adhere to the existing rules around url creation. You'll have no troubles if you stick to alphanumeric characters, dashes and underscores.*