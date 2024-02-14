Art Gallery Web Application:

-The Art Gallery is a web application designed to showcase a diverse collection of artworks, including paintings, sculptures, and photographs. It provides users with an interactive platform to explore various masterpieces, learn about their artists, mediums, and more.

Components:

-app.js: This file contains the main logic of the web application, including fetching data, creating instances of the Gallery class, and handling user interactions.
-index.html: The HTML file defines the structure of the web page, including buttons for navigation and containers for displaying artworks and information.
-style.css: The CSS file styles the elements of the web page, providing visual enhancements and layout adjustments.
-ArtPiece.js: This JavaScript file defines the ArtPiece class, which serves as the base class for different types of artworks.
-Painting.js: Extending the ArtPiece class, Painting.js defines the Painting class, which represents paintings in the gallery.
-Sculpture.js: Similarly, Sculpture.js extends the ArtPiece class and defines the Sculpture class to represent sculptures.
-Photo.js: Photo.js defines the Photo class, which represents photographs in the gallery.
-Gallery.js: The Gallery class manages the collection of artworks, allowing for the addition of new artworks and handling user interactions such as displaying information about artworks.
-data.json: This JSON file contains data about various artworks, including their type, title, medium, image URL, and artist.

Functionality:

-Users can navigate through the collection of artworks using buttons for next and back(arrows).

-Clicking on the "Info" button displays detailed information about the current artwork.
The web application fetches data from the data.json file to populate the gallery with artworks dynamically.

-Different types of artworks, such as paintings, sculptures, and photographs, are represented using separate classes, allowing for specific functionalities and data handling.

How to Run:

-To run the Art Gallery web application, simply open the index.html file in a web browser that supports JavaScript. Ensure all JavaScript and CSS files are properly linked in the HTML file, and the data.json file is accessible for fetching data.

Dependencies:

-The Art Gallery web application does not rely on any external libraries or frameworks. It is built using plain HTML, CSS, and JavaScript, making it lightweight and easily deployable.






