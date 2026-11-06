// ===== Modales =====
const modalTriggers = document.querySelectorAll('[data-modal]');
const modals = document.querySelectorAll('.modal');

modalTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const id = trigger.getAttribute('data-modal');
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  });
});

modals.forEach((modal) => {
  modal.querySelectorAll('[data-close]').forEach((btn) => {
    btn.addEventListener('click', () => closeModal(modal));
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const open = document.querySelector('.modal.is-open');
    if (open) closeModal(open);
  }
});

function closeModal(modal) {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// ===== Año dinámico =====
const footer = document.querySelector('.site-footer p');
if (footer) {
  footer.textContent = `© ${new Date().getFullYear()} Alex Styles · Hecho con dedicación`;
}