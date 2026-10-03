(() => {
  const form = document.querySelector('#waitlist-form');
  const status = document.querySelector('#form-status');

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
