$(document).ready(function(){

  // Move counter to see if game is over
  var moveCounter = 0;

  // determines if square is already occupied
  var isOccupied = function (square) {
    if ($(square).html() === '') {
      return false;
    } else {
      return true;
    }
  };

  // Array which all logic in the universe comes from (decides who wins game)
  var pandorasBox = [[],[],[]];

  // searches divs and places into pandorasBox to figure out winning combinations
  var movePlacer = function () {
    pandorasBox[0][0] = $('div#1').html();
    pandorasBox[0][1] = $('div#2').html();
    pandorasBox[0][2] = $('div#3').html();
    pandorasBox[1][0] = $('div#4').html();
    pandorasBox[1][1] = $('div#5').html();
    pandorasBox[1][2] = $('div#6').html();
    pandorasBox[2][0] = $('div#7').html();
    pandorasBox[2][1] = $('div#8').html();
    pandorasBox[2][2] = $('div#9').html();
  };

  // Decides if game is ended
  var gameOver = false;

  // Recognises if there is a winner at end of move
  var isThereWinner = function () {
    if ((pandorasBox[0][0] === pandorasBox[1][0] && pandorasBox[1][0] === pandorasBox[2][0]) && (pandorasBox[0][0] === 'X' || pandorasBox[0][0] === 'O')) {
        alert(pandorasBox[0][0] + ' is the winner!');
        gameOver = true;
        $('div.messageBoard').append('<p>' + pandorasBox[0][0] + ' is the winner!');
    } else if ((pandorasBox[0][1] === pandorasBox[1][1] && pandorasBox[1][1] === pandorasBox[2][1]) && (pandorasBox[0][1] === 'X' || pandorasBox[0][1] === 'O')) {
        alert(pandorasBox[0][1] + ' is the winner!');
        gameOver = true;
        $('div.messageBoard').append('<p>' + pandorasBox[0][1] + ' is the winner!');
    } else if ((pandorasBox[0][2] === pandorasBox[1][2] && pandorasBox[1][2] === pandorasBox[2][2]) && (pandorasBox[0][2] === 'X' || pandorasBox[0][2] === 'O')) {
        alert(pandorasBox[0][2] + ' is the winner!');
        gameOver = true;
        $('div.messageBoard').append('<p>' + pandorasBox[0][2] + ' is the winner!');
    } else if ((pandorasBox[0][0] === pandorasBox[0][1] && pandorasBox[0][1] === pandorasBox[0][2]) && (pandorasBox[0][0] === 'X' || pandorasBox[0][0] === 'O')) {
        alert(pandorasBox[0][0] + ' is the winner!');
        gameOver = true;
        $('div.messageBoard').append('<p>' + pandorasBox[0][0] + ' is the winner!');
    } else if ((pandorasBox[1][0] === pandorasBox[1][1] && pandorasBox[1][1] === pandorasBox[1][2]) && (pandorasBox[1][0] === 'X' || pandorasBox[1][0] === 'O')) {
        alert(pandorasBox[1][0] + ' is the winner!');
        gameOver = true;
        $('div.messageBoard').append('<p>' + pandorasBox[1][0] + ' is the winner!');
    } else if ((pandorasBox[2][0] === pandorasBox[2][1] && pandorasBox[2][1] === pandorasBox[2][2]) && (pandorasBox[2][0] === 'X' || pandorasBox[2][0] === 'O')) {
        alert(pandorasBox[2][0] + ' is the winner!');
        gameOver = true;
        $('div.messageBoard').append('<p>' + pandorasBox[2][0] + ' is the winner!');
    } else if ((pandorasBox[0][0] === pandorasBox[1][1] && pandorasBox[1][1] === pandorasBox[2][2]) && (pandorasBox[0][0] === 'X' || pandorasBox[0][0] === 'O')) {
        alert(pandorasBox[0][0] + ' is the winner!');
        gameOver = true;
        $('div.messageBoard').append('<p>' + pandorasBox[0][0] + ' is the winner!');
    } else if ((pandorasBox[0][2] === pandorasBox[1][1] && pandorasBox[1][1] === pandorasBox[2][0]) && (pandorasBox[0][2] === 'X' || pandorasBox[0][2] === 'O')) {
      alert(pandorasBox[0][2] + ' is the winner!');
      gameOver = true;
      $('div.messageBoard').append('<p>' + pandorasBox[0][2] + ' is the winner!');
    }
  };

  // determines whether it is X's or O's go
  var xTurn = true;

  // Places letter in div and uses xTurn to switch turn
  var move = function () {
    
    if (gameOver === false) { // checks if game is over before playing
      moveCounter += 1; // adds one to move counter
      if (isOccupied(this) === false) { // checks if cell is occupied
        if (xTurn) {
          $(this).html('X');
          xTurn = false;
        } else {
          $(this).html('O');
          xTurn = true; // switches player turn automatically using true/false
        }
      } else {
        $('div.messageBoard').append('<p>Cannot move here.</p>');
        movePlacer(); // says that you can't move there if occupied cell
        return null;
      }

      movePlacer(); // places all moves into array
      isThereWinner(); // checks array to see if winner


    } else if (gameOver === true) {
      $('div.messageBoard').append('<p>Game is over!</p>'); // says that the game is over
    }

    if (moveCounter === 9) { // checks if the board is full after there
      gameOver === true;     // is no winner to end the game as draw.
      console.log(gameOver);
      alert('Draw!');
      $('div.messageBoard').append('<p>Result is a draw. Game is over!</p>');
    }
    
  };

  // Activates the move function when squares are clicked
  $('.gameBoard').on('click','.square',move);
 
});