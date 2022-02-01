let container = document.querySelector("#container");
let size = 16;
let color = "black";

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
makeGrid();

let squares = document.querySelectorAll(".squares");

for (let i = 0; i < squares.length; i++) {
  squares[i].style.width = `${500 / size}px`;
  squares[i].style.height = `${500 / size}px`;
  squares[i].addEventListener("mouseover", function () {
    if (color === "random") {
      let radomColor = getRandomColor();
      squares[i].style.backgroundColor = radomColor;
    }
    squares[i].style.backgroundColor = color;
  });
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
