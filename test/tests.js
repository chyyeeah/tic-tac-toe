const assert = require('assert');

describe('Tic Tac Toe', () => {
  it('should change turns when a player makes a move', () => {
    document.getElementsById('row-1-col-3').click();
    const currentTurn = document.getElementById('current-player').innerHTML;
    assert.equal(currentTurn, '2');
  });
});