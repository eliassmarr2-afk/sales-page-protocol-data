(() => {
  const overlay = document.querySelector('#waitlist-dialog');
  const openButtons = Array.from(document.querySelectorAll('[data-open-waitlist]'));
  const closeButton = document.querySelector('[data-close-waitlist]');
  const form = document.querySelector('#waitlist-form');
  const status = document.querySelector('#form-status');
  let lastFocusedElement = null;

  const openModal = () => {
    if (!overlay) return;

    lastFocusedElement = document.activeElement;
    overlay.hidden = false;
    document.body.classList.add('modal-open');

    window.requestAnimationFrame(() => {
      overlay.querySelector('input, select, textarea, button')?.focus({ preventScroll: true });
    });
  };

  const closeModal = () => {
    if (!overlay) return;

    overlay.hidden = true;
    document.body.classList.remove('modal-open');

    if (lastFocusedElement instanceof HTMLElement) {
      lastFocusedElement.focus({ preventScroll: true });
    }
  };

  openButtons.forEach((button) => {
    button.addEventListener('click', openModal);
  });

  closeButton?.addEventListener('click', closeModal);

  overlay?.addEventListener('click', (event) => {
    if (event.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && overlay && !overlay.hidden) {
      closeModal();
    }
  });

  if (!form || !status) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      status.dataset.tone = 'error';
      status.textContent = 'Completá los campos obligatorios para continuar.';
      form.reportValidity();
      return;
    }

    const button = form.querySelector('.form-submit');

    status.dataset.tone = 'success';
    status.textContent = 'Un colaborador se comunicará contigo.';

    if (button) {
      button.innerHTML = '<span class="material-symbols-rounded" aria-hidden="true">check_circle</span> Solicitud preparada';
      button.disabled = true;
    }
  });
})();
