# Mapa de rutas y reparto del frontend

> **Actualización del 27 de noviembre:** el alcance vigente incorpora backend, base de datos, accesos y CRUD. Este documento conserva la explicación o planificación inicial de frontend; sus restricciones de «solo frontend» no se aplican al nuevo mínimo. Antes de tomar una tarea consultamos [el plan de backend y entrega](plan-backend-y-entrega.md).


[Volver al README](../README.md). Después de practicar nuestra primera pantalla, consultamos aquí las direcciones y el reparto. La explicación paso a paso está en la [guía teórica y práctica](guia-desde-cero.md).

Estado al 20 de noviembre: las 77 rutas P0/P1 están creadas como pantallas provisionales; cada responsable desarrolla su interfaz. Las 8 rutas P2 permanecen documentadas fuera del compromiso inicial. Un nombre de ruta propuesto no demuestra que su diseño esté terminado en Figma.

**Revisión de alcance del 20 de noviembre:** este mapa no cubre por sí solo todos los diseños. El [inventario y auditoría de Figma](auditoria-figma.md) documenta los 166 frames, sus variantes y lo que falta concretar. No usamos el número de rutas como número total de interfaces.

## Cómo leer este documento

- `/restaurantes` es una dirección que abre el navegador.
- `src/app/(publico)/restaurantes/page.tsx` es el archivo que crea esa dirección.
- `[slug]`, `[id]` y `[code]` son partes variables. Se usa un valor concreto al navegar, por ejemplo `/r/arepique`.
- Un modal, un error o una pestaña no siempre necesitan una página independiente.
- P0 es el recorrido mínimo. P1 se hace después del P0 del área. P2 queda fuera del compromiso inicial y se reevalúa el 27 de noviembre.
- Las páginas privadas serán visibles en la demo con acceso simulado. La protección real se implementa en el servidor posteriormente.

## Jehan Useche: sitio público

Referencia: [INICIO](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=653-500).

| Ruta | Archivo dentro de `src/app/` | Pantalla | Prioridad |
| --- | --- | --- | --- |
| `/` | `(publico)/page.tsx` | Inicio | P0 |
| `/restaurantes` | `(publico)/restaurantes/page.tsx` | Directorio con controles visuales de búsqueda y filtros | P0 |
| `/r/[slug]` | `(publico)/r/[slug]/page.tsx` | Ficha pública del restaurante | P0 |
| `/como-funciona` | `(publico)/como-funciona/page.tsx` | Explicación del flujo | P1 |
| `/para-restaurantes` | `(publico)/para-restaurantes/page.tsx` | Presentación para negocios | P1 |
| `/planes` | `(publico)/planes/page.tsx` | Planes informativos | P1 |
| `/demo/solicitar` | `(publico)/demo/solicitar/page.tsx` | Formulario de solicitud de demostración | P1 |
| `/nosotros` | `(publico)/nosotros/page.tsx` | Equipo y proyecto | P1 |
| `/contacto` | `(publico)/contacto/page.tsx` | Contacto visual, con navegación de ejemplo | P1 |
| `/preguntas-frecuentes` | `(publico)/preguntas-frecuentes/page.tsx` | Preguntas desplegables | P1 |
| `/legal/terminos` | `(publico)/legal/terminos/page.tsx` | Texto provisional de términos | P1 |
| `/legal/privacidad` | `(publico)/legal/privacidad/page.tsx` | Texto provisional de privacidad | P1 |
| `/legal/cookies` | `(publico)/legal/cookies/page.tsx` | Texto provisional de cookies | P1 |
| `/mapa` | `(publico)/mapa/page.tsx` | Descubrimiento geográfico real | P2 |

Más referencias: [directorio](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=312-1473), [cómo funciona](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=313-1999), [planes](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=313-2424).

### La carga del sitio público y lo que reutilizamos

