const modal   = document.createElement('div');
modal.id      = 'modal';
document.body.appendChild(modal);

const images = document.querySelectorAll('.gallery .img, .gallery img');
images.forEach(img => {
  img.addEventListener('click', () => {
    modal.classList.add('active');
    const bigImg = document.createElement('img');
    bigImg.src   = img.src;
    while (modal.firstChild) modal.removeChild(modal.firstChild);
    modal.appendChild(bigImg);
  });
});
modal.addEventListener('click', () => modal.classList.remove('active'));