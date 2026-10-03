(() => {
  const dialog = document.querySelector('#waitlist-dialog');
  const openButtons = Array.from(document.querySelectorAll('[data-open-waitlist]'));
  const closeButton = document.querySelector('[data-close-waitlist]');
  const form = document.querySelector('#waitlist-form');
  const status = document.querySelector('#form-status');

  const openDialog = () => {
    if (!dialog) return;

    if (typeof dialog.showModal === 'function') {
      if (!dialog.open) dialog.showModal();
    } else {
      dialog.setAttribute('open', '');
    }

    window.requestAnimationFrame(() => {
      dialog.querySelector('input, select, textarea, button')?.focus({ preventScroll: true });
    });
  };

  const closeDialog = () => {
    if (!dialog) return;

    if (typeof dialog.close === 'function' && dialog.open) {
      dialog.close();
    } else {
      dialog.removeAttribute('open');
    }
  };

  openButtons.forEach((button) => {
    button.addEventListener('click', openDialog);
  });

  closeButton?.addEventListener('click', closeDialog);

  dialog?.addEventListener('click', (event) => {
    if (event.target === dialog) closeDialog();
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
