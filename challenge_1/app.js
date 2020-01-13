
window.onload = function() {
  // VARIABLES
  const EMPTY_SPACE = '__';

  let turn = 0;
  let player;


  //VIEW
    // selectors
  const tile00 = document.querySelector('.tile00');
  const tile01 = document.querySelector('.tile01');
  const tile02 = document.querySelector('.tile02');
  const tile10 = document.querySelector('.tile10');
  const tile11 = document.querySelector('.tile11');
  const tile12 = document.querySelector('.tile12');
  const tile20 = document.querySelector('.tile20');
  const tile21 = document.querySelector('.tile21');
  const tile22 = document.querySelector('.tile22');
  const restartBtn = document.querySelector('.restartBtn');
  const alertBox = document.querySelector('.alert');
  const playerMessage = document.querySelector('.playerMessage')
  const winningMessage = `${player} wins!`
  let winState = false;

  const boardArray = [tile00, tile01, tile02, tile10, tile11, tile12, tile20, tile21, tile22];
  const boardMatrix = [[tile00, tile01, tile02],
                       [tile10, tile11, tile12],
                       [tile20, tile21, tile22],]

  restartBtn.addEventListener('click', restart)

  // GAME LOGIC

  function checkEndGame(){
    if (checkHorizontal(boardMatrix)){
      console.log('HORIZONTAL', player)
      playerMessage.innerText = player + ' WINS!';
      winState = true;
    }
    else if (checkVertical(boardMatrix)){
      console.log('VERTICAL', player)
      playerMessage.innerText = player + ' WINS!';
      winState = true;
    }
    else if (checkDiagonal(boardMatrix) || checkDiagonal(tranpose(boardMatrix))){
      console.log('Diagnonal', player);
      playerMessage.innerText = player + ' WINS!';
      winState = true;
    }
    if (winState){
      unmountClickHandlers();
      setTimeout(restart, 2000)
    }
    if (turn === 9) {
      unmountClickHandlers();
      alertFlag('stalemate! restarting game...')
      setTimeout(restart, 2000);
    }
  }

  // restart game
  function restart(){
    boardMatrix.forEach(row =>{
      row.forEach(tile => tile.addEventListener('click', registerClick))
    })
    turn = -1;
    changePlayer();
    boardMatrix.forEach((row) => {
      row.forEach(tile => {
        tile.innerText = EMPTY_SPACE;
        })
      })
    }

  // BOARD LOGIC
    function registerClick(e) {
      e.preventDefault();
      if (e.target.innerText === EMPTY_SPACE){
        e.target.innerText = player;
        checkEndGame();
        if (!winState){
          changePlayer();
        }
        winState = false;
      } else {
        alertFlag('Try an empty square');
      }
    }

  // WIN CONDITIONS:
    function checkHorizontal(matrix){
      let winningState = matrix.some(row => {
        return row.every((tile) => {
          return tile.innerText === player
        })
      })
      return winningState;
    }

    function checkVertical(matrix){
      let transposedMatrix = transpose(matrix);
      return checkHorizontal(transposedMatrix);
    }

    function checkDiagonal(matrix){
      var run = []
      for (let i = 0; i < matrix.length; i++ ){
        console.log('diagonal', matrix[i,i].innerText)
        run.push(matrix[i, i].innerText === player)
      }
      console.log(run)
    }

    function transpose(matrix) {
      return Object.keys(matrix[0]).map((row) => {
        return matrix.map((col) => {
          return col[row]
        })
      })
    }


    function alertFlag(message) {
      alertBox.innerText = message.toUpperCase();
      alertBox.style.visibility = 'visible'
      setTimeout(()=>{
        alertBox.style.visibility = 'collapse';
        alertBox.innerText = '';
      }, 2000)
    }

    function changePlayer(){
      turn ++
      updatePlayer();
      playerMessage.innerText = `READY PLAYER ${player}`;
    }

    function updatePlayer(){
      player = turn % 2 ? 'O' : 'Y';
    }

    function unmountClickHandlers(){
      boardMatrix.forEach(row => {
        row.forEach(tile => tile.removeEventListener('click', registerClick))
      })
    }

    restart();

  }

