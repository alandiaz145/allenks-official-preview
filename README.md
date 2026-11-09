# ALLEN KS — diseño aprobado

Vista previa comprobada en Microsoft Edge: https://allenks-official-preview.pages.dev/

Repositorio independiente: https://github.com/alandiaz145/allenks-official-preview

Proyecto independiente de alandiaz145/allenks-web-v2. No contiene el historial, configuración de despliegue ni datos de Allen KS Control. La web oficial y el PR anterior permanecen intactos.

HTML, CSS y JavaScript estáticos. Sin dependencias de ejecución, servicios pagos, base de datos ni claves. `src/` es la fuente; `dist/` se genera con Node (`scripts/build.mjs`) y se entrega a un proyecto de prueba separado. El workflow solo construye y prueba; no despliega.

## Contenido

Editar `content/site.json` para actualizar lanzamientos, enlaces, video de estudio, set y shows. Inicio muestra la descarga gratuita confirmada; musica.html contiene el catálogo con filtro. Los botones principales navegan dentro del sitio. Un release necesita un `soundcloud` público o un ID de `youtube`, `title`, `artist` y archivo `artwork` bajo src/assets. No agregar tokens privados. La imagen del primer lanzamiento aparece al frente de la pila.

Los shows requieren `confirmed:true`, `date` ISO con zona horaria, `venue`, `city` y opcional `url`. El build excluye fechas vencidas/no confirmadas y el navegador retira fechas vencidas al abrir. Hoy no hay futuras fechas confirmadas cargadas. No se publica el dato no confirmado de Arkham.

La portada se edita en src/index.html y src/pages/hero.html; historia, productos, música, estudio y en vivo están separados en src/pages/. El layout común es src/layout.html. La historia ampliada usa details accesible. Dubstep Academia abre recursos de producción reales en estudio.html: no se inventó una web externa, cursos, inscripciones ni un logo oficial inexistente. Los símbolos de proyectos son iconos de navegación, no recreaciones de marcas. Otra Noche consulta WhatsApp con el número que ya estaba publicado en el repositorio anterior; no envía mensajes automáticamente.

## Activos y fuentes verificadas

La foto de portada se toma de la imagen de referencia adjunta, con autorización explícita del usuario en esta conversación. Se reutilizan sus píxeles mediante un recorte SVG del retrato, sin generar ni retocar identidad. El resto de la página es HTML real; no es una captura como fondo de toda la web. Las curvas se construyen en SVG/CSS.

- RIDDIM RIOT y Damage: títulos, autoría y portadas de SoundCloud comprobados con su oEmbed público. Las portadas locales provienen de las URLs oficiales devueltas por SoundCloud.
- BUST IT: video oficial `ki1cUmKv_5Y` comprobado previamente; su imagen es una miniatura de video, identificada como tal en el alt, no una portada discográfica inventada.
- Estudio: `TVL0ZiSOXPg`, Euronymous / Walkthrough #1 en FL Studio.
- Set: `xRdMRdaIlZQ`, ALLEN KS / DJ set en vivo #1 / Otra Noche ft. Dancing Budhas; inicia en el segundo 384 como el sitio previo.
- Foto en vivo y favicon: activos públicos originales del repositorio anterior.
- `soyallenks@gmail.com` figura en las fichas oEmbed públicas de RIDDIM RIOT y Damage. Instagram usa el enlace aportado por el usuario @allenksmusic.

Se comprobó que el host youtube-nocookie devolvía no disponible para los sets; se cambió al reproductor estándar oficial youtube.com, que cargó el set con sus controles.

Las líneas de onda de la lista son iconos decorativos estáticos, no análisis de audio. No se inventan duraciones, escuchas o lanzamientos de la maqueta. La reproducción usa controles reales de SoundCloud/YouTube sin autoplay. Los reproductores se crean al hacer clic. Un clic adicional en los controles del proveedor puede ser necesario por las restricciones móviles.

## SEO y hosting

Esta es una alternativa de revisión: noindex y robots Disallow para no competir con la web oficial. Hay title, description, favicon, Open Graph, Twitter card y sitemap. `PREVIEW_URL` permite construir canonical/sitemap/metadatos para la URL propia del proyecto de prueba; nunca cambia allenks.com.ar. Al aprobar una publicación oficial, ajustar canonical/robots como un cambio separado.

## Verificación

`node scripts/build.mjs`; `node --test tests/site.test.mjs`; `node --check src/assets/app.js`. Sin instalación. Pruebas de datos futuros, escape de contenido, navegación, recursos y ausencia de embeds privados/automáticos. Revisión visual y pruebas reales del navegador documentadas en QA.md.

## Cambio de enfoque — noviembre 2026

Conserva la composición aprobada: retrato, ALLEN KS grande, badge Dubstep/Bass, curvas y tarjetas redondeadas. Usa la paleta aportada: #0656BF, #0BD9D9, #F2E205, #F2F2F2, #0D0D0D y azules secundarios. Fondo blanco para conservar el recorte original.

Seis rutas: inicio, musica.html, productos.html, historia.html, en-vivo.html y estudio.html. Inicio prioriza descarga gratuita y productos. Productos reúne stems/proyectos según disponibilidad, dos sample packs, clase individual de 60 minutos y espacio para futuros cursos. No hay precios, checkout ni reservas ficticias; las consultas abren un borrador de correo.

Solo RIDDIM RIOT tiene descarga gratuita verificada, mediante su enlace actual Droploud. audioUrl y mp3DownloadUrl siguen vacíos: no hay MP3 locales ni almacenamiento R2 activado. El reproductor usa por ahora embeds públicos a pedido dentro de un espacio fijo. Los campos permiten incorporar reproducción y descarga nativas cuando existan archivos autorizados. La descarga externa requiere una elección explícita en un diálogo.

Trabajo aislado en design/music-products-brand; no cambia main, allenks.com.ar, DNS ni proyectos Control/Spartans. La vista se sube al proyecto de prueba separado.
