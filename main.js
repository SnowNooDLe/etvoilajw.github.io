var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var stages =[[2,2,2],[3,3,3],[4,4,5],[5,5,7],[6,6,8],[7,7,9],[8,8,9]]
var currentStage = 0;
var board = new Board(stages[currentStage][0],stages[currentStage][1],stages[currentStage][2]);

function buttonClicked() {
  document.getElementById('button1').style.visibility = 'hidden';
  if(document.getElementById('button1').innerHTML == 'Restart') {
    restart();
  }
  else {
    nextStage();
  }
};

function restart() {
  currentStage = 0;
  board = new Board(stages[currentStage][0],stages[currentStage][1],stages[currentStage][2]);
  board.start();
};

function nextStage() {
  currentStage += 1;
  board = new Board(stages[currentStage][0],stages[currentStage][1],stages[currentStage][2]);
  board.start();
};

ctx.canvas.addEventListener("click",function(e){board.tileClicked(e.clientX - ctx.canvas.offsetLeft, e.clientY - ctx.canvas.offsetTop);}, false);

board.start();
