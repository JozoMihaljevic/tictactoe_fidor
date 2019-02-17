# Programming Challenge

## Objective

Implement a [TicTacToe](https://en.wikipedia.org/wiki/Tic-tac-toe) game according to the wikipedia page.

Key Features:
* The game is a 3x3 board
* The game is played in the same browser window
* Before starting a game, the player names are provided (optional)
* One player starts with the first move
* After selecting a field on the board, the game automatically switches to the other player
* When the game is over, show the result of which player has won or if it was a draw
* Target browser is Chrome

You have the following application architecture:
* `webpack.config.babel.js` is already provided. Extend it as you see fit.
* `src/index.js` is the application entrypoint.
* `src/index.html` is the application markup. This one already comes with some basic css included inline.
* `src/store` to implement your game logic and player handling (some more info provided in there).
* `src/components` to implement your view logic.

Nice to haves:
* +1 if you add tests to the project
* +1 if you provide clean commit messages
* +1 if you upgrade all dependencies to the latest version

## Installation / Getting started

Initialize this project as a git repository. Make the first commit without applying any changes to the code. Then, start your solution.

```sh
$ clone the repository
$ git clone git@github.com:fidor/programming-challenge.rb.git

# make a fresh git repo
$ rm -rf .git
$ git init .
$ git add .
$ git commit -m "Your initial commit message of choice"
```

Ensure you have the following software (globally) installed on your system:

* `[node.js](http://nodejs.org/)` ^10.0.0

```sh
# install dependencies
$ npm install

# start the dev server @ http://localhost:8080
$ npm start
```

## Building / transpiling the project

```sh
$ npm run build
```

## Project submission

Feel free to place this test on your Github, Gitlab, Bitbucket, etc account as a public repository. Send the link back to us. We are looking forward to hearing from you. Good luck! :)
