// Function to handle toggling of content sections
function toggleSection(sectionId) {
    // Hide all sections
    var sections = document.getElementsByClassName("content-section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove("section-expanded");
    }

    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add("section-expanded");

    // Hide landing content and courier image
    document.getElementById("landing-content").style.display = "none";
    document.getElementById("courier-image").style.display = "none";
}

// Function to handle sign-in functionality
function toggleSignInSection() {
    // Toggle visibility of the sign-in section
    var signInSection = document.getElementById("signin-section");
    signInSection.classList.toggle("section-expanded");
}

// Function to handle opening the modal for scheduling a pickup
function schedulePickup() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Function to show landing page section and hide other sections
function showLandingPage() {
    var sections = document.getElementsByClassName("content-section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove("section-expanded");
    }
    document.getElementById("landing-section").classList.add("section-expanded");

    // Show landing content and courier image
    document.getElementById("landing-content").style.display = "block";
    document.getElementById("courier-image").style.display = "block";
}
