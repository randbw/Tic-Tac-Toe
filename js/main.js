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

  // Array used in isThereWinner() to decide who wins game
  var pandorasBox = [['','',''],['','',''],['','','']];

  // places div content into pandorasBox array to figure out winning combinations
  var movePlacer = function () {
    pandorasBox[0][0] = $('div#one').html();
    pandorasBox[0][1] = $('div#two').html();
    pandorasBox[0][2] = $('div#three').html();
    pandorasBox[1][0] = $('div#four').html();
    pandorasBox[1][1] = $('div#five').html();
    pandorasBox[1][2] = $('div#six').html();
    pandorasBox[2][0] = $('div#seven').html();
    pandorasBox[2][1] = $('div#eight').html();
    pandorasBox[2][2] = $('div#nine').html();
  };

  // Decides if game is ended
  var gameOver = false;

  // stores game winner
  var winrar = '';

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

  // changes depending who went last to see if it is X's or O's go
  var xTurn = true;

  // Shows whose go it is above gameboard
  var showGo = function () {
    if (xTurn) {
      $('#turn').html('X\'s go');
    } else {
      $('#turn').html('O\'s go');
    }
  };

  // Games played counter
  var gamesPlayed = 0;

  // T/F to see if gamesPlayed has already been updated
  var gamesPlayedUpdateAllowed = true;

  // Adds gamesPlayed to the UI
  var gamesCounter = function () {
    $('#gamesPlayed').html(gamesPlayed + ' games played.');
  };

  // Places letter on gameBoard and uses xTurn to switch turn
  var move = function () {
    
    if (gameOver === false) { // checks if game is complete yet
      
      if (isOccupied(this) === false) { // checks if cell is occupied
        if (xTurn) {
          $(this).html('X');
          xTurn = false; // next round it will be O's go
          moveCounter += 1; // adds one to move counter
          showGo(); // changes whose go it is above gameBoard
        } else {
          $(this).html('O');
          xTurn = true; // switches player turn automatically using true/false
          moveCounter += 1;
          showGo();
        }
      } else {
        $('div.messageBoard').append('<p>Cannot move here.</p>'); 
        movePlacer();
      }

      movePlacer(); // places all moves into array
      isThereWinner(); // checks array to see if winner


      if (moveCounter === 9 && gameOver === false) { // checks if the board is full after there
      gameOver = true;                               // is no winner to end the game as draw.
      alert('Draw!');
      $('div.messageBoard').append('<p>Result is a draw. Game is over!</p>');
      }

    } else if (gameOver === true) {
      $('div.messageBoard').append('<p>Game is over!</p>'); // says that the game is over
    }
    
    if (gameOver === true && gamesPlayedUpdateAllowed === true) {
      gamesPlayed += 1;
      gamesPlayedUpdateAllowed = false;
      gamesCounter();
      $('#resetBoard').addClass('resetTime');
    }

  };

  // Reset board function
  var resetBoardFn = function () {
    // if (moveCounter > 1) ... make it confirm to do it
    $('div#one').html('');
    $('div#two').html('');
    $('div#three').html('');
    $('div#four').html('');
    $('div#five').html('');
    $('div#six').html('');
    $('div#seven').html('');
    $('div#eight').html('');
    $('div#nine').html('');
    moveCounter = 0;
    gameOver = false;
    $('.messageBoard').html('<h2>Message Board</h2>');
    $('#resetBoard').removeClass('resetTime').addClass('infoBox');
    gamesPlayedUpdateAllowed = true;
  };

  // Activates the move function when squares are clicked
  $('.gameBoard').on('click','.square',move);
  $('#resetBoard').on('click',resetBoardFn);
 
});