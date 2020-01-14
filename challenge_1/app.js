window.onload = function() {

  // VARIABLES
  const EMPTY_SPACE = "";

  const state = {
    turn: 0,
    player: 'Y',
    Y_count: 0,
    O_count: 0
  }

  let turn = 0;
  let player;
  let Y_count = 0;
  let O_count = 0;

  //==============================================
  //VIEW
  //==============================================

  const tile00 = document.querySelector(".tile00");
  const tile01 = document.querySelector(".tile01");
  const tile02 = document.querySelector(".tile02");
  const tile10 = document.querySelector(".tile10");
  const tile11 = document.querySelector(".tile11");
  const tile12 = document.querySelector(".tile12");
  const tile20 = document.querySelector(".tile20");
  const tile21 = document.querySelector(".tile21");
  const tile22 = document.querySelector(".tile22");
  const restartBtn = document.querySelector(".restartBtn");
  const alertBox = document.querySelector(".alertBox");
  const playerMessage = document.querySelector(".playerMessage");
  const oCounter = document.querySelector(".o-counter");
  const yCounter = document.querySelector(".y-counter");

  const winningMessage = `${state.player} wins!`;
  let winState = false;

  const boardMatrix = [
    [tile00, tile01, tile02],
    [tile10, tile11, tile12],
    [tile20, tile21, tile22]
  ];

  restartBtn.addEventListener("click", restart);

  //==============================================
  // CONTROLLERS
  //==============================================

  // GAME LOGIC

  function checkEndGame() {
    if (
      checkHorizontal(boardMatrix) ||
      checkVertical(boardMatrix) ||
      checkDiagonals(boardMatrix)
    ) {
      playerMessage.innerText = state.player + " WINS!";
      winState = true;
    }
    if (winState) {
      if (state.player === "Y") {
        state.Y_count++;
      } else {
        state.O_count++;
      }
      updateCounter();
      unmountClickHandlers();
      setTimeout(restart, 2000);
    }
    if (state.turn === 9) {
      unmountClickHandlers();
      alertFlag("stalemate! restarting game...");
      setTimeout(restart, 2000);
    }
  }

  // restart game
  function restart() {
    boardMatrix.forEach(row => {
      row.forEach(tile => tile.addEventListener("click", registerClick));
    });
    state.turn = -1;
    changePlayer();
    boardMatrix.forEach(row => {
      row.forEach(tile => {
        tile.innerText = EMPTY_SPACE;
      });
    });
  }

  // BOARD CLICK HANDLER
  function registerClick(e) {
    e.preventDefault();
    if (e.target.innerText === EMPTY_SPACE) {
      e.target.innerText = state.player;
      checkEndGame();
      if (!winState) {
        changePlayer();
      }
      winState = false;
    } else {
      alertFlag("Try an empty square");
    }
  }

  //==============================================
  // WIN CONDITIONS:
  //==============================================

  function checkHorizontal(matrix) {
    let winningState = matrix.some(row => {
      return row.every(tile => {
        return tile.innerText === state.player;
      });
    });
    return winningState;
  }

  function checkVertical(matrix) {
    let transposedMatrix = transpose(matrix);
    return checkHorizontal(transposedMatrix);
  }

  function checkDiagonals(matrix) {
    return checkMajor(matrix) || checkMinor(matrix);
  }

  function checkMajor(matrix) {
    var run = [];
    for (let i = 0; i < matrix.length; i++) {
      run.push(matrix[i][i].innerText === state.player);
    }
    return run.every(item => item);
  }

  function checkMinor(matrix) {
    var run = [];
    for (
      let i = 0, j = matrix.length - 1;
      i < matrix.length, j >= 0;
      i++, j--
    ) {
      run.push(matrix[j][i].innerText === state.player);
    }
    return run.every(item => item);
  }

  function transpose(matrix) {
    return Object.keys(matrix[0]).map(row => {
      return matrix.map(col => {
        return col[row];
      });
    });
  }

  //==============================================
  // HELPER LIB
  //==============================================

  function changePlayer() {
    state.turn++;
    updatePlayer();
    playerMessage.innerText = `READY PLAYER ${state.player}`;
  }

  function updatePlayer() {
    state.player = state.turn % 2 ? "O" : "Y";
  }

  function unmountClickHandlers() {
    boardMatrix.forEach(row => {
      row.forEach(tile => tile.removeEventListener("click", registerClick));
    });
  }

  function updateCounter() {
    yCounter.innerText = state.Y_count;
    oCounter.innerText = state.O_count;
  }

  //==============================================
  // USER MESSAGES
  //==============================================
  function alertFlag(message) {
    alertBox.innerText = message.toUpperCase();
    alertBox.style.visibility = "visible";
    setTimeout(() => {
      alertBox.style.visibility = "collapse";
      alertBox.innerText = "";
    }, 2000);
  }

  // START FIRST GAME
  restart();
};
