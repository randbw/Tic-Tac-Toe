var isThereWinner = function () {

  var winningCombos = [['one','two','three'],['four','five','six'],['seven','eight'
  ,'nine'],['one','four','seven'],['two','five','eight'],['three','six','nine'],['one','five','nine'],['three','five','seven']];

  for (var i = 0; i < winningCombos.length; i += 1) {

    var cell1 = $('#' + winningCombos[i][0]).html();
    var cell2 = $('#' + winningCombos[i][1]).html();
    var cell3 = $('#' + winningCombos[i][2]).html();

    if ((cell1 === cell2 && cell2 === cell3) && (cell1 === 'X' || cell1 === 'O')) {
      console.log(cell1 + ' is the winner!');
      alert(cell1 + ' is the winner!');
      gameOver = true;
      $('div.messageBoard').append('<p>' + cell1 + ' is the winner!</p>');

      if (cell1 === 'X') {
        xWins += 1;
        $('#xWins').html('<p>X has ' + xWins + ' wins now.</p>');
      } else if (cell1 === 'O') {
        oWins += 1;
        $('#oWins').html('<p>O has ' + oWins + ' wins now.</p>');
      }
    }
  }
};
/********************************************************************************************

            OLD WINNER FUNCTION

********************************************************************************************/

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