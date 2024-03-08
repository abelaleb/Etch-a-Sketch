const gridContainer = document.getElementById('grid-container');
function handleMouseOver(event) {
    if(event.ctrlKey){
    event.target.style.backgroundColor = '#65524d';
    } 
}
// Loop to create 16x16 grid of square divs
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.classList.add('grid-item'); // Add a class for styling
        div.addEventListener('mouseover', handleMouseOver); // Add mouseover event listener
        gridContainer.appendChild(div);
    }
}