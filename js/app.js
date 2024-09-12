// js/app.js

// Caches the container where pages will be swapped
const pageContainer = document.getElementById("page-container")

// Cache the tabs to update appearance when selected
const homeTab = document.getElementById("nav-home")
const reserveTab = document.getElementById("nav-reserve")
const loginTab = document.getElementById("nav-login")
const signupTab = document.getElementById("nav-signup")

// Keep track of the tab with the 'active' class for updating the UI on click
let currentActiveTab = document.querySelector(".active")

function navigateToHash(hash) {
	switch (hash) {
        case "#/login":
			loadPage('login')
			break
        case "#/signup":
			loadPage('signup')
			break
		case "#/reserve":
			loadPage('reserve')
			break
        case "#/confirmation":
            loadPage('confirmation')
            break
		case "#/home":
			loadPage('home')
			break
		// Add other routes here
		default:
			loadPage('404') // Handle unknown routes
	}
}

// Function to load a specific page
function loadPage(page, id=null) {
    switch (page) {
        case 'reserve':
            addActiveClass(reserveTab)
            appendPageToContainer("reserve-page")
            updateURL("reserve")
            updateBrowserHistory("reserve")
            break
        case 'login':
            addActiveClass(loginTab)
            appendPageToContainer("login-page")
            updateURL("login", id)
            updateBrowserHistory("login")
            break
        case 'signup':
            addActiveClass(signupTab)
            appendPageToContainer("signup-page")
            updateURL("signup")
            updateBrowserHistory("signup")
            break
        case 'confirmation':
            addActiveClass("reserve")
            appendPageToContainer("confirmation-page")
            updateURL("confirmation")
            updateBrowserHistory("confirmation")
            break
        case 'home':
            addActiveClass(homeTab)
            appendPageToContainer("home-page")
            updateURL("home")
            updateBrowserHistory("home")
            break
        default: // catch all hashes that don't exist and #/404
            addActiveClass()
            appendPageToContainer("notfound-page")
            updateURL("404")
            break
    }
}

// Add the page to the DOM (index.html)
function appendPageToContainer(page) {
    pageContainer.innerHTML = "" // Clear the current page
	const pageElement = document.createElement(page) // Create the new page element
	pageContainer.appendChild(pageElement) // Append the new page to the container
}

// Update which nav link is active
function addActiveClass(target=null) {
    // Do nothing when the active tab is selected
    if (currentActiveTab === target) { return }

    // Removes the active tab when a page is not found (404)
    if (!target) { 
        currentActiveTab.classList.remove("active")
        return
    }
    target.classList.add("active")
    currentActiveTab.classList.remove("active")
    currentActiveTab = target
}

function updateURL(path, id = null) {
	const getBaseURL = () => {
		const protocol = window.location.protocol
		const hostname = window.location.hostname
		const port = window.location.port ? `:${window.location.port}` : ""
		return `${protocol}//${hostname}${port}`
	}
	const baseURL = getBaseURL()
	window.history.pushState({}, "", `${baseURL}/#/${path}`)
}

function capitalize(word) {
    return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
}

// Enables the normal 'back' button functionality
function updateBrowserHistory(page) {
    window.history.pushState({page: page}, capitalize(page), `#/${page}`);
}

window.addEventListener("load", () => {
	const hash = window.location.hash // Get the current URL hash
	if (hash) {
		// Process the hash (e.g., navigate to the correct path)
		navigateToHash(hash)
	} else {
		// Default to 'Home' or fallback route if there's no hash
        currentActiveTab = homeTab
		navigateToHash("#/home")
	}
})

window.addEventListener("hashchange", () => {
	const hash = window.location.hash // Get the current URL hash
    console.log(hash)
	if (hash) {
		// Process the hash (e.g., navigate to the correct path)
		navigateToHash(hash)
	} else {
		// Default to a home or fallback route if there's no hash
        addActiveClass(homeTab) // set the current tab to the 'Home' tab
		navigateToHash("#/home")
	}
})

// set up functions for a HTML/JS Single Page Application
document.addEventListener("DOMContentLoaded", () => {
	// Event listeners for navigation buttons
	homeTab.addEventListener("click", (e) => {
		e.preventDefault()
		addActiveClass(e.target)
		appendPageToContainer("home-page")
		updateURL("home")
        updateBrowserHistory("home")
	})
	reserveTab.addEventListener("click", (e) => {
		e.preventDefault()
		addActiveClass(e.target)
		appendPageToContainer("reserve-page")
		updateURL("reserve")
        updateBrowserHistory("reserve")
	})
	loginTab.addEventListener("click", (e) => {
		e.preventDefault()
		addActiveClass(e.target)
		appendPageToContainer("login-page")
		updateURL("login")
        updateBrowserHistory("login")
	})
	signupTab.addEventListener("click", (e) => {
		e.preventDefault()
		addActiveClass(e.target)
		appendPageToContainer("signup-page")
		updateURL("signup")
        updateBrowserHistory("signup")
	})

	// TODO: identify how to load the Confirm page after clicking 'submit' on reserve form

})
