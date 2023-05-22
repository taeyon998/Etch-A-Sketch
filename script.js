const GRIDWIDTH = 600;

const container = document.querySelector('#container');
const resetButton = document.getElementById('resetButton');

// OUTPUT: rgb(n,n,n)
function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

function handleSquareHover(event) {
    event.preventDefault(); // Prevent default dragging behavior

    if (event.buttons === 1) { // Only when left mouse is clicked
        const square = event.target;

        // Opacity
        let opacity = parseFloat(square.style.opacity) || 0; // parseFloat('0.1') = 0.1, parseFloat('Hello') = NaN
        opacity += 0.2;
        square.style.opacity = opacity;

        // Color
        if (opacity <= 0.2) {
            square.style.backgroundColor = getRandomColor(); // rgb(255,0,0)
        }
        // square.style.backgroundColor = 'black';

        // square.classList.add('hovered');
    }
}

// function handleSquareLeave(event) {
//     const square = event.target;
//     square.classList.remove('hovered');
// }

function resetGrid() {
    let gridSize;
    
    // Ask User for Grid Size
    do {
        gridSize = parseInt(prompt('Enter the number of squares per side (1-100):'));
    } while (isNaN(gridSize) || gridSize < 1 || gridSize > 100);

    // Clear existing grid
    while (container.firstChild) {
        container.firstChild.remove();
    }

    createGrid(gridSize);

}

// create 9x9 default grid when page loads
function createDefaultGrid() {
    createGrid(9);
  }

// Create Grid of size gridSize x gridSize
function createGrid(gridSize){
    container.style.width = `${GRIDWIDTH}px`;

    const borderSize = 2; // Default border=1 left & right within cell
    const totalborderSize = gridSize * borderSize * 2; // Total size occupied by gaps
    const sideLength = Math.floor((GRIDWIDTH - totalborderSize) / gridSize); // Calculate the size of each grid cell

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.classList.add('square','fancy-border');            
            square.style.width = `${sideLength}px`;
            square.style.height = `${sideLength}px`;
            container.appendChild(square);

            square.addEventListener('mousedown', handleSquareHover);
            square.addEventListener('mouseover', handleSquareHover);
            // square.addEventListener('mouseleave', handleSquareLeave);
        }
    }
}


createDefaultGrid()
resetButton.addEventListener('click', resetGrid);


