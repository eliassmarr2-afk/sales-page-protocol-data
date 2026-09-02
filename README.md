# Protocol Data — Sales Page

Landing comercial informativa de Protocol Data.

## Alcance

- Página de ventas / presentación comercial.
- Sitio estático en esta etapa.
- Sin Supabase.
- Sin base de datos.
- Sin autenticación.
- Sin integraciones operativas.
- Las integraciones de Protocol Data con cada negocio son manuales; no se debe presentar el producto como self-service.

## Aislamiento

Este repositorio es independiente de todos los demás proyectos del ecosistema Protocol Data / Sazzú / Creative Insights / Zekere.

**Regla:** no modificar otros repositorios para desarrollar esta landing.

## Contrato visual

La autoridad visual del proyecto es **ZEKERE UI STYLE SYSTEM V1** (snapshot canónico entregado el 2026-09-02).

Reglas no negociables de la implementación actual:

- Google Sans Flex con pesos variables.
- Canvas blanco.
- Superficies pastel planas.
- Sin sombras decorativas en cards.
- Sin bordes decorativos de color.
- Radios grandes, principalmente 30–36 px.
- Whitespace amplio.
- Títulos con tracking negativo y peso medio.
- Iconografía SVG lineal con `currentColor`.
- CTAs tipo pill, sin sombra ni gradiente.
- Desktop-first para esta landing, manteniendo responsive mobile desde cada componente.
- Respetar `prefers-reduced-motion` para animaciones.

## Estado actual

### V0 — Hero / primer fold

Implementado:

- Header comercial.
- Propuesta de valor inicial.
- CTA de consulta visualmente preparado; canal real pendiente de definir.
- CTA hacia capacidades.
- Visualización conceptual animada de señales conectadas:
  - publicidad / UTM;
  - sitio web;
  - contexto de cliente;
  - operación / pedido.
- Diseño responsive.
- Animación progresiva con soporte de reducción de movimiento.

## Próximo movimiento

Construir y pactar la primera sección real de capacidades usando documentación funcional auditada de Protocol Data, evitando afirmar capacidades no verificadas.
