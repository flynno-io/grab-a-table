// js/app.js

// set up functions for a HTML/JS Single Page Application
document.addEventListener("DOMContentLoaded", () => {
	// Caches the container where pages will be swapped
	const pageContainer = document.getElementById("page-container")
    
    // Keep track of the tab with the 'active' class for updating the UI on click
    let currentActiveTab = document.querySelector(".active")

	// Function to load a specific page
	function loadPage(page) {
		pageContainer.innerHTML = "" // Clear the current page
		const pageElement = document.createElement(page) // Create the new page element
		pageContainer.appendChild(pageElement) // Append the new page to the container
	}

    // FIXME: Bootstrap issue with add/removing 'active' class
    // Update which nav link is active
	function addActiveClass(target) {
		target.classList.add("active")
        currentActiveTab.classList.remove("active")
        currentActiveTab = target
	}

    // FIXME: take control of the refresh and hard refresh
    function updateURL(path, id=null) {
        const getBaseURL = () => {
            const protocol = window.location.protocol
            const hostname = window.location.hostname
            const port = window.location.port ? `:${window.location.port}` : ""
            return `${protocol}//${hostname}${port}`
        }
        const baseURL = getBaseURL()
        window.history.pushState({},'', `${baseURL}/${path}`)
    }
    updateURL('home')

	// Event listeners for navigation buttons
	document.getElementById("nav-home").addEventListener("click", (e) => {
        e.preventDefault()
		addActiveClass(e.target)
		loadPage("home-page")
        updateURL("home")
	})
	document.getElementById("nav-reserve").addEventListener("click", (e) => {
        e.preventDefault()
		addActiveClass(e.target)
		loadPage("reserve-page")
        updateURL("reserve")
	})
	document.getElementById("nav-login").addEventListener("click", (e) => {
        e.preventDefault()
		addActiveClass(e.target)
		loadPage("login-page")
        updateURL("login")
	})
	document.getElementById("nav-signup").addEventListener("click", (e) => {
        e.preventDefault()
		addActiveClass(e.target)
		loadPage("signup-page")
        updateURL("signup")
	})

	// TODO: identify how to load the Confirm page after clicking 'submit' on reserve form

	// Load the default page (Home) on initial load
	loadPage("home-page")
})

document.addEventListener("beforeunload", (event) => {

});

