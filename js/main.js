// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("cookiesAccepted")) {
    setTimeout(function () {
      document.getElementById("cookiePopupp").classList.add("show");
    }, 1000);
  }
});
function acceptCookies() {
  localStorage.setItem("cookiesAccepted", "true");
  document.getElementById("cookiePopupp").classList.remove("show");
}


// 
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
      menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
      });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for fixed header
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
          }
        }
      });
    });
    
    // Add active class to nav links based on scroll position
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      
      document.querySelectorAll('section[id]').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          document.querySelector(`.nav-links a[href="#${sectionId}"]`)?.classList.add('active');
        } else {
          document.querySelector(`.nav-links a[href="#${sectionId}"]`)?.classList.remove('active');
        }
      });
    });
    
    // Form submission (prevent default for demo)
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your inquiry! We will contact you shortly with a free quote.');
        this.reset();
      });
    }
    
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter! You\'ll receive cleaning tips and special offers.');
        this.reset();
      });
    }
    
    // Service buttons
    const bookButtons = document.querySelectorAll('.primary-button, .cta-primary ,cta-button');
    bookButtons.forEach(button => {
      button.addEventListener('click', function() {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
          window.scrollTo({
            top: contactSection.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  });
  
  // Add responsive navigation styles
  document.head.insertAdjacentHTML('beforeend', `
    <style>
      @media (max-width: 768px) {
        .nav-links {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: white;
          flex-direction: column;
          padding: 1rem;
          gap: 1rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          display: none;
        }
        
        .nav-links.active {
          display: flex;
        }
        
        .nav-links a {
          padding: 0.5rem 0;
          display: block;
        }
      }
    </style>
  `);