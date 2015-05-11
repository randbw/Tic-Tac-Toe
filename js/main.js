$(document).ready(function(){

  // determines whether it is X's or O's go
  var xTurn = true;

  // In charge of placing X or O in div and then switching turn
  var move = function () {
    if (xTurn) {
      $(this).html('X');
      xTurn = false;
    } else {
      $(this).html('O');
      xTurn = true;
    }
  };

  $('.gameBoard').on('click','.square',move);
 
 
});