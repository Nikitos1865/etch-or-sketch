const gridContainer = document.createElement('div');
gridContainer.id = 'grid-container';

let numRows = 50;

let numGrids = numRows**2;



function createGrids(num) {
    for(let i = 0; i<num; i++) {
        let grid = document.createElement('div');
        grid.className = "grid-box";
        gridContainer.appendChild(grid);
    }
    document.body.appendChild(gridContainer);
}

createGrids(numGrids) 

const inputSquares = document.createElement("INPUT");
inputSquares.setAttribute("type","text");
document.getElementById("grid-number").appendChild(inputSquares);

const setGridAmount = document.createElement('button');
setGridAmount.textContent = "Set grid size!"
document.getElementById("grid-number").appendChild(setGridAmount);

const errorMessage = document.createElement("div")
errorMessage.textContent = "Error: this is not a valid input"
document.getElementById("grid-number").appendChild(errorMessage);
errorMessage.classList.add("error"); 

document.getElementById('clear-button').addEventListener('click', () => {
    document.querySelectorAll('.grid-box').forEach(grid => grid.classList.add('clear'));
    draw(); 
})


let mousedown = false; 

window.addEventListener('mousedown', () => {
    mousedown = true;
})

window.addEventListener('mouseup',() => {
    mousedown = false; 
})

draw(); 

function readInRows() {
    num = Number(inputSquares.value)
    if (num <= 100 && num >= 4) {
        document.querySelectorAll(".grid-box").forEach(el => el.remove());
        document.getElementById('grid-container').style.gridTemplateColumns = "repeat("+num+","+960/num+"px)";
        document.getElementById('grid-container').style.gridTemplateRows = "repeat("+num+","+960/num+"px)";
        createGrids(num**2);
        draw(); 
    }
    else 
    errorMessage.classList.toggle('fade');
    setTimeout(() => {
        errorMessage.classList.remove('fade');
    }, "1700");
}

setGridAmount.addEventListener('click', () => {readInRows()})

function draw() {
    document.querySelectorAll('.grid-box').forEach( grid => grid.addEventListener('mousemove', function draw (){
        if (mousedown == true){
            grid.classList.remove('clear');
            grid.classList.add("color");
        }
    }));
}

  