const button = document.getElementById('resetbtn');
const resetButton = document.createElement('button');
const enterButton = document.getElementById('enterButton')
const gridSizeInput = document.getElementById('gridSizeInput');
const gridContainer = document.getElementById('grid-container');
resetButton.textContent = "RESET";
resetButton.setAttribute('id','resetButton');

resetButton.addEventListener('click', function(){
    location.reload();
});

function handleMouseOver(event) {
    if(event.ctrlKey){
    event.target.style.backgroundColor = '#65524d';
    } 
}

function createGrid(size){
    gridContainer.innerHTML='';//clear the exeisting grid
    const gridSize = Math.min(size,100);
    for (let i=0; i<gridSize; i++){
        for(let j=0; j<gridSize; j++){
            const div = document.createElement('div');
            div.classList.add('grid-item');//Add a class for styling
            div.addEventListener('mouseover', handleMouseOver);
            gridContainer.appendChild(div);
        }
    }
}
function resetGrid(){
    const gridSize = parseInt(gridSizeInput.value);
    if (!isNaN(gridSize)){
        createGrid(gridSize);
    }
    else{
        alert(`Please enter a valid number for a grid size.`);
    }
}
enterButton.addEventListener('click', function() {
    resetGrid();
});

createGrid(16);
button.appendChild(resetButton);

