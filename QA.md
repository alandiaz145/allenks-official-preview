# Verificación — diseño aprobado

- Anchos medidos con viewport real: 360, 390, 430, 768, 1440 y 1920. Sin scroll horizontal en los seis. El rectángulo interno del bitmap SVG excede su viewBox pero queda recortado y no participa del scroll.
- Revisión visual de portada y secciones en desktop y móvil; comprobación adicional en Microsoft Edge.
- Menú móvil abre/cierra y se cierra al navegar. Dubstep Academia despliega recursos reales. Historia ampliable con control nativo details.
- SoundCloud RIDDIM RIOT: iframe oficial cargado; al pulsar Play el proveedor cambió a Pause, confirmando inicio de reproducción. Se detuvo retirando el iframe.
- YouTube FL Studio: iframe oficial mostró el video Euronymous Walkthrough #1 con controles reales, sin autoplay. Set xRdMRdaIlZQ verificado con los controles reales del reproductor estándar de YouTube; se corrigió el fallo observado con youtube-nocookie. BUST IT utiliza su ID público verificado.
- No reproducción automática ni iframes antes de la interacción. Fuentes musicales originales, sin música privada.
- Tres pruebas automáticas aprobadas: navegación/activos/SEO, integridad de fuentes públicas y exclusión de datos ilustrativos, fechas futuras confirmadas y escape del contenido.
- Build estático y sintaxis de JavaScript aprobados. No se necesitan dependencias para compilar.

Límites: no se probaron compras ni se enviaron mensajes; los enlaces sociales/contacto provienen de datos del usuario o fuentes públicas originales. Los proveedores pueden aplicar restricciones regionales o requerir otro toque en móviles. No se prometen cursos o descargas que no existan.
