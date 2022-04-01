let gridSize = 16;

const divGridContainer = document.querySelector(".grid-container");

createGrid(gridSize);

const resetButton = document.getElementById("reset");
resetButton.addEventListener('click', resetGrid);

function createGrid(size) {

    divGridContainer.style.gridTemplateRows = `repeat(${size}, auto)`;
    divGridContainer.style.gridTemplateColumns = `repeat(${size}, auto)`;
    //grid-template-columns: repeat(16, auto);
    //grid-template-rows: repeat(16, auto);

    for (let index = 0; index < size*size; index++) {
        const divGrid = document.createElement('div');
        //divGrid.textContent = "js "+index;
        divGrid.classList.add('div-grid');
        //divGrid.style.height = '50px';
        //divGrid.style.width = '50px';
        divGridContainer.appendChild(divGrid);
    }

    const gridPieces = document.querySelectorAll('.div-grid');

    gridPieces.forEach((piece) => {
        piece.addEventListener('mouseover', () => {
            piece.classList.add('color');
        });
    });
}

function resetGrid(){
    const gridPieces = document.querySelectorAll('.div-grid');

    gridPieces.forEach((piece) => {
        piece.classList.remove('color')
    });

    //let element = document.getElementById("top");
    while (divGridContainer.firstChild) {
        divGridContainer.removeChild(divGridContainer.firstChild);
    }

    let newGrid = window.prompt("Enter grid size:");
    console.log(newGrid);
    
    if (newGrid <= 100 && newGrid >= 16)
        createGrid(newGrid);
    else 
        createGrid(16);

}