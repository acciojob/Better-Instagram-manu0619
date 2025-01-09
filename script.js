// Store the currently dragged element
let draggedElement = null;

// Add dragstart event listener to each div
document.querySelectorAll('.image').forEach((div) => {
  div.addEventListener('dragstart', (event) => {
    draggedElement = event.target; // Store the dragged element
    event.target.style.opacity = '0.5'; // Optionally reduce opacity when dragging
  });

  div.addEventListener('dragend', () => {
    draggedElement.style.opacity = '1'; // Reset opacity when drag ends
    draggedElement = null; // Reset the dragged element
  });

  div.addEventListener('dragover', (event) => {
    event.preventDefault(); // Allow the div to be a valid drop target
    event.target.style.border = '2px solid rgb(0, 195, 255)'; // Highlight target div
  });

  div.addEventListener('dragleave', (event) => {
    event.target.style.border = '2px solid transparent'; // Remove highlight when drag leaves
  });

  div.addEventListener('drop', (event) => {
    event.preventDefault(); // Prevent the default drop behavior
    if (draggedElement !== event.target) {
      // Swap the background images
      let draggedImage = draggedElement.style.backgroundImage;
      draggedElement.style.backgroundImage = event.target.style.backgroundImage;
      event.target.style.backgroundImage = draggedImage;
    }
    event.target.style.border = '2px solid transparent'; // Reset border after drop
  });
});