Al revisar Figma el 17 de noviembre, Inicio (`653:500`) mide 1440 × 4579 y Planes (`313:2424`), 1440 × 3168. No son pantallas pequeñas. Inicio incluye presentación, pasos, beneficios, sección para restaurantes, destacados, testimonios, preguntas, llamada final y footer. Planes incluye tarjetas, comparación y preguntas.

Nuestro mapa propone **13 rutas públicas**, además del mapa geográfico que está en P2. Ese número es nuestra propuesta de rutas, no un recuento de 13 diseños diferentes confirmados en Figma. Hay varias versiones del directorio y de Planes: no creamos una ruta por cada frame repetido. Tampoco damos por diseñado un contenido solo porque le asignamos una URL, como `/nosotros`.

Vamos a aprovechar `PublicHeader`, `PublicFooter`, tarjetas de restaurante, tarjetas de plan y bloques de preguntas. Cada página conserva su composición y CSS propios. Reutilizar el encabezado reduce trabajo; no elimina la maquetación de las secciones restantes.

Useche sigue encargado del sitio público. No vamos a exigirle todas las páginas de golpe: primero una entrega pequeña del inicio, después sus secciones y el directorio/ficha, y luego las informativas acordadas. Los puntos iniciales son estimaciones que revisamos con la primera práctica y el avance del viernes 20; no demuestran que el reparto esté equilibrado. Si falta capacidad, dejamos explícito qué subtarea apoyamos o qué alcance ajustamos.

Header y footer públicos se comparten en estas páginas. La página 404 se implementa con `not-found.tsx`; no hace falta inventar `/404`. Los textos legales y cifras comerciales del Figma son material de diseño, no certificaciones ni afirmaciones ya verificadas del producto.

## Oscar Rojas: comensal

Referencias: [entrada QR](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-5333), [menú móvil](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-5417), [división](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-5879).

Para la demo usaremos la mesa `/r/arepique/mesa/AX7K2`. El código del ejemplo identifica la mesa dentro del recorrido. No estamos creando una mesa por escribir un enlace.

| Ruta | Pantalla | Prioridad |
| --- | --- | --- |
| `/r/[slug]/mesa/[code]` | Bienvenida y entrada a sesión de mesa | P0 |
| `/r/[slug]/mesa/[code]/menu` | Menú por categorías | P0 |
| `/r/[slug]/mesa/[code]/platos/[id]` | Detalle, cantidad y observaciones | P0 |
| `/r/[slug]/mesa/[code]/carrito` | Mi pedido antes de enviar | P0 |
| `/r/[slug]/mesa/[code]/pedido` | Pedido enviado y estado | P0 |
| `/r/[slug]/mesa/[code]/cuenta` | Consumo y total | P0 |
| `/r/[slug]/mesa/[code]/dividir` | División de cuenta | P0 |
| `/r/[slug]/mesa/[code]/pagar` | Selección de método, simulada | P0 |
| `/r/[slug]/mesa/[code]/confirmacion` | Resultado de pago de demostración | P0 |
| `/r/[slug]/mesa/[code]/resena` | Reseña posterior al consumo, simulada | P1 |
| `/entrar` | Inicio de sesión de cuenta del comensal | P1 |
| `/registro` | Crear cuenta de comensal | P1 |
| `/recuperar` | Solicitar recuperación | P1 |
| `/restablecer` | Formulario de nueva contraseña | P1 |
| `/comensal` | Inicio de cuenta | P1 |
| `/comensal/favoritos` | Favoritos | P1 |
| `/comensal/historial` | Historial y acceso a recibo | P1 |
| `/comensal/recibos/[id]` | Recibo visual de una visita | P1 |
| `/comensal/resenas` | Mis reseñas | P1 |
| `/comensal/ajustes` | Perfil, información y preferencias | P1 |
| `/comensal/amigos` | Amigos | P2 |
| `/comensal/notificaciones` | Centro de notificaciones | P2 |

