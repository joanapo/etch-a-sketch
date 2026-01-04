// DOM elements
const container = document.querySelector("div.container");
const newGrid = document.getElementById("new-grid");
const opacityMode = document.getElementById("opacity-mode");
const colorMode = document.getElementById("color-mode");
const clearGrid = document.getElementById("clear-grid");

// Game modes
let isColorMode = false;
let isOpacityMode = false;

// Colors used
const navy = "#2E5CA2";
const white = "#FFFFFF";
const lightBlue = "#D7F4FF";


// Get color for square
function getColor() {
    switch (isColorMode){
        case true:
            r = Math.floor(Math.random() * 255);
            g = Math.floor(Math.random() * 255);
            b = Math.floor(Math.random() * 255);
            return `rgb(${r}, ${g}, ${b})`;
        
        case false:
            return navy;
    };
};

// Button event listeners
newGrid.addEventListener("click", () => {
    let gridSize = Number(prompt("Enter the size of your grid (1-100): "));

    if (gridSize <= 0 || gridSize > 100 || !Number.isInteger(gridSize)){
        alert("Please input a valid number between 1 - 100.");
        return;
    }; 
    
    const squareSize = 500 / gridSize;

    // clear previous grid
    container.innerHTML = "";

    for (let i = 0; i < gridSize * gridSize; i++){
        let square = document.createElement("div");
        square.className = "square";
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    };
});

colorMode.addEventListener("click", () => {
    if (isColorMode == false){
        isColorMode = true;
        colorMode.style.backgroundColor = white;
        colorMode.style.color = navy;
    } else {
        isColorMode = false;
        colorMode.style.backgroundColor = navy;
        colorMode.style.color = white;
    };
});

clearGrid.addEventListener("click", () => {
    const squares = document.querySelectorAll("div.square");
    squares.forEach((square) => {
        square.style.backgroundColor = lightBlue;
    })
})

// Etch-A-Sketch logic
container.addEventListener("mouseover", (e) =>{
    if (e.target.classList[0] == "square"){
    let color = getColor();
    e.target.style.backgroundColor = color;
    };
});