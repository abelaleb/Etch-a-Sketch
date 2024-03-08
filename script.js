// Get the container element
const gridContainer = document.getElementById('grid-container');

// Function to handle mouseover event
function handleMouseOver(event) {
    event.target.style.backgroundColor = 'blue'; // Change background color to blue
}

// Function to handle mouseout event
function handleMouseOut(event) {
    event.target.style.backgroundColor = '#65524d'; // Reset background color to default
}

// Loop to create 16x16 grid of square divs
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const div = document.createElement('div'); // Create a new div element
        div.classList.add('grid-item'); // Add a class for styling
        div.addEventListener('mouseover', handleMouseOver); // Add mouseover event listener
        div.addEventListener('mouseout', handleMouseOut); // Add mouseout event listener
        gridContainer.appendChild(div); // Append the div to the container
    }
}