var currentRed;
var previousColor;

var board = document.getElementById("board");
board.style.height = '400px';
board.style.width = '400px';
board.style.border='10px solid gray';

document.body.appendChild(board);

for(var i=0; i<4; i++){
  for(var j=0; j<4; j++){
    if((i+j)%2 == 1){
      newTile('black');
    }
    else {
      newTile('white');
    }
  }
}

function newTile(color){
  var v = document.createElement('div');
  v.style.height = '100px';
  v.style.width = '100px';
  v.style.float = 'left';
  v.style.backgroundColor = color;
  v.addEventListener('click', function(){
    if (currentRed != null) {
      currentRed.style.backgroundColor = previousColor;
    }
    v.style.backgroundColor = 'red';
    currentRed = v;
    previousColor = color;
  } );

  board.appendChild(v);
}
