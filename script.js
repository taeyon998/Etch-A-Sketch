const container = document.querySelector('#container');
const resetButton = document.getElementById('resetButton');

function handleSquareHover(event) {
    const square = event.target;
    square.classList.add('hovered');
}

function handleSquareLeave(event) {
    const square = event.target;
    square.classList.remove('hovered');
}

function resetGrid() {
    let gridSize;

    do {
        gridSize = parseInt(prompt('Enter the number of squares per side (1-100):'));
    } while (isNaN(gridSize) || gridSize < 1 || gridSize > 100);

    const sideLength = 960 / gridSize;

    // Clear existing grid
    while (container.firstChild) {
        container.firstChild.remove();
    }

    container.style.width = `${960}px`;

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${sideLength}px`;
            square.style.height = `${sideLength}px`;
            container.appendChild(square);

            square.addEventListener('mouseover', handleSquareHover);
            square.addEventListener('mouseleave', handleSquareLeave);
        }
    }
}

resetButton.addEventListener('click', resetGrid);


