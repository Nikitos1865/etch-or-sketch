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
    document.querySelectorAll('.grid-box').forEach(grid => grid.style.backgroundColor = 'white');
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

let eraseOn = false;

let rainbowOn = false; 

document.getElementById('eraser').addEventListener('click', () => {
    document.getElementById('eraser').classList.toggle('erase-mode');
    document.getElementById('rainbow').classList.remove('rainbow-mode');
    document.getElementById('shading').classList.remove('shading-mode');
})

document.getElementById('rainbow').addEventListener('click', () => {
    document.getElementById('rainbow').classList.toggle('rainbow-mode');
    document.getElementById('eraser').classList.remove('eraser-mode');
    document.getElementById('shading').classList.remove('shading-mode');
})

document.getElementById('shading').addEventListener('click', ()=> {
    document.getElementById('shading').classList.toggle('shading-mode');
    document.getElementById('eraser').classList.remove('eraser-mode');
    document.getElementById('rainbow').classList.remove('rainbow-mode');
})



function checkEraseOn() {
    if (document.getElementById('eraser').classList.contains("erase-mode")){
        eraseOn = true; 
    }
    else {
        eraseOn = false; 
    }
    return eraseOn; 
}

function checkRainbowOn() {
    if (document.getElementById('rainbow').classList.contains("rainbow-mode")){
        rainbowOn = true; 
    }
    else {
        rainbowOn = false; 
    }
    return rainbowOn; 
}

function checkShadingOn() {
    if (document.getElementById('shading').classList.contains("shading-mode")){
        shadingOn = true; 
    }
    else {
        shadingOn = false; 
    }
    return shadingOn; 
}

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
    document.querySelectorAll('.grid-box').forEach( grid => {
        grid.count = 1; 
        grid.addEventListener('mouseenter', function draw (){
        if (checkEraseOn() == true && mousedown == true) {
            grid.style.backgroundColor = "white";
        }
        else if (checkShadingOn() == true && mousedown == true){
            grid.style.backgroundColor = "black";
            grid.count++; 
            grid.style.opacity = 0.1*grid.count;
        }
        else if (mousedown == true && checkRainbowOn() == true){
            grid.style.backgroundColor = "rgb("+Math.floor(Math.random() * 255)+","+Math.floor(Math.random() * 255)+","+Math.floor(Math.random() * 255)+")";
        }
        else if (mousedown == true){
            grid.style.backgroundColor = "black";
        }
        })
    }
    )}



