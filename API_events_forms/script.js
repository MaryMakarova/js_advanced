const images = [
    'https://picsum.photos/id/1015/600/400',
    'https://picsum.photos/id/1016/600/400',
    'https://picsum.photos/id/1018/600/400',
    'https://picsum.photos/id/1020/600/400'
  ];
  
  let currentIndex = 0;
  
  const imageContainer = document.getElementById('imageContainer');
  const dotsContainer = document.getElementById('dotsContainer');
  
  function renderImage() {
    imageContainer.innerHTML = `<img src="${images[currentIndex]}" alt="Slide ${currentIndex + 1}">`;
    updateDots();
  }
  
  function updateDots() {
    dotsContainer.innerHTML = '';
    images.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === currentIndex) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentIndex = index;
        renderImage();
      });
      dotsContainer.appendChild(dot);
    });
  }
  
  document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    renderImage();
  });
  
  document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    renderImage();
  });
  
  renderImage();
  