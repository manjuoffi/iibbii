// Import both data files
import photoData from './photourldata.js';
import drawingData from './drawingurldata.js';

function displayPhotos() {
  // Reference the static "map" div
  const mapDiv = document.getElementById('map');

  // Create a container div with Bootstrap's row class
  const containerDiv = document.createElement('div');
  containerDiv.classList.add('row');

  // Choose the appropriate data based on the page title
  const pageTitle = document.title;
  let dataToUse;

  if (pageTitle === "Photos by Manjunatha M R") {
    dataToUse = photoData.photos;
  } else if (pageTitle === "Drawing Page Title") {
    dataToUse = drawingData.drawings;
  } else {
    // Default to photos if the title doesn't match any specific case
    dataToUse = photoData.photos;
  }

  // Loop through each item in the data
  dataToUse.forEach((item) => {
    // Create a div for each item with Bootstrap's column classes
    const colDiv = document.createElement('div');
    colDiv.classList.add('col-md-3', 'mb-3'); // Adjust column size and margin as needed

    // Create an image element for each item with Bootstrap's img-fluid class
    const itemImage = document.createElement('img');
    itemImage.src = item.url;
    itemImage.alt = 'Image';
    itemImage.classList.add('img-fluid');

    // Add an error event listener to handle image loading errors
    itemImage.addEventListener('error', function() {
      console.error('Error loading image:', item.url);
    });

    // Append the image to the column div
    colDiv.appendChild(itemImage);

    // Append the column div to the container
    containerDiv.appendChild(colDiv);
  });

  // Append the container to the main mapDiv
  mapDiv.appendChild(containerDiv);
}

// Call the function to display items when the page loads
displayPhotos();
