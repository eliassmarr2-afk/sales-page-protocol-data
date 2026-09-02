(() => {
  const map = document.querySelector('#context-map');
  if (!map) return;

  const sources = Array.from(map.querySelectorAll('.source-card'));
  const contextItems = Array.from(map.querySelectorAll('.context-list li'));
  const livePill = document.querySelector('.live-pill');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const labels = [
    'Publicidad conectada',
    'Sitio conectado',
    'Cliente conectado',
    'Operación conectada'
  ];

  const setActive = (index) => {
    sources.forEach((source, sourceIndex) => {
      const isActive = sourceIndex === index;
      source.classList.toggle('is-active', isActive);
      source.style.opacity = isActive ? '1' : '0.7';
    });

    contextItems.forEach((item, itemIndex) => {
      const isActive = itemIndex === index;
      item.classList.toggle('is-active', isActive);
      item.style.opacity = isActive ? '1' : '0.56';
    });

    if (livePill) {
      livePill.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) node.remove();
      });
      livePill.append(` ${labels[index]}`);
    }
  };

  setActive(0);

  if (reduceMotion) {
    sources.forEach((source) => { source.style.opacity = '1'; });
    contextItems.forEach((item) => { item.style.opacity = '1'; });
    return;
  }

  let activeIndex = 0;
  window.setInterval(() => {
    activeIndex = (activeIndex + 1) % sources.length;
    setActive(activeIndex);
  }, 1800);
})();