Los archivos siguen la misma regla: `/comensal/historial` corresponde a `src/app/comensal/historial/page.tsx`. Los ajustes pueden usar pestañas antes de crear más rutas. La cuenta de comensal no será obligatoria para pedir desde la mesa.

## Samuel Correa: mesero

Referencia: [panel](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=323-61), [mesas](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=323-124).

| Ruta | Pantalla | Prioridad |
| --- | --- | --- |
| `/mesero/entrar` | Inicio de sesión del mesero | P0 |
| `/mesero` | Resumen del turno | P0 |
| `/mesero/mesas` | Mesas y sus estados de ejemplo | P0 |
| `/mesero/mesas/[id]` | Detalle de mesa y acciones | P0 |
| `/mesero/mesas/[id]/pedido` | Registrar pedido de esa mesa | P0 |
| `/mesero/pedidos` | Estado y avisos de pedidos | P0 |
| `/mesero/mesas/[id]/cuenta` | Cuenta, división y enlace a cobro | P0 |
| `/mesero/mesas/[id]/cobrar` | Registro de efectivo simulado | P0 |
| `/mesero/recuperar` | Recuperación de contraseña visual | P1 |
| `/mesero/historial` | Historial de servicio | P1 |
| `/mesero/perfil` | Perfil, foto y cambio de contraseña visual | P1 |

Abrir/cerrar mesa y confirmar salida serán diálogos dentro de la página, no una ruta por variante del Figma.

## Santiago Evanz: cocina y caja

Referencias: [tablero de cocina](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-4098), [abrir caja](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=457-218), [cuentas](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=457-338).

| Ruta | Pantalla | Prioridad |
| --- | --- | --- |
| `/cocina/login` | Inicio de sesión | P0 |
| `/cocina` | Tablero y estados de pedidos | P0 |
| `/cocina/historial` | Pedidos preparados | P1 |
| `/cocina/menu` | Consulta de platos | P1 |
| `/cocina/turno` | Contadores del turno | P1 |
| `/cocina/perfil` | Perfil | P1 |
| `/cocina/recuperar` | Recuperación visual | P1 |
| `/caja/login` | Inicio de sesión | P0 |
| `/caja/abrir` | Apertura de caja simulada | P0 |
| `/caja` | Resumen de caja | P0 |
| `/caja/cuentas` | Cuentas abiertas | P0 |
| `/caja/cuentas/[id]` | Detalle, división y registro de cobro simulado | P0 |
| `/caja/historial` | Historial del turno | P1 |
| `/caja/turno` | Turno y cierre simulado | P1 |
| `/caja/perfil` | Perfil | P1 |
| `/caja/recuperar` | Recuperación visual | P1 |

El acceso puede reutilizar un formulario común con textos y tema distintos. La simulación del tablero no debe anunciar que recibe pedidos reales de otros dispositivos.

## Santiago Diaz Palma: administrador y Superadmin

Referencias: [panel administrador](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=749-2344), [menú](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=749-3079), [inventario](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=749-3229), [Superadmin](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=745-39321).

| Ruta | Pantalla | Prioridad |
| --- | --- | --- |
| `/admin/entrar` | Inicio de sesión del administrador | P0 |
| `/admin` | Panel principal | P0 |
| `/admin/menu` | Lista, crear/editar plato y disponibilidad | P0 |
| `/admin/inventario` | Lista y formulario de ingredientes | P0 |
| `/admin/personal` | Cuentas de personal y formulario de alta | P0 |
| `/admin/reportes` | Resumen visual con datos de ejemplo | P1 |
| `/admin/perfil` | Perfil del negocio | P1 |
| `/admin/recuperar` | Recuperación visual | P1 |
| `/admin/verificar` | Código de verificación visual, no MFA real | P1 |
| `/superadmin/entrar` | Inicio de sesión de Superadmin | P0 |
| `/superadmin` | Resumen mínimo | P0 |
| `/superadmin/solicitudes` | Listado y acceso al detalle | P0 |
| `/superadmin/solicitudes/[id]` | Detalle de solicitud | P0 |
| `/superadmin/restaurantes` | Restaurantes de demostración | P1 |
| `/superadmin/restaurantes/[id]` | Ficha administrativa | P1 |
| `/superadmin/verificar` | Verificación visual | P1 |
| `/superadmin/recuperar` | Recuperación visual | P1 |
| `/superadmin/planes` | Gestión avanzada de planes | P2 |
| `/superadmin/pagos` | Operación de pagos | P2 |
| `/superadmin/resenas` | Moderación avanzada | P2 |
| `/superadmin/equipo` | Gestión del equipo de plataforma | P2 |
| `/superadmin/auditoria` | Auditoría | P2 |

