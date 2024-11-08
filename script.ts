// Get references to the form and the display area
const form = document.querySelector('#resume-form') as HTMLFormElement; 
const resumeDisplayElement = document.querySelector('#resume-dislpay') as HTMLDivElement; // Fix this if necessary

// Handle form submission
form.addEventListener('submit', (event: Event) => {
  event.preventDefault(); // Prevent the page reload

  // Get the values from the form 
  const name = (document.querySelector('#name') as HTMLInputElement).value;
  const email = (document.querySelector('#email') as HTMLInputElement).value;
  const phone = (document.querySelector('#phone') as HTMLInputElement).value;
  const education = (document.querySelector('#education') as HTMLTextAreaElement).value; // Change input to textarea
  const experience = (document.querySelector('#experience') as HTMLTextAreaElement).value; // Change input to textarea
  const skills = (document.querySelector('#skills') as HTMLTextAreaElement).value; // Change input to textarea
  const projects = (document.querySelector('#Projects') as HTMLTextAreaElement).value; // Change input to textarea

  // Generate the resume content dynamically
  const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>
    
    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    
    <h3>Projects</h3>
    <p>${projects}</p>
  `;

  // Display the generated resume
  if (resumeDisplayElement) {
    resumeDisplayElement.innerHTML = resumeHTML;
  } else {
    console.error('The resume display element is missing.');
  }
});
