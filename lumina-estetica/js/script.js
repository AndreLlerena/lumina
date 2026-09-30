const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const bookingForm = document.querySelector('.booking-form');
const formMessage = document.querySelector('.form-message');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
  });
});

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = new FormData(bookingForm).get('name').trim();
  formMessage.textContent = name ? `Obrigada, ${name}. Vamos falar com você em breve.` : 'Preencha seu nome para continuar.';
  if (name) bookingForm.reset();
});

const testimonials = [
  ['Eu vim cuidar da pele e saí lembrando de cuidar de mim.', 'Marina, cliente Lumina há 3 anos'],
  ['O atendimento é uma pausa que eu consigo sentir durante a semana inteira.', 'Carolina, cliente Lumina há 1 ano'],
  ['Tudo aqui parece feito para a gente respirar mais devagar.', 'Renata, cliente Lumina há 2 anos'],
];
let currentTestimonial = 0;
const quote = document.querySelector('blockquote');
const quoteAuthor = document.querySelector('.quote-copy > p');
const quoteCounter = document.querySelector('.quote-controls span');

document.querySelectorAll('.quote-controls button').forEach((button, index) => {
  button.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + (index === 0 ? -1 : 1) + testimonials.length) % testimonials.length;
    quote.textContent = `“${testimonials[currentTestimonial][0]}”`;
    quoteAuthor.textContent = `— ${testimonials[currentTestimonial][1]}`;
    quoteCounter.textContent = `0${currentTestimonial + 1} / 03`;
  });
});
