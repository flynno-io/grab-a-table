// js/app.js

document.addEventListener('DOMContentLoaded', () => {
  // Cache the container where pages will be swapped
  const pageContainer = document.getElementById('page-container');

  // Function to load a specific page
  function loadPage(page) {
    pageContainer.innerHTML = ''; // Clear the current page
    const pageElement = document.createElement(page); // Create the new page element
    pageContainer.appendChild(pageElement); // Append the new page to the container
  }

  // Event listeners for navigation buttons
  document.getElementById('nav-home').addEventListener('click', () => loadPage('home-page'));
  document.getElementById('nav-login').addEventListener('click', () => loadPage('login-page'));
  document.getElementById('nav-reserve').addEventListener('click', () => loadPage('reserve-page'));

  // TODO: identify how to load the Confirm page after clicking 'submit' on reserve form

  // Load the default page (Home) on initial load
  loadPage('home-page');
});