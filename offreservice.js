// Fonction pour afficher la modale
document.querySelectorAll('.more-info-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      document.getElementById(`modal${index + 1}`).style.display = 'block';
    });
  });
  
  // Fonction pour fermer la modale
  document.querySelectorAll('.close-btn').forEach((closeBtn, index) => {
    closeBtn.addEventListener('click', () => {
      document.getElementById(`modal${index + 1}`).style.display = 'none';
    });
  });
  
  // Fermer la modale quand on clique à l'extérieur de la modale
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
    }
  });
  
  // Carrousel - Navigation entre les images
  let currentIndex = 0;
  
  function showCarouselImage(index) {
    const carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems.forEach(item => item.classList.remove('active'));
    carouselItems[index].classList.add('active');
  }
  
  function moveCarousel(step) {
    const carouselItems = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex + step + carouselItems.length) % carouselItems.length;
    showCarouselImage(currentIndex);
  }
  
  // Initialiser le carrousel
  showCarouselImage(currentIndex);
  