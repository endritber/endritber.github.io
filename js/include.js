function loadContent(file, elementId) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => {
      console.error('Error fetching content:', error);
    });
}

// Load the navbar and footer content
loadContent('includes/navbar.html', 'navbar');
loadContent('includes/footer.html', 'footer');