// Array holding the image file paths
const images = ['./Untitled-design.png', './leopard.jpg', './IMG_1482.jpg'];
let currentIndex = 0;

// Select the image element and buttons
const imageSlider = document.getElementById('imageSlider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Function to update the displayed image
function updateImage(index) {
  imageSlider.src = images[index];
}

// Event listener for the next button
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
  updateImage(currentIndex);
});

// Event listener for the previous button
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back to the last image
  updateImage(currentIndex);
});






// Select the clickable text and the content to be revealed
const revealText = document.getElementById('reveal-text');
const photoDescription = document.getElementById('photo-description');

// Add event listener to the text
revealText.addEventListener('click', () => {
    // Toggle the display of the hidden content
    if (photoDescription.style.display === 'none') {
        photoDescription.style.display = 'block';  // Show content
    } else {
        photoDescription.style.display = 'none';   // Hide content if clicked again
    }
});




// Select the clickable text and the content to be revealed
const revealTextTwo = document.getElementById('reveal-text2');
const photoDescriptionTwo = document.getElementById('photo-description2');

// Add event listener to the text
revealTextTwo.addEventListener('click', () => {
    // Toggle the display of the hidden content
    if (photoDescriptionTwo.style.display === 'none') {
        photoDescriptionTwo.style.display = 'block';  // Show content
    } else {
        photoDescriptionTwo.style.display = 'none';   // Hide content if clicked again
    }
});