Las variantes agregar ingrediente, editar plato y desactivar personal podrán representarse con diálogos o vistas de ejemplo. No crean tres páginas independientes de la misma tabla.

## Base común: Oscar

- `/demo`: índice para entrar a cada área con datos simulados y ver qué sigue pendiente.
- `src/app/layout.tsx` y estilos base con variables de Figma; cada área tiene su navegación propia.
- `src/app/not-found.tsx`: dirección inexistente.
- Componentes iniciales: botón, campo, tarjeta, mensaje, diálogo y estado vacío.
- Acuerdo de un restaurante, mesa, platos y pedido común.
- No generamos endpoints vacíos para presentar el backend como terminado.

## Cómo revisar las rutas

Voy a abrir el índice de demo y comprobar todos los P0 uno por uno. Cada responsable deja en su PR los enlaces concretos; nadie prueba literalmente una URL con `[id]`. Usamos identificadores de ejemplo para recorrer las pantallas; la gestión de identificadores reales vendrá con el backend.

En el control del 27 se deciden los P1 que caben. Los P2 pueden documentarse sin crearse como promesas de entrega.

## Privacidad de administración

`/admin/*` y `/superadmin/*` son privadas; no aparecen en navegación pública ni sitemap. Las rutas privadas y sus accesos llevarán `noindex` en la aplicación real. `/demo` será solo local o de demostración controlada, no un listado público de accesos privados.

El nombre menos evidente que pueda elegirse para Superadmin no reemplaza autenticación. Las rutas son visibles en el código, historial y peticiones. Se comprobará sesión y rol en servidor, en cada acción y consulta, con aislamiento entre restaurantes. Los prefijos definitivos de esta base son `/admin` y `/superadmin`. No estamos creando aún un acceso real.

## Alcance visual que acordamos

Esta entrega es solo frontend. Se permiten datos fijos, botones que cambian de ruta y formularios sin validación ni envío. Las acciones de agregar, editar, cobrar o aprobar pueden llevar a una pantalla de ejemplo ya preparada. No se exige lógica de negocio, cálculos, persistencia ni sincronización. Se conserva separación de componentes, datos y servicios para una conexión futura.

El comensal tiene partes sin diseñar: voy a inventariar primero lo disponible y lo faltante y preparar versiones sencillas coherentes para continuar; no se considera todo Figma completo. Los nombres de carpetas de features (`admin`, `superadmin`) no tienen que coincidir con URL; las rutas las preparo yo y muestran esas pantallas.

**Siguiente paso:** buscamos la tarea de nuestra pantalla en el [plan del equipo](plan-equipo.md) y acordamos los archivos que vamos a tocar antes de empezar.

## Archivos reales de la base

Este inventario corresponde a los archivos preparados el 20 de noviembre. La ruta se escribe sin los grupos entre paréntesis; la columna de pantalla indica dónde trabajamos. El CSS correspondiente está en styles de la misma área. Las páginas creadas no significan que hayamos terminado esos diseños.

