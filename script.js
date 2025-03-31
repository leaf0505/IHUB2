// CAROUSEL
document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    let slideInterval;
  
    function updateCarousel() {
      document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
      slides.forEach(slide => slide.classList.remove('active'));
      slides[currentIndex].classList.add('active');
    }
  
    function startAutoSlide() {
      slideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
      }, 5000);
    }
  
    document.querySelector('.prev').addEventListener('click', () => {
      clearInterval(slideInterval);
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
      startAutoSlide();
    });
  
    document.querySelector('.next').addEventListener('click', () => {
      clearInterval(slideInterval);
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
      startAutoSlide();
    });
  
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', () => clearInterval(slideInterval));
    carousel.addEventListener('mouseleave', startAutoSlide);
  
    startAutoSlide();
  });
  



  
  // CAROUSEL PRINCIPAL (RÉSIDENCE)
document.addEventListener('DOMContentLoaded', () => {
  let currentIndex = 0;
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;
  let slideInterval;

  function updateCarousel() {
    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentIndex].classList.add('active');
  }

  function startAutoSlide() {
    slideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    }, 5000);
  }

  document.querySelector('.prev').addEventListener('click', () => {
    clearInterval(slideInterval);
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
    startAutoSlide();
  });

  document.querySelector('.next').addEventListener('click', () => {
    clearInterval(slideInterval);
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
    startAutoSlide();
  });

  const carousel = document.querySelector('.carousel');
  carousel.addEventListener('mouseenter', () => clearInterval(slideInterval));
  carousel.addEventListener('mouseleave', startAutoSlide);

  startAutoSlide();
  
  // -------------------------------------------------------------------------
  // CAROUSEL DU MENU (3x2 plats, 5 slides)
  const menuCarousel = document.querySelector('.menu-carousel');
  if (menuCarousel) {
    const menuCarouselInner = menuCarousel.querySelector('.carousel-inner');
    const menuDots = menuCarousel.querySelectorAll('.dot');
    let currentMenuSlide = 0;
    const totalMenuSlides = menuDots.length; // 5

    function goToMenuSlide(index) {
      currentMenuSlide = index;
      // Each slide is 20% of the container => index * 20
      menuCarouselInner.style.transform = `translateX(-${currentMenuSlide * 20}%)`;
      menuDots.forEach(dot => dot.classList.remove('active'));
      menuDots[currentMenuSlide].classList.add('active');
    }

    // Click on dots to move to the corresponding slide
    menuDots.forEach(dot => {
      dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'));
        goToMenuSlide(index);
      });
    });

    // Optional: Auto-slide every 5 seconds
    // setInterval(() => {
    //   currentMenuSlide = (currentMenuSlide + 1) % totalMenuSlides;
    //   goToMenuSlide(currentMenuSlide);
    // }, 5000);
  }
});

// ---------------------------------------------------------------------------
// MODAL POUR DÉTAILS DES PLATS (reste identique)
function afficherDetails(plat) {
  const modal = document.getElementById('detailsModal');
  const titre = document.getElementById('modalTitre');
  const description = document.getElementById('modalDescription');

  if (plat === 'poulet_bbq') {
    titre.textContent = 'Poulet BBQ et Pommes de terre rôties';
    description.textContent = 'Calories: 350, Protéines: 25g, Glucides: 30g';
  } else if (plat === 'poulet_frit') {
    titre.textContent = 'Poulet frit';
    description.textContent = 'Calories: 400, Protéines: 28g, Glucides: 35g';
  } else if (plat === 'dinner_bouilli') {
    titre.textContent = 'Dinner bouilli';
    description.textContent = 'Un plat réconfortant et savoureux.';
  }
  // Ajoutez d'autres conditions pour les autres plats
  else {
    titre.textContent = `Détails pour ${plat}`;
    description.textContent = 'Informations à venir...';
  }

  modal.style.display = 'block';
}

function fermerDetails() {
  document.getElementById('detailsModal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('detailsModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};