const elementsToAnimate = document.querySelectorAll('.hiddens');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Apply 'visible' class or custom animation class
      entry.target.classList.add('visible');
      entry.target.classList.remove('out');
      // Optional: Add unique animations like bounce-in, rotate-in
      if (entry.target.classList.contains('bounce-in')) {
        entry.target.style.animationPlayState = 'running';
      }
    } else {
      entry.target.classList.remove('visible');
      entry.target.classList.add('out');
    }
  });
}, {
  threshold: 0.1, // Trigger when 10% of the element is visible
});

// Observe each target element
elementsToAnimate.forEach((el) => observer.observe(el));