| Dirección | Archivo de pantalla |
| --- | --- |
| `/comensal/ajustes` | `src/features/comensal/pages/AjustesPage.tsx` |
| `/comensal/favoritos` | `src/features/comensal/pages/FavoritosPage.tsx` |
| `/comensal/historial` | `src/features/comensal/pages/HistorialPage.tsx` |
| `/comensal` | `src/features/comensal/pages/InicioComensalPage.tsx` |
| `/comensal/recibos/[id]` | `src/features/comensal/pages/ReciboDetallePage.tsx` |
| `/comensal/resenas` | `src/features/comensal/pages/ResenasPage.tsx` |
| `/entrar` | `src/features/comensal/pages/EntrarPage.tsx` |
| `/r/[slug]/mesa/[code]/carrito` | `src/features/comensal/pages/CarritoMesaPage.tsx` |
| `/r/[slug]/mesa/[code]/confirmacion` | `src/features/comensal/pages/ConfirmacionPagoMesaPage.tsx` |
| `/r/[slug]/mesa/[code]/cuenta` | `src/features/comensal/pages/CuentaMesaPage.tsx` |
| `/r/[slug]/mesa/[code]/dividir` | `src/features/comensal/pages/DividirCuentaMesaPage.tsx` |
| `/r/[slug]/mesa/[code]/menu` | `src/features/comensal/pages/MenuMesaPage.tsx` |
| `/r/[slug]/mesa/[code]/pagar` | `src/features/comensal/pages/PagarMesaPage.tsx` |
| `/r/[slug]/mesa/[code]` | `src/features/comensal/pages/EntradaMesaPage.tsx` |
| `/r/[slug]/mesa/[code]/pedido` | `src/features/comensal/pages/EstadoPedidoMesaPage.tsx` |
| `/r/[slug]/mesa/[code]/platos/[id]` | `src/features/comensal/pages/PlatoDetallePage.tsx` |
| `/r/[slug]/mesa/[code]/resena` | `src/features/comensal/pages/ResenaMesaPage.tsx` |
| `/recuperar` | `src/features/comensal/pages/RecuperarPage.tsx` |
| `/registro` | `src/features/comensal/pages/RegistroPage.tsx` |
| `/restablecer` | `src/features/comensal/pages/RestablecerPage.tsx` |
| `/como-funciona` | `src/features/publico/pages/ComoFuncionaPage.tsx` |
| `/contacto` | `src/features/publico/pages/ContactoPage.tsx` |
| `/demo/solicitar` | `src/features/publico/pages/SolicitarDemoPage.tsx` |
| `/legal/cookies` | `src/features/publico/pages/LegalCookiesPage.tsx` |
| `/legal/privacidad` | `src/features/publico/pages/LegalPrivacidadPage.tsx` |
| `/legal/terminos` | `src/features/publico/pages/LegalTerminosPage.tsx` |
| `/nosotros` | `src/features/publico/pages/NosotrosPage.tsx` |
| `/` | `src/features/publico/pages/InicioPublicoPage.tsx` |
| `/para-restaurantes` | `src/features/publico/pages/ParaRestaurantesPage.tsx` |
| `/planes` | `src/features/publico/pages/PlanesPage.tsx` |
| `/preguntas-frecuentes` | `src/features/publico/pages/PreguntasFrecuentesPage.tsx` |
| `/r/[slug]` | `src/features/publico/pages/RestaurantePage.tsx` |
| `/restaurantes` | `src/features/publico/pages/RestaurantesPage.tsx` |
| `/admin/entrar` | `src/features/admin/pages/EntrarPage.tsx` |
| `/admin/inventario` | `src/features/admin/pages/InventarioPage.tsx` |
| `/admin/menu` | `src/features/admin/pages/MenuPage.tsx` |
| `/admin` | `src/features/admin/pages/InicioAdminPage.tsx` |
| `/admin/perfil` | `src/features/admin/pages/PerfilPage.tsx` |
| `/admin/personal` | `src/features/admin/pages/PersonalPage.tsx` |
| `/admin/recuperar` | `src/features/admin/pages/RecuperarPage.tsx` |
| `/admin/reportes` | `src/features/admin/pages/ReportesPage.tsx` |
| `/admin/verificar` | `src/features/admin/pages/VerificarPage.tsx` |
| `/caja/abrir` | `src/features/caja/pages/AbrirCajaPage.tsx` |
| `/caja/cuentas/[id]` | `src/features/caja/pages/CuentaDetallePage.tsx` |
| `/caja/cuentas` | `src/features/caja/pages/CuentasPage.tsx` |
| `/caja/entrar` | `src/features/caja/pages/EntrarPage.tsx` |
| `/caja/historial` | `src/features/caja/pages/HistorialPage.tsx` |
| `/caja` | `src/features/caja/pages/InicioCajaPage.tsx` |
| `/caja/perfil` | `src/features/caja/pages/PerfilPage.tsx` |
| `/caja/recuperar` | `src/features/caja/pages/RecuperarPage.tsx` |
| `/caja/turno` | `src/features/caja/pages/TurnoPage.tsx` |
| `/cocina/login` | `src/features/cocina/pages/EntrarPage.tsx` |
| `/cocina/historial` | `src/features/cocina/pages/HistorialPage.tsx` |
| `/cocina/menu` | `src/features/cocina/pages/MenuPage.tsx` |
| `/cocina` | `src/features/cocina/pages/InicioCocinaPage.tsx` |
| `/cocina/perfil` | `src/features/cocina/pages/PerfilPage.tsx` |
| `/cocina/recuperar` | `src/features/cocina/pages/RecuperarPage.tsx` |
| `/cocina/turno` | `src/features/cocina/pages/TurnoPage.tsx` |
| `/mesero/entrar` | `src/features/mesero/pages/EntrarPage.tsx` |
| `/mesero/historial` | `src/features/mesero/pages/HistorialPage.tsx` |
| `/mesero/mesas/[id]/cobrar` | `src/features/mesero/pages/CobrarMesaPage.tsx` |
| `/mesero/mesas/[id]/cuenta` | `src/features/mesero/pages/CuentaMesaPage.tsx` |
| `/mesero/mesas/[id]` | `src/features/mesero/pages/MesaDetallePage.tsx` |
| `/mesero/mesas/[id]/pedido` | `src/features/mesero/pages/PedidoMesaPage.tsx` |
| `/mesero/mesas` | `src/features/mesero/pages/MesasPage.tsx` |
| `/mesero` | `src/features/mesero/pages/MeseroInicioPage.tsx` |
| `/mesero/pedidos` | `src/features/mesero/pages/PedidosPage.tsx` |
| `/mesero/perfil` | `src/features/mesero/pages/PerfilPage.tsx` |
| `/mesero/recuperar` | `src/features/mesero/pages/RecuperarPage.tsx` |
| `/superadmin/entrar` | `src/features/superadmin/pages/EntrarPage.tsx` |
| `/superadmin` | `src/features/superadmin/pages/InicioSuperadminPage.tsx` |
| `/superadmin/recuperar` | `src/features/superadmin/pages/RecuperarPage.tsx` |
| `/superadmin/restaurantes/[id]` | `src/features/superadmin/pages/RestauranteDetallePage.tsx` |
| `/superadmin/restaurantes` | `src/features/superadmin/pages/RestaurantesPage.tsx` |
| `/superadmin/solicitudes/[id]` | `src/features/superadmin/pages/SolicitudDetallePage.tsx` |
| `/superadmin/solicitudes` | `src/features/superadmin/pages/SolicitudesPage.tsx` |
| `/superadmin/verificar` | `src/features/superadmin/pages/VerificarPage.tsx` |

El índice `/demo` solo se abre con `pnpm dev`; no forma parte del menú del producto.
