// T/F which determines whether or not AI is in the game
var aiPlaying = false;

// Chooses a square randomly for AI to select
var ai = function () {
  var moveSelector = Math.random() * 9;
  if (moveSelector < 1) {
    $('#one').html('<div class="content">X</div>').hide().fadeIn();

  } else if (moveSelector < 2)  {
    $('#two').html('<div class="content">X</div>').hide().fadeIn();

  } else if (moveSelector < 3) {
    $('#three').html('<div class="content">X</div>').hide().fadeIn();

  } else if (moveSelector <4)  {
    $('#four').html('<div class="content">X</div>').hide().fadeIn();

  } else if (moveSelector < 5) {
    $('#five').html('<div class="content">X</div>').hide().fadeIn();

  } else if (moveSelector < 6)  {
    $('#six').html('<div class="content">X</div>').hide().fadeIn();

  } else if (moveSelector < 7) {
    $('#seven').html('<div class="content">X</div>').hide().fadeIn();

  } else if (moveSelector < 8) {
    $('#eight').html('<div class="content">X</div>').hide().fadeIn();

  } else if (moveSelector < 9) {
    $('#nine').html('<div class="content">X</div>').hide().fadeIn();
  }
};