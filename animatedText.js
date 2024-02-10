const helloText = "Hello!";
const nameText = "I'm Fabs";
const professions = ["Electronics Engineer", "Electronics Technician", "Software Developer"]; // Array of professions
let professionIndex = 0; // Initialize index to access professions array

let i = 0;
let j = 0;
let k = 0;

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

document.addEventListener("DOMContentLoaded", function() {
  // Delayed function to add fade-in class to the button after 5 seconds
  setTimeout(function() {
    const button = document.getElementById("moreAboutMe");
    button.style.opacity = "1";
    button.style.visibility = "visible";
  }, 4000);
});



setTimeout(typeHello, 1000);
setTimeout(typeName, 1600);
setTimeout(typeProfession, 2700);


document.addEventListener("DOMContentLoaded", function() {
  // Kumukuha ng mga elemento ng button at ng target collapsible na navbar
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarNav = document.querySelector('#navbarNav');

  // Kumukuha ng mga link sa navbar
  const navbarLinks = document.querySelectorAll('.nav-link');

  // Magdagdag ng event listener sa mga link sa navbar
  navbarLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      // Kapag ang link ay kinlik, isara ang navbar
      navbarNav.classList.remove('show');
      navbarToggler.setAttribute('aria-expanded', 'false');
    });
  });

  // Magdagdag ng event listener sa buong dokumento upang pakinggan ang click sa anumang bahagi maliban sa navbar na nabuksan
  document.addEventListener('click', function(event) {
    // Tignan kung ang target ng click ay hindi nasa loob ng navbar na nabuksan o ng mga link sa navbar
    const isClickInsideNavbar = navbarNav.contains(event.target);
    const isClickInsideNavbarToggler = navbarToggler.contains(event.target);
    const isClickInsideNavbarLink = Array.from(navbarLinks).some(link => link.contains(event.target));
    if (!isClickInsideNavbar && !isClickInsideNavbarToggler && !isClickInsideNavbarLink) {
      // Kung hindi nasa loob ng navbar na nabuksan o ng mga link sa navbar ang click, isara ang navbar
      navbarNav.classList.remove('show');
      navbarToggler.setAttribute('aria-expanded', 'false');
    }
  });
});


