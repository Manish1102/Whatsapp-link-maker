// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the form and result container elements
    const form = document.getElementById('linkForm');
    const resultContainer = document.getElementById('resultContainer');
  
    // Add event listener to the form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Get the input value entered by the user
      const inputValue = document.getElementById('inputValue').value;
  
      // Construct the link URL
      const linkURL = ` https://wa.me/${encodeURIComponent(inputValue)}`;
  
      // Display the link in the result container
      resultContainer.innerHTML = `<a href="${linkURL}" target="_blank">${linkURL}</a>`;
      resultContainer.style.display = 'block';
    });
  });
  