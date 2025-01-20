document.querySelector('.select').addEventListener('click', function () {
  const dropdownMenu = document.querySelector('.dropdown-menu');
  if (dropdownMenu.style.display === 'block') {
      dropdownMenu.style.display = 'none';
  } else {
      dropdownMenu.style.display = 'block';
  }
});

// Close the menu when clicking outside
document.addEventListener('click', function (event) {
  const dropdown = document.querySelector('.dropdown');
  if (!dropdown.contains(event.target)) {
      document.querySelector('.dropdown-menu').style.display = 'none';
  }
});


/*scroll down */
// Scroll-based animations
const boxes = document.querySelector(".product ");
const boxes2 = document.querySelector(".product2");
const boxes3 = document.querySelector(".product3");

window.addEventListener("scroll", scrolldown);
window.addEventListener("scroll", scrolldown2);
window.addEventListener("scroll", scrolldown3);


function scrolldown() {
    // Check if the element is visible in the viewport
    const rect = boxes.getBoundingClientRect();
    if (rect.top <= window.innerHeight) {
        boxes.classList.add("show");
    }
}
function scrolldown2() {
    // Check if the element is visible in the viewport
    const rect2 = boxes2.getBoundingClientRect();
    if (rect2.top <= window.innerHeight) {
        boxes2.classList.add("showtwo");
    }
}
function scrolldown3() {
    // Check if the element is visible in the viewport
    const rect3 = boxes3.getBoundingClientRect();
    if (rect3.top <= window.innerHeight) {
        boxes3.classList.add("showthree");
    }
}


/////////////////////////////////////////////
// button Up
/////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("move_up");
  
    // Check if button exists to avoid errors
    if (btn) {
      window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
          btn.classList.add("up"); // Add class when scroll > 300px
        } else {
          btn.classList.remove("up"); // Remove class when scroll <= 300px
        }
      });
  
      btn.addEventListener("click", function(e) {
        e.preventDefault(); // Prevent default behavior
        window.scrollTo({
          top: 0,
          behavior: "smooth" // Smooth scroll to top
        });
      });
    }
  });

  
//   Navbar show when scroll down

// When the user scrolls down 20px from the top of the document, slide down the navbar
let lastScrollY = window.scrollY; // Track the last scroll position
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    // Scrolling down, show navbar
    navbar.classList.add('visible');
  } else {
    // Scrolling up, hide navbar
    navbar.classList.remove('visible');
  }
  lastScrollY = window.scrollY; // Update the last scroll position
});


// Optional JavaScript for handling any dynamic behavior
document.getElementById('whatsapp-link').addEventListener('click', function() {
    console.log('WhatsApp button clicked');
});

