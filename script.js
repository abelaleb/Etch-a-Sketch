const button = document.getElementById("resetbtn");
const resetButton = document.createElement("button");
const enterButton = document.getElementById("enterButton");
const gridSizeInput = document.getElementById("gridSizeInput");
const gridContainer = document.getElementById("grid-container");
resetButton.textContent = "RESET";
resetButton.setAttribute("id", "resetButton");
resetButton.addEventListener("click", function () {
  location.reload();
});

function handleMouseOver(event) {
    if (event.ctrlKey) {
      // Add a class to the target element
      event.target.classList.add("sketched");
    }
  }

function createGrid(size) {
  gridContainer.innerHTML = ""; //clear the exeisting grid

  //Use css grid to create a flexiable layout based on size
  gridContainer.style.gridTemplateColumns = `repeat(${size},1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size},1fr)`;

  //Dynamically set grid item size based on container width
  const gridItemWidth = Math.floor(gridContainer.offsetWidth / size);
  const gridItems = Array.from(document.querySelectorAll(".grid-item"));
  gridItems.forEach((item) => (item.style.width = `${gridItemWidth}px`));

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const div = document.createElement("div");
      div.classList.add("grid-item"); //Add a class for styling
      div.addEventListener("mouseover", handleMouseOver);
      gridContainer.appendChild(div);
    }
  }
}
function resetGrid() {
  const gridSize = parseInt(gridSizeInput.value);
  if (!isNaN(gridSize)) {
    createGrid(gridSize);
  } else {
    alert(`Please enter a valid number for a grid size.`);
  }
}
enterButton.addEventListener("click", function () {
  resetGrid();
});

createGrid(20);
button.appendChild(resetButton);
