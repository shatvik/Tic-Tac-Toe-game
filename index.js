var btn = document.getElementById("1");
var cross = document.getElementById("cross");
var zero = document.getElementById("zero");
var move = 0;
const arr1 = [];
const arr2 = [];

var buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (move % 2 == 0) {
      arr1.push(e.target.id);
      if (arr1.includes("1") && arr1.includes("2") && arr1.includes("3")) {
        alert("Player1 wins...");
      } else if (
        arr1.includes("1") &&
        arr1.includes("5") &&
        arr1.includes("9")
      ) {
        alert("Player1 wins...");
      } else if (
        arr1.includes("1") &&
        arr1.includes("4") &&
        arr1.includes("7")
      ) {
        alert("Player1 wins...");
      } else if (
        arr1.includes("2") &&
        arr1.includes("5") &&
        arr1.includes("8")
      ) {
        alert("Player1 wins...");
      } else if (
        arr1.includes("3") &&
        arr1.includes("6") &&
        arr1.includes("9")
      ) {
        alert("Player1 wins...");
      } else if (
        arr1.includes("4") &&
        arr1.includes("5") &&
        arr1.includes("6")
      ) {
        alert("Player1 wins...");
      } else if (
        arr1.includes("7") &&
        arr1.includes("8") &&
        arr1.includes("9")
      ) {
        alert("Player1 wins...");
      } else if (
        arr1.includes("3") &&
        arr1.includes("5") &&
        arr1.includes("7")
      ) {
        alert("Player1 wins...");
      }
      if (arr1.length > 4) {
        alert("draw");
      }
      button.querySelector(".imgbtn").setAttribute("style", "display:block;");
      button.setAttribute("disabled", "");
    } else {
      arr2.push(e.target.id);
      if (arr2.includes("1") && arr2.includes("2") && arr2.includes("3")) {
        alert("Player2 wins...");
      } else if (
        arr2.includes("1") &&
        arr2.includes("5") &&
        arr2.includes("9")
      ) {
        alert("Player2 wins...");
      } else if (
        arr2.includes("1") &&
        arr2.includes("4") &&
        arr2.includes("7")
      ) {
        alert("Player2 wins...");
      } else if (
        arr2.includes("2") &&
        arr2.includes("5") &&
        arr2.includes("8")
      ) {
        alert("Player2 wins...");
      } else if (
        arr2.includes("3") &&
        arr2.includes("6") &&
        arr2.includes("9")
      ) {
        alert("Player2 wins...");
      } else if (
        arr2.includes("4") &&
        arr2.includes("5") &&
        arr2.includes("6")
      ) {
        alert("Player2 wins...");
      } else if (
        arr2.includes("7") &&
        arr2.includes("8") &&
        arr2.includes("9")
      ) {
        alert("Player2 wins...");
      } else if (
        arr2.includes("3") &&
        arr2.includes("5") &&
        arr2.includes("7")
      ) {
        alert("Player2 wins...");
      }
      if (arr2.length > 4) {
        alert("draw");
      }
      button.querySelector(".imgbtn2").setAttribute("style", "display:block;");
      button.setAttribute("disabled", "");
    }
    move++;
  });
});
