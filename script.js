// DOM elements
const container = document.querySelector("div.container");
const newGrid = document.getElementById("new-grid")


newGrid.addEventListener("click", () => {
    let gridSize = Number(prompt("Enter the size of your grid (1-100): "));

    if (gridSize <= 0 || gridSize > 100 || !Number.isInteger(gridSize)){
        alert("Please input a valid number between 1 - 100.");
        return;
    } 
    
    const squareSize = 500 / gridSize;

    // clear previous grid
    container.innerHTML = "";

    for (let i = 0; i < gridSize * gridSize; i++){
        let square = document.createElement("div");
        square.className = "square";
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }

});