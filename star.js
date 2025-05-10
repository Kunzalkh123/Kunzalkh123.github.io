 const starsContainer = document.getElementById('stars-container');
  const starCount = 20;
  const sizeClasses = ['small', 'medium', 'large'];
  function createStar() {
    const star = document.createElement('div');
    const sizeClass = sizeClasses[Math.floor(Math.random() * sizeClasses.length)];
    star.classList.add('star', sizeClass);
    star.style.top = Math.random() * 100 + 'vh';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.animationDelay = (Math.random() * 3) + 's';
    starsContainer.appendChild(star);
  }
  for (let i = 0; i < starCount; i++) {
    createStar();
  }


