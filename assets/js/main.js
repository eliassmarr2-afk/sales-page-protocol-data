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
      source.classList.toggle('is-active', sourceIndex === index);
    });

    contextItems.forEach((item, itemIndex) => {
      item.classList.toggle('is-active', itemIndex === index);
    });

    if (livePill) {
      livePill.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) node.remove();
      });
      livePill.append(` ${labels[index]}`);
    }
  };

  setActive(0);

  if (reduceMotion) return;

  let activeIndex = 0;
  window.setInterval(() => {
    activeIndex = (activeIndex + 1) % sources.length;
    setActive(activeIndex);
  }, 1800);
})();
