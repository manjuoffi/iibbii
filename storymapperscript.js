// storymapperscript.js

import jsonData from './storymappdata.js';
function displayStories() {
  // Access the JSON data
  const stories = jsonData.stories;

  // Reference the static "map" div
  const mapDiv = document.getElementById('map');

  // Loop through each story in the data
  stories.forEach(story => {
    // Create a section for each story
    const storySection = document.createElement('section');
    storySection.className = 'story-section';

    // Create an anchor element for the title (hyperlink)
    const titleLink = document.createElement('a');
    titleLink.href = story.url; // Use the URL from the JSON data
    titleLink.target = '_blank'; // Open link in a new tab
    titleLink.textContent = story.title;

    // Create elements for author and content
    const authorElement = document.createElement('p');
    authorElement.textContent = `Author: ${story.author}`;

    const contentElement = document.createElement('p');
    contentElement.textContent = story.content;

    // Append the elements to the section
    storySection.appendChild(titleLink);
    storySection.appendChild(authorElement);
    storySection.appendChild(contentElement);

    // Append the section to the "map" div
    mapDiv.appendChild(storySection);
  });
}

// Call the function to display stories when the page loads
displayStories();