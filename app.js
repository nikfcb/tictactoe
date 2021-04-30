// FINAL VERSION
let cell = document.querySelectorAll(".cell");
let newCell = Array.from(cell);

let player1 = "X";

newCell.forEach((item) => {
  item.addEventListener("click", handleClick, { once: true });

  function handleClick(e) {
    if (player1 === "X") {
      turn(e.target.id, (player1 = "O"));
    } else {
      newTurn(e.target.id, (player1 = "X"));
    }
    winner();
  }
});

function turn(targetId) {
  document.getElementById(targetId).innerHTML = player1;
}
function newTurn(targetId) {
  document.getElementById(targetId).innerHTML = player1;
}

let restart = document.querySelector(".game--restart");
restart.addEventListener("click", () => {
  document.querySelectorAll(".cell").forEach((cell) => (cell.innerHTML = ""));
  document.getElementById("status").textContent = "";
  location.reload();
});

function winner() {
  if (
    (newCell[0].innerHTML === "X" &&
      newCell[1].innerHTML === "X" &&
      newCell[2].innerHTML === "X") ||
    (newCell[3].innerHTML === "X" &&
      newCell[4].innerHTML === "X" &&
      newCell[5].innerHTML === "X") ||
    (newCell[6].innerHTML === "X" &&
      newCell[7].innerHTML === "X" &&
      newCell[8].innerHTML === "X") ||
    (newCell[0].innerHTML === "X" &&
      newCell[4].innerHTML === "X" &&
      newCell[8].innerHTML === "X") ||
    (newCell[0].innerHTML === "X" &&
      newCell[3].innerHTML === "X" &&
      newCell[6].innerHTML === "X") ||
    (newCell[1].innerHTML === "X" &&
      newCell[4].innerHTML === "X" &&
      newCell[7].innerHTML === "X") ||
    (newCell[2].innerHTML === "X" &&
      newCell[5].innerHTML === "X" &&
      newCell[8].innerHTML === "X") ||
    (newCell[2].innerHTML === "X" &&
      newCell[4].innerHTML === "X" &&
      newCell[6].innerHTML === "X")
  ) {
    document.getElementById("status").textContent = "X won";
  } else if (
    (newCell[0].innerHTML === "O" &&
      newCell[1].innerHTML === "O" &&
      newCell[2].innerHTML === "O") ||
    (newCell[3].innerHTML === "O" &&
      newCell[4].innerHTML === "O" &&
      newCell[5].innerHTML === "O") ||
    (newCell[6].innerHTML === "O" &&
      newCell[7].innerHTML === "O" &&
      newCell[8].innerHTML === "O") ||
    (newCell[0].innerHTML === "O" &&
      newCell[4].innerHTML === "O" &&
      newCell[8].innerHTML === "O") ||
    (newCell[0].innerHTML === "O" &&
      newCell[3].innerHTML === "O" &&
      newCell[6].innerHTML === "O") ||
    (newCell[1].innerHTML === "O" &&
      newCell[4].innerHTML === "O" &&
      newCell[7].innerHTML === "O") ||
    (newCell[2].innerHTML === "O" &&
      newCell[5].innerHTML === "O" &&
      newCell[8].innerHTML === "O") ||
    (newCell[2].innerHTML === "O" &&
      newCell[4].innerHTML === "O" &&
      newCell[6].innerHTML === "O")
  ) {
    document.getElementById("status").textContent = "O won";
  } else if (
    (newCell[0].innerHTML === "X" || newCell[0].innerHTML === "O") &&
    (newCell[1].innerHTML === "X" || newCell[1].innerHTML === "O") &&
    (newCell[2].innerHTML === "X" || newCell[2].innerHTML === "O") &&
    (newCell[3].innerHTML === "X" || newCell[3].innerHTML === "O") &&
    (newCell[4].innerHTML === "X" || newCell[4].innerHTML === "O") &&
    (newCell[5].innerHTML === "X" || newCell[5].innerHTML === "O") &&
    (newCell[6].innerHTML === "X" || newCell[6].innerHTML === "O") &&
    (newCell[7].innerHTML === "X" || newCell[7].innerHTML === "O") &&
    (newCell[8].innerHTML === "X" || newCell[8].innerHTML === "O")
  ) {
    document.getElementById("status").textContent = "TIE";
  }
}
