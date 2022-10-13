const gridContainer = document.createElement('div');
gridContainer.className = 'gridContainer';

const grid = document.createElement('div');
gridContainer.appendChild(grid);

function createGrids() {
    for(let i = 0; i<100; i++) {
        let grid = document.createElement('div');
        grid.className = "gridBox";
        gridContainer.appendChild(grid);
    }
}

createGrids() 

document.body.appendChild(gridContainer);

  