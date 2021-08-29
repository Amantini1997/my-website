function handleIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, {threshold: .5});
const frames = document.querySelectorAll('.fadein');

frames.forEach(frame => observer.observe(frame));