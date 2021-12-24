export default function scrollReveal(element, options = {}) {
  if (!Boolean(element)) return;

  ScrollReveal({
    origin: 'top',
    distance: '56px',
    duration: 1700,
    delay: 200,
  })
  .reveal(element, options);
}
