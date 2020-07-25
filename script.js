const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

// UNSPLASH API
const count = 10;
const apiKey = "6-x-rUB-zltiQWI4hxoD8PsYqQlpRrFUdKd9FS4KhfI";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Create elements for links & photos and add to DOM
function displayPhotos() {
  // Run function for each object in photosArray
  photosArray.forEach((photo) => {
    // Create anchor element to link to Unsplash
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");
    // Create img tag for photo
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("alt", photo.alt_description);
    // Put img tag inside anchor tag, then both inside imageContainer element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// GET PHOTOS FROM UNSPLASH API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // Catch error here
  }
}

// On load
getPhotos();
