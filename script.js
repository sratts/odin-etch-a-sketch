let gridSize = 16;

const divGridContainer = document.querySelector(".grid-container");
//const divGrid = document.createElement('div');
createGrid(gridSize);

const gridPieces = document.querySelectorAll('.div-grid');

gridPieces.forEach((piece) => {
    piece.addEventListener('mouseover', () => {
        piece.classList.add('color');
    });
});

const resetButton = document.getElementById("reset");
resetButton.addEventListener('click', () => {
    gridPieces.forEach((piece) => {
        piece.classList.remove('color')
    });

    let newGrid = window.prompt("Enter grid size: ");
    console.log(newGrid);   
    //createGrid(newGrid);
});

function createGrid(size) {

    for (let index = 0; index < size*size; index++) {
        const divGrid = document.createElement('div');
        //divGrid.textContent = "JS Test" + index;
        divGrid.classList.add('div-grid');
        divGridContainer.appendChild(divGrid);
    }

}