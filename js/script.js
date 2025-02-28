// Mobil Menü Geçişi
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
      menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
      });
    }
    
    // Bağlantılar için yumuşak kaydırma
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Sabit başlık için ayarlama
            behavior: 'smooth'
          });
          
          // Mobil menü açıksa kapat
          if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
          }
        }
      });
    });
    
    // Kaydırma pozisyonuna göre nav bağlantılarına aktif sınıfı ekle
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
    
    // Form gönderimi (demo için varsayılanı engelle)
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Talebiniz için teşekkürler! Kısa süre içinde ücretsiz bir fiyat teklifiyle sizinle iletişime geçeceğiz.');
        this.reset();
      });
    }
    
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Bültenimize abone olduğunuz için teşekkürler! Temizlik ipuçları ve özel teklifler alacaksınız.');
        this.reset();
      });
    }
    
    // Hizmet butonları
    const bookButtons = document.querySelectorAll('.primary-button, .cta-primary');
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
  
  // Duyarlı navigasyon stilleri ekle
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