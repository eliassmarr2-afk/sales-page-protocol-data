# Protocol Data — Sales Page

Landing comercial de acceso anticipado de Protocol Data.

## Alcance actual

- Sitio estático.
- Lista de espera visual con formulario local.
- El formulario todavía no tiene backend ni persistencia.
- Sin Supabase, autenticación ni integraciones operativas desde esta landing.
- La activación de cada negocio continúa siendo acompañada/manual en esta etapa.

## Autoridad visual

La landing adopta el lenguaje visual de **Protocol Creative Insights**.

Tokens de referencia extraídos del frontend canónico de Creative Insights:

- Tipografía: Roboto.
- Iconografía: Material Symbols Rounded.
- Fondo: `#131314`.
- Superficie: `#1f1f1f`.
- Superficie elevada/hover: `#28292a` / `#303134`.
- Borde: `#3c4043`.
- Texto principal: `#e8eaed`.
- Texto secundario: `#bdc1c6`.
- Texto tenue: `#9aa0a6`.
- Azul principal: `#8ab4f8`.
- Azul de acción: `#0b57d0`.
- CTA principal claro: `#a8c7fa` con texto `#062e6f`.
- Verde de estado: `#81c995`.
- Cards principales: radios de 24–28 px.
- Inputs: radio de 12 px y borde `#5f6368`.
- Pills: radio completo / 18–22 px.
- Sin sombras decorativas en las superficies principales.

## Estructura de la landing

1. Header comercial.
2. Hero principal con promesa, visual de Workspace y oferta de 3 meses gratis.
3. Formulario de lista de espera.
4. Capacidades orientadas a delegación:
   - Logística.
   - Conversaciones / Soporte.
   - Creative Insights.
   - Segmentación post-compra.
   - Rendimiento web.
5. CTA final de acceso anticipado.

## Formulario

Campos:

- nombre;
- nombre del negocio;
- capacidad de colaboradores;
- dudas/consultas opcionales.

En esta versión, el submit se resuelve únicamente en frontend y muestra:

`Un colaborador se comunicará contigo.`

No se persiste información hasta que se conecte un backend específico para la lista de espera.
