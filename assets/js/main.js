(() => {
  const overlay = document.querySelector('#waitlist-dialog');
  const form = document.querySelector('#waitlist-form');
  const status = document.querySelector('#form-status');
  let lastFocusedElement = null;

  const openModal = (trigger) => {
    if (!overlay) return;

    lastFocusedElement = trigger instanceof HTMLElement ? trigger : document.activeElement;
    overlay.hidden = false;
    overlay.removeAttribute('hidden');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    requestAnimationFrame(() => {
      const firstField = overlay.querySelector('input[name="name"]');
      firstField?.focus({ preventScroll: true });
    });
  };

  const closeModal = () => {
    if (!overlay) return;

    overlay.hidden = true;
    overlay.setAttribute('hidden', '');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');

    if (lastFocusedElement instanceof HTMLElement) {
      lastFocusedElement.focus({ preventScroll: true });
    }
  };

  // Delegated handling makes every current/future CTA reliable even if
  // the DOM is changed without rebinding listeners.
  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    const opener = target.closest('[data-open-waitlist]');
    if (opener) {
      event.preventDefault();
      openModal(opener);
      return;
    }

    if (target.closest('[data-close-waitlist]')) {
      event.preventDefault();
      closeModal();
      return;
    }

    if (target === overlay) {
      closeModal();
    }
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
