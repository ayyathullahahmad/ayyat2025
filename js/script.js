// Add this to your script.js file
function handleResponsiveImages() {
    const dashboard = document.querySelector('.dashboard');
    const dashboardMobile = document.querySelector('.dashboard-mobile');
    const mediaQuery = window.matchMedia('(max-width: 900px)');

    function updateDisplay(e) {
        if (e.matches) {
            // Mobile view
            dashboard.style.display = 'none';
            dashboardMobile.style.display = 'block';
        } else {
            // Desktop view
            dashboard.style.display = 'block';
            dashboardMobile.style.display = 'none';
        }
    }

    // Initial check
    updateDisplay(mediaQuery);
    
    // Add listener for viewport changes
    mediaQuery.addListener(updateDisplay);
}

// Add this to your existing DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function() {
    handleResponsiveImages();
    // ... rest of your existing code
});
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".logo",{
        y: "-50%",
        scale: 0.35,
        ease: "none",
        scrollTrigger:{
            trigger: ".dashboard",
            start: "top top",
            end: "100vh  top",
            scrub: 1,
        }
    })

    gsap.to(".text-details", {
        opacity: 0,
        scale: 0.0,
        y: "-100vh",
        ease: "power.in",
        scrollTrigger: {
            trigger: ".section1",
            start: "top top", 
            end: "50% top",
            scrub: 1,
        }
    })

    gsap.to(".dashboard",{
        y: "-30%",
        ease: "none",
        scrollTrigger:{
            trigger: ".dashboard",
            start: "top top",
            end: "200vh  top",
            scrub: 1,
        }
    })

    gsap.to("#dashboard-img",{
        filter: "blur(10px)",
        ease: "none",
        scrollTrigger:{
            trigger: ".dashboard",
            start: "400vh top",
            end: "1000vh  top",
            scrub: 0.5,
        }
    })

    gsap.to("#window img",{
        opacity: 0,
        ease: "none",
        scrollTrigger:{
            trigger: ".dashboard",
            start: "400vh top",
            end: "450vh  top",
            scrub: 0.5,
        }
    })

    gsap.to(".dashboard",{
        transformOrigin: "center 90.6%",
        scale: 90,
        x: "8%",
        ease: "none",
        scrollTrigger:{
            trigger: ".dashboard",
            start: "600vh top",
            end: "900vh  top",
            scrub: 1,
        }
    })

    gsap.to(".dashboard",{
        opacity: 0,
        display: "none",
        ease: "none",
        scrollTrigger:{
            trigger: ".dashboard",
            start: "800vh top",
            end: "825vh  top",
            scrub: true,
        }
    })

    // //mobile
    gsap.to(".dashboard-mobile",{
        y: "-5%",
        ease: "none",
        scrollTrigger:{
            trigger: ".dashboard-mobile",
            start: "top top",
            end: "100vh  top",
            scrub: 1,
        }
    })

    gsap.to("#dashboard-img-mobile",{
        filter: "blur(8px)",
        ease: "none",
        scrollTrigger:{
            trigger: ".dashboard-mobile",
            start: "80vh top",
            end: "300vh  top",
            scrub: 0.5,
        }
    })

    gsap.to("#window img",{
        opacity: 0,
        ease: "none",
        scrollTrigger:{
            trigger: ".dashboard-mobile",
            start: "200vh top",
            end: "250vh  top",
            scrub: 0.5,
        }
    })

    gsap.to(".dashboard-mobile",{
        transformOrigin: "center 87.6%",
        scale: 24,
        x: "0%",
        ease: "none",
        scrollTrigger:{
            trigger: ".dashboard-mobile",
            start: "200vh top",
            end: "250vh  top",
            scrub: 1,
        }
    })

    gsap.to(".dashboard-mobile",{
        opacity: 0,
        display: "none",
        ease: "none",
        scrollTrigger:{
            trigger: ".dashboard-mobile",
            start: "200vh top",
            end: "425vh  top",
            scrub: true,
        }
    })

});

document.addEventListener("DOMContentLoaded", function() {
    // Create cursor elements
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    
    const cursorText = document.createElement('div');
    cursorText.classList.add('cursor-text');
    cursorText.textContent = 'View Project →';
    
    document.body.appendChild(cursor);
    document.body.appendChild(cursorText);
  
    // Make cursor visible after elements are created
    cursor.classList.add('visible');
    cursorText.classList.add('visible');
  
    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
      requestAnimationFrame(() => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        cursorText.style.left = (e.clientX + 20) + 'px';
        cursorText.style.top = e.clientY + 'px';
      });
    });
  
    // Add hover effects for all card-case elements
    const cardCases = document.querySelectorAll('.container.card-case');
    
    if (cardCases.length > 0) {
      cardCases.forEach(cardCase => {
        cardCase.addEventListener('mouseenter', () => {
          cursor.style.transform = 'translate(-50%, -50%) scale(2)';
          cursor.style.backgroundColor = '#000000';
          cursor.style.borderColor = '#ffffff';
          cursorText.style.opacity = '1';
        });
    
        cardCase.addEventListener('mouseleave', () => {
          cursor.style.transform = 'translate(-50%, -50%) scale(1)';
          cursor.style.backgroundColor = '#ffffff';
          cursor.style.borderColor = '#000000';
          cursorText.style.opacity = '0';
        });
      });
    } else {
      console.warn('No card case elements found');
    }
  
    // Hide cursor when leaving the window
    document.addEventListener('mouseleave', () => {
      cursor.style.display = 'none';
      cursorText.style.display = 'none';
    });
  
    // Show cursor when entering the window
    document.addEventListener('mouseenter', () => {
      cursor.style.display = 'block';
      cursorText.style.display = 'block';
    });
});


// image

let blocks = document.querySelectorAll(".block");
let duration = 1;
let stagger = duration;
let repeatDelay = 0.075 * (blocks.length - 1)

gsap.from(".block", 5, {
    scale: 0,
    top: "50%",
    left: "50%",
    transform: "translateZ(-200px)",
    stagger: {
        each: duration,
        repeat: -1,
        repeatDelay: repeatDelay,
    },
});

let previousGif = null;


// Get all elements with class "myImg"
var images = document.getElementsByClassName('myImg');

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Iterate through all images and attach the onclick event
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        captionText.innerHTML = this.alt;
    }
}

// When the user clicks on <span> (x), close the modal
modal.onclick = function() {
    img01.className += " out";
    setTimeout(function() {
       modal.style.display = "none";
       img01.className = "modal-content";
     }, 400);
}

