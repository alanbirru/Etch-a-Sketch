let container = document.querySelector("#container");
let eraseButton = document.querySelector(".eraser");
let rgbButton = document.querySelector(".rgb");
let clearButton = document.querySelector(".clear");
let sizeButton = document.querySelector(".size");
let blackButton = document.querySelector(".black");
let size = prompt("Choose grid size between 1-100", "16");
let color = "black";

if (size > 100 || size <= 0) {
  size = alert("invalid size try again!");
  window.location.reload();
}

function makeGrid() {
  // container.style.border = "solid 5px black";
  for (let i = 0; i < size; i++) {
    let rows = document.createElement("div");
    rows.classList.add("rows");
    for (let i = 0; i < size; i++) {
      let div = document.createElement("div");
      div.classList.add("squares");
      rows.appendChild(div);
    }
    container.appendChild(rows);
  }
}

// aparece el grid
makeGrid();

let squares = document.querySelectorAll(".squares");

function hovering(size) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.width = `${500 / size}px`;
    squares[i].style.height = `${500 / size}px`;
    squares[i].addEventListener("mouseover", function () {
      if (color === "rgb") {
        let radomColor = getRandomColor();
        squares[i].style.backgroundColor = radomColor;
      }
      squares[i].style.backgroundColor = color;
    });
  }
}
hovering(size);

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function clear() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = "white";
  }
}

rgbButton.addEventListener("click", function () {
  color = "rgb";
});

clearButton.addEventListener("click", clear);

sizeButton.addEventListener("click", function () {
  window.location.reload();
  if (size > 100) {
    size = prompt("invalid");
  }
});

eraseButton.addEventListener("click", function () {
  color = "white";
});

blackButton.addEventListener("click", function () {
  color = "black";
});
