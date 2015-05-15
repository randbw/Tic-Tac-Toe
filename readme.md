# Project 0

---

### Overview

This was a project given to us to get us used to the format of completing projects.
We were to individually build a Tic Tac Toe game using HTML, CSS, Javascript and 
jQuery. The rest was up to us on how we wished to complete the task. There were
also some other additional tasks if the game was completed too early.

The functionality is fairly straight forward. Just need to click to place moves,
reset the board once the round is complete, a button to switch the computer player
on and also one last button to restart the game completely (i.e. reset all counters
and turns).

The concept was fairly simple but it was my first attempt at making both a functional
and complete web page. The main difficulty for me lay in getting the logic shortened 
from a huge if statement to a for loop. 

### Technical Requirements

Taken directly from project sheet.

Your app must:

- Render a game board in the browser
- Switch turns between X and O (or whichever markers you select)
- Visually display which side won if a player gets three in a row or show a draw/
  "cat’s game" if neither wins
- Include separate HTML / CSS / JavaScript files
- Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
- Use Javascript for DOM manipulation
- Deploy your game online, where the rest of the world can access it
- Use semantic markup for HTML and CSS (adhere to best practices)

### Method of Approach

I began with a basic skeleton of the HTML and CSS which made it easier for me to work
on the logic as I have a hard time visualising things. Next step was planning what
needed to happen on paper. I wrote a list of functions that needed to be made and
attempted to break them down further into smaller functions. This list was being
constantly added to throughout the project as I ran into many more issues than
I had expected to run into. I completed the logic first, then linked that using
jQuery to the HTML and CSS. Once that was running I made the page look better
and then began adding additional features such as buttons and counters.

### Notable Features

- Reset button which must be activated after each round which clears board
- Restart button which clears all data stored by the web page so far
- Score counters and games played counter
- Message board which informs the player of invalid moves and completion of game

### Unsolved Problems

The computer player is not difficult to beat. It is makes its decision randomly
and therefore will only beat you if you strive to lose. If I had more time I would
have attempted to create a more difficult 'AI' player rather than just a computer
choosing randomly. 

I would have also liked to make the computer player's code more DRY. Lastly, 
it would be nice to mobile optimise it. When the game is played on a mobile the
'X wins' or 'O wins' div that goes from left to right on the screen extends the
mobile screen and zooms everything out so it does not look as nice.













