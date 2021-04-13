/**GAMEPLAY */
let turn = true;

/**CHECK FOR WIN */
// rows
const winRow = () => {
  let win = false;
  for (let row = 0; row < 3; row++) {
    if (win) break;
    let counter = 0;
    for (let col = 0; col < 3; col++) {
      if (document.getElementById(`row-${row}-col-${col}`))
    }
  }
  return win;
};
// cols
// major diag
// minor diag

const changeTurns = () => {
  turn = !turn;
  if (turn) {
    document.getElementById('current-player').innerHTML = '1';
  } else {
    document.getElementById('current-player').innerHTML = '2';
  }
};

const takeTurn = function(e) {
  console.log(e.target.id);
  placeMove(this);
  changeTurns();
};

const placeMove = function(space) {
  if (turn) {
    space.innerHTML = 'X';
  } else {
    space.innerHTML = 'O';
  }
  space.removeEventListener('click', takeTurn);
};

const spaces = document.getElementsByTagName('TD');

const addListeners = () => {
  for (let i = 0; i < spaces.length; i++) {
    spaces[i].addEventListener('click', takeTurn);
  }
};

addListeners();
document.getElementById('current-player').innerHTML = '1';