document.querySelectorAll('.carousel-container').forEach(container => {
  container.addEventListener('wheel', (e) => {
    e.preventDefault();
    container.scrollLeft += e.deltaY;
  });
});
