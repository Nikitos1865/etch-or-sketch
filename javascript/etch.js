const gridContainer = document.createElement('div');
gridContainer.id = 'grid-container';

let numRows = 50;

let numGrids = numRows**2;



function createGrids(num) {
    for(let i = 0; i<num; i++) {
        console.log(num)
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
setGridAmount.textContent = "Set grid size!";
setGridAmount.style.backgroundColor = "darkblue"
setGridAmount.style.color = "beige";
document.getElementById("grid-number").appendChild(setGridAmount);

const errorMessage = document.createElement("div")
errorMessage.textContent = "Error: this is not a valid input"
document.getElementById("grid-number").appendChild(errorMessage);
errorMessage.classList.add("error"); 

document.getElementById('clear-button').addEventListener('click', () => {
    document.querySelectorAll('.grid-box').forEach(grid => {
        grid.style.backgroundColor = 'white';
        grid.style.opacity = 1;
    });
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
    if (document.getElementById('eraser').classList.contains('erase-mode')){
        document.getElementById('shading').classList.remove('shading-mode');
        document.getElementById('rainbow').classList.remove('rainbow-mode')
    }
})

document.getElementById('rainbow').addEventListener('click', () => {
    document.getElementById('rainbow').classList.toggle('rainbow-mode');
    if (document.getElementById('rainbow').classList.contains('rainbow-mode')){
        document.getElementById('shading').classList.remove('shading-mode');
        document.getElementById('eraser').classList.remove('erase-mode')
    }
})

document.getElementById('shading').addEventListener('click', ()=> {
    document.getElementById('shading').classList.toggle('shading-mode');
    if (document.getElementById('shading').classList.contains('shading-mode')){
        document.getElementById('rainbow').classList.remove('rainbow-mode');
        document.getElementById('eraser').classList.remove('erase-mode')
    }
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
        const elemWidth = document.getElementById("grid-container").offsetWidth;
        alert('this is the width'+ elemWidth);
        document.getElementById('grid-container').style.gridTemplateColumns = "repeat("+num+","+elemWidth/num+"px)";
        document.getElementById('grid-container').style.gridTemplateRows = "repeat("+num+","+elemWidth/num+"px)";
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
        if (checkEraseOn() == true && !mousedown == false) {
            grid.style.opacity = 1;
            grid.style.backgroundColor = "white";
        }
        else if (checkShadingOn() == true && !mousedown == false){
            grid.style.backgroundColor = "black";
            grid.count++; 
            grid.style.opacity = 0.1*grid.count;
        }
        else if (!mousedown == false && checkRainbowOn() == true){
            grid.style.opacity = 1; 
            grid.style.backgroundColor = "rgb("+Math.floor(Math.random() * 255)+","+Math.floor(Math.random() * 255)+","+Math.floor(Math.random() * 255)+")";
        }
        else if (mousedown == true){
            grid.style.opacity = 1; 
            grid.style.backgroundColor = "black";
        }
        })
    }
    )}

    const lastDiv = document.createElement('div');
    lastDiv.className = 'last-div';
    const footer = document.createElement("FOOTER");
    footer.id = 'footer';
    document.body.appendChild(lastDiv);
    const p = document.createTextNode("Nikita Angarski, 2023");
    footer.appendChild(p);
    lastDiv.appendChild(footer);
    document.body.appendChild(lastDiv);

    
    






