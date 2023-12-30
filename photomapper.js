// storymapperscript.js

import photoData from './photourldata.js';

function displayPhotos() {
  // Access the photo data
  const photos = photoData.photos;

  // Reference the static "map" div
  const mapDiv = document.getElementById('map');

  // Create a table for photos
  const photoTable = document.createElement('table');
  photoTable.className = 'photo-table';

  // Calculate the number of columns (2 or 4)
  const numColumns = Math.min(photos.length, 4); // Limit to a maximum of 4 columns

  // Loop through each photo in the data
  for (let i = 0; i < photos.length; i += numColumns) {
    // Create a table row for each set of photos
    const photoRow = document.createElement('tr');

    // Create table cells for each photo
    for (let j = i; j < i + numColumns && j < photos.length; j++) {
      const photo = photos[j];

      // Create a table cell for the photo
      const photoCell = document.createElement('td');
    
      // Create an image element for each photo
      const photoImage = document.createElement('img');
    
      // Set the image source and alt attributes
      photoImage.src = photo.url;
      photoImage.alt = 'Image'; // Add alt text for accessibility

      // Add an error event listener to handle image loading errors
      photoImage.addEventListener('error', function() {
        console.error('Error loading image:', photo.url);
      });

      // Append the image to the cell
      photoCell.appendChild(photoImage);

      // Append the cell to the row
      photoRow.appendChild(photoCell);
    }

    // Append the row to the table
    photoTable.appendChild(photoRow);
  }

  // Append the table to the main container
  mapDiv.appendChild(photoTable);
}

// Call the function to display photos when the page loads
displayPhotos();
