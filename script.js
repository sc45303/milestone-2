// Get references to the form and the display area
var form = document.querySelector('#resume-form');
var resumeDisplayElement = document.querySelector('#resume-dislpay'); // Fix this if necessary
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the page reload
    // Get the values from the form 
    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var phone = document.querySelector('#phone').value;
    var education = document.querySelector('#education').value; // Change input to textarea
    var experience = document.querySelector('#experience').value; // Change input to textarea
    var skills = document.querySelector('#skills').value; // Change input to textarea
    var projects = document.querySelector('#Projects').value; // Change input to textarea
    // Generate the resume content dynamically
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b> ".concat(name, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>Phone:</b> ").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    \n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    \n    <h3>Projects</h3>\n    <p>").concat(projects, "</p>\n  ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
