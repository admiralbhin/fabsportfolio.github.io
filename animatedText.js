const helloText = "Hello!";
const nameText = "I'm Alvin Jay";
const professions = ["Electronics Engineer", "Electronics Technician", "Software Developer"]; // Array of professions
let professionIndex = 0; // Initialize index to access professions array
const descriptionText = "Eager software engineer seeking roles to enhance skills and make a meaningful impact. Demonstrated proficiency in crafting software to meet client requirements. Committed to ongoing learning, staying abreast of new technologies to deliver inventive solutions.";


let i = 0;
let j = 0;
let k = 0;
let l = 0;

function typeHello() {
  if (i < helloText.length) {
    document.getElementById("hello").textContent += helloText.charAt(i);
    i++;
    setTimeout(typeHello, 50); // Adjusted delay to 50 milliseconds
  }
}

function typeName() {
  if (j < nameText.length) {
    document.getElementById("name").textContent += nameText.charAt(j);
    j++;
    setTimeout(typeName, 100); // Adjusted delay to 100 milliseconds
  }
}

function typeProfession() {
  const currentProfession = professions[professionIndex]; // Get current profession
  if (k < currentProfession.length) {
    document.getElementById("profession").textContent += currentProfession.charAt(k);
    k++;
    setTimeout(typeProfession, 50); // Adjusted delay to 50 milliseconds
  } else {
    // If the profession text is fully typed, wait for 1500 milliseconds and then switch to the next profession
    setTimeout(function() {
      professionIndex = (professionIndex + 1) % professions.length; // Move to the next profession cyclically
      document.getElementById("profession").textContent = ""; // Clear the existing text
      k = 0; // Reset the index
      typeProfession(); // Start typing the new profession
    }, 1500);
  }
}

function typeDescription() {
  const descriptionElement = document.getElementById("description");
  if (l < descriptionText.length) {
    descriptionElement.textContent += descriptionText.charAt(l);
    l++;
    setTimeout(typeDescription, 20); // Adjusted delay to 50 milliseconds
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // Delayed function to add fade-in class to the button after 5 seconds
  setTimeout(function() {
    const button = document.getElementById("moreAboutMe");
    button.style.opacity = "1";
    button.style.visibility = "visible";
  }, 9800);
});



setTimeout(typeHello, 1000);
setTimeout(typeName, 1600);
setTimeout(typeProfession, 3100);
setTimeout(typeDescription, 4200);



document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll(".nav-link");
  const moreAboutMeButton = document.getElementById("moreAboutMe");
  const contactSection = document.getElementById("contact");

  // Function to remove "active" class from all navigation items
  function removeActiveClass() {
    navLinks.forEach(function(link) {
      link.classList.remove("active");
    });
  }

  // Function to handle click event on navigation items
  navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      removeActiveClass(); // Remove "active" class from all navigation items
      link.classList.add("active"); // Add "active" class to the clicked navigation item
    });
  });

  moreAboutMeButton.addEventListener("click", function() {
    // Scroll to the contact section smoothly
    contactSection.scrollIntoView({ behavior: 'smooth' });
  });
});

