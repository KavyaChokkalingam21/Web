const envelope = document.querySelector('.envelope');
const imageContainer = envelope.querySelector('.image-container'); // Image container
const card2 = envelope.querySelector('.card-2'); // Card 2

// Function to expand the image (replaces Card 1)
envelope.addEventListener('click', function () {
  if (!imageContainer.classList.contains('expanded') && !card2.classList.contains('expanded')) {
    imageContainer.classList.add('expanded'); // Expand the image container
  } else if (imageContainer.classList.contains('expanded') && !card2.classList.contains('expanded')) {
    // Wait for image expansion to finish before showing the card
    setTimeout(function () {
      card2.classList.add('expanded'); // Expand Card 2 after the image
    }, 300); // Delay the card's appearance slightly
  }
});

// Function to reset both elements when double-clicked
envelope.addEventListener('dblclick', function () {
  imageContainer.classList.remove('expanded'); // Reset image container
  card2.classList.remove('expanded'); // Reset Card 2
});
