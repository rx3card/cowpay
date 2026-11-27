# Nuestro plan de frontend y tareas de Jira

> **Actualización del 27 de noviembre:** el alcance vigente incorpora backend, base de datos, accesos y CRUD. Este documento conserva la explicación o planificación inicial de frontend; sus restricciones de «solo frontend» no se aplican al nuevo mínimo. Antes de tomar una tarea consultamos [el plan de backend y entrega](plan-backend-y-entrega.md).


[Volver al README](../README.md). Aquí encontramos nuestro reparto, tareas y subtareas. Para empezar desde la instalación seguimos primero el README; para aprender a programar una pantalla usamos la [guía teórica y práctica](guia-desde-cero.md).

## Qué vamos a entregar

Vamos a pasar a código las interfaces del Figma. Podemos usar datos fijos y botones que cambian de pantalla. **No vamos a exigir validaciones de formularios, cálculos, persistencia, autenticación, pagos ni backend para esta entrega.** Dejamos los componentes y los datos separados para poder conectarlos después.

Voy a completar primero el inventario y los bocetos sencillos que faltan del comensal. No vamos a tratar una pantalla sin diseñar como si ya estuviera lista en Figma.

## Fechas y seguimiento

Reprogramación del 20 de noviembre: el trabajo pendiente empieza a contar desde el 21 de noviembre de 2026. Es sábado; no exigimos trabajo de fin de semana ni apoyo mío fuera del SENA. El lunes 23 compartimos y comprobamos la base. Conservamos el cierre del 4 de diciembre y la entrega oficial del 7.

La primera entrega parcial se revisa el jueves 26. Las siguientes son el 30 de noviembre y el jueves 3 de diciembre. Integramos avances pequeños desde el principio. Cada fecha de la tabla corresponde al objetivo de esa tarea; no son cuatro entregas completas simultáneas de todo el Figma.

Seguimientos presenciales: martes 24 y 1, 15:30–16:00; viernes 27 y 4, 17:00–17:15. El registro del 20 se conserva como preparación técnica, sin inventar una reunión o asistencia. El lunes 23 revisamos arranque y bloqueos. El jueves 3 ensayamos 17:00–17:30. No cuento con los fines de semana para trabajar.

## Estado real de Jira

En **CowPay, proyecto KAN**, ya tenemos **24 tareas y 69 subtareas**. Los cinco ya aparecen como asignables y el trabajo está asignado según el reparto. El registro de claves está también en `backlog-jira.json`.

El [tablero existente](https://rojasricosworkspace-65f8ece0.atlassian.net/jira/software/projects/KAN/boards/1) tiene To Do, In Progress, In Review y Done. Ya activamos Backlog, Sprints y estimación por puntos. El sprint **CowPay; Frontend; 21 nov – 4 dic 2026** está activo: inicio reprogramado el 21 a las 13:00 y cierre el 4 a las 17:45, hora de Colombia.

Las 23 tareas de desarrollo y seguimiento están dentro del sprint. KAN-24 y sus tres subtareas corresponden al ensayo del 3, preparación final del 4 y entrega del 7 de diciembre y quedan fuera de ese sprint. Los puntos ya están en el campo de estimación de las tareas principales; en subtareas mantenemos el desglose en su descripción. No sumamos ambas capas para calcular esfuerzo. Las fechas de cada tarea son objetivos de revisión y entrega parcial; las revisamos con nuestro avance real.

Todas las tareas y subtareas están asignadas a nuestras cinco cuentas. La guía [Jira y GitHub](jira-y-github.md) explica cómo dejamos evidencia y cambiamos estados.

La base técnica ya está escrita y compilada. Las actividades de base reflejan avance en curso; la publicación por PR y la prueba con un compañero siguen pendientes. No cerramos las interfaces de cada área por haber generado su página provisional.

## Reparto resumido

| Persona | Área | Carpetas propias |
| --- | --- | --- |
| Yo, Oscar Rojas | Base, comensal e integración | `src/features/comensal`, capa de rutas y archivos comunes |
| Santiago Diaz Palma | Administrador y Superadmin | `src/features/admin`, `src/features/superadmin` |
| Santiago Evanz | Cocina y caja | `src/features/cocina`, `src/features/caja` |
| Jhean Useche | Sitio público | `src/features/publico` |
| Samuel Correa | Mesero | `src/features/mesero` |

El CSS va en `src/features/<area>/styles`, en archivos `.module.css`; los recursos van en `public/media/<area>`. El [mapa de rutas](rutas.md) concreta las páginas. Las rutas las preparo yo; los compañeros trabajan principalmente en sus pantallas.

## Tareas creadas

| Referencia | Jira | Qué vamos a hacer | Responsable | Fecha objetivo | Puntos |
| --- | --- | --- | --- | --- | --- |
| BASE-01 | [KAN-1](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-1) | Preparar manualmente la aplicación y las rutas | Oscar Rojas | 2026-11-23 | 5 |
| BASE-02 | [KAN-2](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-2) | Dejar componentes mínimos y datos compartidos | Oscar Rojas | 2026-11-24 | 5 |
| PUB-01 | [KAN-3](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-3) | Construir inicio y navegación pública | Jehan Useche | 2026-11-26 | 5 |
| PUB-02 | [KAN-4](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-4) | Construir directorio y ficha de restaurante | Jehan Useche | 2026-11-30 | 5 |
| PUB-03 | [KAN-5](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-5) | Completar páginas informativas esenciales | Jehan Useche | 2026-12-03 | 5 |
| COM-00 | [KAN-6](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-6) | Completar bocetos de las pantallas faltantes del comensal | Oscar Rojas | 2026-11-24 | 5 |
| COM-01 | [KAN-7](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-7) | Construir entrada de mesa, menú y detalle | Oscar Rojas | 2026-11-27 | 5 |
| COM-02 | [KAN-8](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-8) | Maquetar carrito y seguimiento visual del pedido | Oscar Rojas | 2026-12-03 | 5 |
| COM-03 | [KAN-9](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-9) | Maquetar cuenta, división y pago visual | Oscar Rojas | 2026-12-03 | 5 |
| MES-01 | [KAN-10](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-10) | Construir acceso, panel y listado de mesas | Samuel Correa | 2026-11-26 | 5 |
| MES-02 | [KAN-11](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-11) | Construir registro y seguimiento de pedidos | Samuel Correa | 2026-11-30 | 5 |
| MES-03 | [KAN-12](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-12) | Maquetar cuenta, efectivo y cierre de mesa | Samuel Correa | 2026-12-03 | 5 |
| COC-01 | [KAN-13](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-13) | Construir tablero de cocina | Santiago Evanz | 2026-11-27 | 5 |
| CAJ-01 | [KAN-14](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-14) | Construir apertura de caja y cuentas abiertas | Santiago Evanz | 2026-11-27 | 5 |
| CAJ-02 | [KAN-15](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-15) | Completar historial y resumen de turno | Santiago Evanz | 2026-12-03 | 5 |
| ADM-01 | [KAN-16](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-16) | Construir acceso y panel del restaurante | Santiago Diaz Palma | 2026-11-26 | 4 |
| ADM-02 | [KAN-17](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-17) | Construir menú e inventario | Santiago Diaz Palma | 2026-11-30 | 5 |
| ADM-03 | [KAN-18](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-18) | Construir personal y Superadmin mínimo | Santiago Diaz Palma | 2026-12-03 | 5 |
| INT-01 | [KAN-19](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-19) | Integrar navegación y datos de las cinco áreas | Oscar Rojas | 2026-12-04 | 5 |
| INT-02 | [KAN-20](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-20) | Preparar privacidad administrativa y prueba final | Oscar Rojas | 2026-12-04 | 4 |
| REV-01 | [KAN-21](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-21) | Revisar preparación y arranque del equipo | Oscar Rojas | 2026-11-23 | 2 |
| REV-02 | [KAN-22](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-22) | Reunión semanal y acta del 27 de noviembre | Oscar Rojas | 2026-11-27 | 2 |
| REV-03 | [KAN-23](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-23) | Reunión de cierre del sprint el 4 de diciembre | Oscar Rojas | 2026-12-04 | 2 |
| ENT-01 | [KAN-24](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-24) | Preparar demostración y entrega del 7 de diciembre | Oscar Rojas | 2026-12-07 | 3 |

## Subtareas por trabajo

### BASE-01; Preparar manualmente la aplicación y las rutas

Responsable: yo, Oscar Rojas. Fecha objetivo: 2026-11-23.

Carpetas: `src/app y componentes compartidos`. [Diseño de referencia](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=0-1).

| Jira | Subtarea | Puntos |
| --- | --- | --- |
| [KAN-25](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-25) | Instalar una sola base Next.js con pnpm y CSS Modules, conservando README y docs | 2 |
| [KAN-26](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-26) | Crear rutas y enlaces de ejemplo para las pantallas de cada área | 2 |
| [KAN-27](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-27) | Comprobar arranque y compilación; subir PR de base sin programar backend | 1 |

Vamos a revisar el diseño o boceto, los enlaces y la adaptación a celular/escritorio. Dejamos PR y capturas; si es seguimiento, acta e informe con datos reales. No exigimos lógica de negocio.

### BASE-02; Dejar componentes mínimos y datos compartidos

Responsable: yo, Oscar Rojas. Fecha objetivo: 2026-11-24.

Carpetas: `src/app y componentes compartidos`. [Diseño de referencia](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=0-1).

| Jira | Subtarea | Puntos |
| --- | --- | --- |
| [KAN-28](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-28) | Preparar colores y tipografía compartidos y ejemplos de botón, campo y tarjeta | 2 |
| [KAN-29](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-29) | Dejar carpeta por persona, CSS en styles por área y recursos por área | 2 |
| [KAN-30](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-30) | Explicar al equipo un ejemplo pequeño de JSX, CSS Modules y primer PR | 1 |

Vamos a revisar el diseño o boceto, los enlaces y la adaptación a celular/escritorio. Dejamos PR y capturas; si es seguimiento, acta e informe con datos reales. No exigimos lógica de negocio.

## Cómo vamos a repartir las entregas del sitio público

Useche tiene varias páginas y secciones extensas. El [mapa de rutas](rutas.md) distingue las direcciones propuestas de las variantes del Figma. No interpretamos sus tres tareas principales como tres pantallas pequeñas ni damos por equilibrada la carga por tener el mismo número de puntos que otra área.

La entrega se hace por subtareas: header y presentación principal (KAN-31), secciones restantes y footer (KAN-32), navegación y revisión visual (KAN-33), y después directorio/ficha e informativas. Una subtarea extensa puede tener varios PR pequeños. No esperamos a terminar todo el sitio para pedir revisión. En el arranque del 23 y la revisión del 27 revisamos el tamaño real y acordamos ayuda o ajuste de alcance; no reasignamos una parte sin coordinar sus archivos.

Si Samuel puede ayudar, elegimos una pieza concreta, por ejemplo el footer: dejamos constancia en Jira, asignamos esa subtarea al colaborador y mantenemos a Useche coordinando el área. Si la subtarea agrupa más piezas, primero la dividimos para que el responsable y la evidencia sean claros. El ejemplo de ramas y archivos separados está en el [README](../README.md#13-reglas-para-no-estorbarnos).

### PUB-01; Construir inicio y navegación pública

Responsable: Jehan Useche. Fecha objetivo: 2026-11-26.

Carpetas: `src/features/publico y public/media/publico`. [Diseño de referencia](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=653-500).

| Jira | Subtarea | Puntos |
| --- | --- | --- |
| [KAN-31](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-31) | Construir header y presentación principal con CSS del Figma | 2 |
| [KAN-32](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-32) | Construir secciones restantes y footer con recursos en public/media/publico | 2 |
| [KAN-33](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-33) | Conectar enlaces de ejemplo y revisar celular/escritorio con capturas | 1 |

Vamos a revisar el diseño o boceto, los enlaces y la adaptación a celular/escritorio. Dejamos PR y capturas; si es seguimiento, acta e informe con datos reales. No exigimos lógica de negocio.

### PUB-02; Construir directorio y ficha de restaurante

Responsable: Jehan Useche. Fecha objetivo: 2026-11-30.

Carpetas: `src/features/publico y public/media/publico`. [Diseño de referencia](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=312-1473).

| Jira | Subtarea | Puntos |
| --- | --- | --- |
| [KAN-34](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-34) | Maquetar tarjetas de restaurantes y controles visuales de búsqueda | 2 |
| [KAN-35](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-35) | Maquetar ficha de restaurante con datos de ejemplo y recursos del Figma | 2 |
| [KAN-36](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-36) | Conectar directorio, ficha y retorno con navegación; sin implementar búsqueda real | 1 |

Vamos a revisar el diseño o boceto, los enlaces y la adaptación a celular/escritorio. Dejamos PR y capturas; si es seguimiento, acta e informe con datos reales. No exigimos lógica de negocio.

### PUB-03; Completar páginas informativas esenciales

Responsable: Jehan Useche. Fecha objetivo: 2026-12-03.

Carpetas: `src/features/publico y public/media/publico`. [Diseño de referencia](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=313-1999).

| Jira | Subtarea | Puntos |
| --- | --- | --- |
| [KAN-37](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-37) | Maquetar Cómo funciona y Para restaurantes reutilizando estructura | 2 |
| [KAN-38](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-38) | Maquetar Planes, Contacto y formulario visual sin validación | 2 |
| [KAN-39](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-39) | Completar páginas informativas acordadas y revisar enlaces y responsive | 1 |

Vamos a revisar el diseño o boceto, los enlaces y la adaptación a celular/escritorio. Dejamos PR y capturas; si es seguimiento, acta e informe con datos reales. No exigimos lógica de negocio.

### COM-00; Completar bocetos de las pantallas faltantes del comensal

Responsable: yo, Oscar Rojas. Fecha objetivo: 2026-11-24.

Carpetas: `Figma, docs y src/features/comensal después de acordar bocetos`. [Diseño de referencia](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-5333).

| Jira | Subtarea | Puntos |
| --- | --- | --- |
| [KAN-40](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-40) | Inventariar pantallas existentes y faltantes del comensal sin asumir que todo Figma está terminado | 1 |
| [KAN-41](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-41) | Preparar bocetos sencillos de los huecos del flujo mesa, menú, carrito, pedido y cuenta | 2 |
| [KAN-42](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-42) | Acordar versión mínima y enlaces con el equipo antes de maquetar cada hueco | 2 |

Vamos a revisar el diseño o boceto, los enlaces y la adaptación a celular/escritorio. Dejamos PR y capturas; si es seguimiento, acta e informe con datos reales. No exigimos lógica de negocio.

### COM-01; Construir entrada de mesa, menú y detalle

Responsable: yo, Oscar Rojas. Fecha objetivo: 2026-11-27.

Carpetas: `src/features/comensal y public/media/comensal`. [Diseño de referencia](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-5417).

| Jira | Subtarea | Puntos |
| --- | --- | --- |
| [KAN-43](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-43) | Maquetar entrada de mesa con restaurante y mesa de ejemplo | 1 |
| [KAN-44](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-44) | Maquetar menú y categorías con platos fijos, disponibles y agotados | 2 |
| [KAN-45](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-45) | Maquetar detalle de plato y enlazarlo al carrito; sin validaciones | 2 |

Vamos a revisar el diseño o boceto, los enlaces y la adaptación a celular/escritorio. Dejamos PR y capturas; si es seguimiento, acta e informe con datos reales. No exigimos lógica de negocio.

### COM-02; Maquetar carrito y seguimiento visual del pedido

Responsable: yo, Oscar Rojas. Fecha objetivo: 2026-12-03.

Carpetas: `src/features/comensal y public/media/comensal`. [Diseño de referencia](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-5661).

| Jira | Subtarea | Puntos |
| --- | --- | --- |
| [KAN-46](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-46) | Maquetar carrito o Mi pedido con cantidades y total de ejemplo | 2 |
| [KAN-47](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-47) | Maquetar confirmación de envío y pantalla de estado con datos fijos | 2 |
| [KAN-48](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-48) | Conectar menú, carrito y seguimiento con rutas; sin persistencia ni pedidos reales | 1 |

Vamos a revisar el diseño o boceto, los enlaces y la adaptación a celular/escritorio. Dejamos PR y capturas; si es seguimiento, acta e informe con datos reales. No exigimos lógica de negocio.

### COM-03; Maquetar cuenta, división y pago visual

Responsable: yo, Oscar Rojas. Fecha objetivo: 2026-12-03.

Carpetas: `src/features/comensal y public/media/comensal`. [Diseño de referencia](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-5879).

| Jira | Subtarea | Puntos |
| --- | --- | --- |
| [KAN-49](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-49) | Maquetar cuenta y opciones de división con valores de ejemplo | 1 |
| [KAN-50](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-50) | Maquetar método de pago y confirmación sin cálculos ni cobro real | 2 |
| [KAN-51](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-51) | Conectar el recorrido visual y revisar las pantallas faltantes acordadas | 2 |

Vamos a revisar el diseño o boceto, los enlaces y la adaptación a celular/escritorio. Dejamos PR y capturas; si es seguimiento, acta e informe con datos reales. No exigimos lógica de negocio.

### MES-01; Construir acceso, panel y listado de mesas

Responsable: Samuel Correa. Fecha objetivo: 2026-11-26.

Carpetas: `src/features/mesero y public/media/mesero`. [Diseño de referencia](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=323-61).

| Jira | Subtarea | Puntos |
| --- | --- | --- |
| [KAN-52](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-52) | Maquetar acceso del mesero y variante de error si existe en Figma | 1 |
| [KAN-53](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-53) | Maquetar navegación y panel principal del mesero | 2 |
| [KAN-54](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-54) | Maquetar listado y detalle de mesas con enlaces y CSS responsive | 2 |

Vamos a revisar el diseño o boceto, los enlaces y la adaptación a celular/escritorio. Dejamos PR y capturas; si es seguimiento, acta e informe con datos reales. No exigimos lógica de negocio.

### MES-02; Construir registro y seguimiento de pedidos

Responsable: Samuel Correa. Fecha objetivo: 2026-11-30.

Carpetas: `src/features/mesero y public/media/mesero`. [Diseño de referencia](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=323-916).

| Jira | Subtarea | Puntos |
| --- | --- | --- |
| [KAN-55](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-55) | Maquetar selección de platos de una mesa con datos fijos | 2 |
| [KAN-56](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-56) | Maquetar formulario de observaciones y confirmación sin validación | 2 |
| [KAN-57](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-57) | Maquetar seguimiento de pedidos y enlazar las pantallas de ejemplo | 1 |

Vamos a revisar el diseño o boceto, los enlaces y la adaptación a celular/escritorio. Dejamos PR y capturas; si es seguimiento, acta e informe con datos reales. No exigimos lógica de negocio.

### MES-03; Maquetar cuenta, efectivo y cierre de mesa

Responsable: Samuel Correa. Fecha objetivo: 2026-12-03.

Carpetas: `src/features/mesero y public/media/mesero`. [Diseño de referencia](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=323-1318).

| Jira | Subtarea | Puntos |
| --- | --- | --- |
| [KAN-58](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-58) | Maquetar cuenta y división de una mesa con importes fijos | 2 |
| [KAN-59](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-59) | Maquetar efectivo y confirmación de cierre como pantallas o diálogos de ejemplo | 2 |
| [KAN-60](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-60) | Completar perfil básico y revisar enlaces de todo el recorrido | 1 |

Vamos a revisar el diseño o boceto, los enlaces y la adaptación a celular/escritorio. Dejamos PR y capturas; si es seguimiento, acta e informe con datos reales. No exigimos lógica de negocio.

### COC-01; Construir tablero de cocina

Responsable: Santiago Evanz. Fecha objetivo: 2026-11-27.

Carpetas: `src/features/cocina y public/media/cocina`. [Diseño de referencia](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-4098).

| Jira | Subtarea | Puntos |
| --- | --- | --- |
| [KAN-61](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-61) | Maquetar acceso y estructura visual de cocina | 1 |
| [KAN-62](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-62) | Construir tarjetas de pedido con mesa, hora y observaciones de ejemplo | 2 |
| [KAN-63](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-63) | Mostrar variantes de estados y contadores fijos; navegación de demo sin tiempo real | 2 |

Vamos a revisar el diseño o boceto, los enlaces y la adaptación a celular/escritorio. Dejamos PR y capturas; si es seguimiento, acta e informe con datos reales. No exigimos lógica de negocio.

### CAJ-01; Construir apertura de caja y cuentas abiertas

Responsable: Santiago Evanz. Fecha objetivo: 2026-11-27.

Carpetas: `src/features/caja y public/media/caja`. [Diseño de referencia](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=457-338).

| Jira | Subtarea | Puntos |
| --- | --- | --- |
| [KAN-64](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-64) | Maquetar acceso y formulario visual de apertura de caja | 1 |
| [KAN-65](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-65) | Maquetar lista de cuentas abiertas y detalle con datos fijos | 2 |
| [KAN-66](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-66) | Maquetar pantalla de cobro y confirmación enlazadas; sin validación ni pago | 2 |

Vamos a revisar el diseño o boceto, los enlaces y la adaptación a celular/escritorio. Dejamos PR y capturas; si es seguimiento, acta e informe con datos reales. No exigimos lógica de negocio.

### CAJ-02; Completar historial y resumen de turno

Responsable: Santiago Evanz. Fecha objetivo: 2026-12-03.

Carpetas: `src/features/caja y public/media/caja`. [Diseño de referencia](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=460-510).

| Jira | Subtarea | Puntos |
| --- | --- | --- |
| [KAN-67](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-67) | Maquetar historial de cocina y caja con ejemplos | 2 |
| [KAN-68](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-68) | Maquetar turno y cierre como pantallas de demostración | 2 |
| [KAN-69](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-69) | Revisar navegación, recursos propios y adaptación a celular/escritorio | 1 |

Vamos a revisar el diseño o boceto, los enlaces y la adaptación a celular/escritorio. Dejamos PR y capturas; si es seguimiento, acta e informe con datos reales. No exigimos lógica de negocio.

### ADM-01; Construir acceso y panel del restaurante

Responsable: Santiago Diaz Palma. Fecha objetivo: 2026-11-26.

Carpetas: `src/features/admin, src/features/superadmin y sus recursos en public/media`. [Diseño de referencia](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=749-2344).

| Jira | Subtarea | Puntos |
| --- | --- | --- |
| [KAN-70](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-70) | Maquetar acceso de administrador y navegación privada | 1 |
| [KAN-71](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-71) | Construir panel principal del restaurante con cifras de ejemplo | 2 |
| [KAN-72](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-72) | Revisar layout y CSS responsive; no enlazar administración desde el sitio público | 1 |

Vamos a revisar el diseño o boceto, los enlaces y la adaptación a celular/escritorio. Dejamos PR y capturas; si es seguimiento, acta e informe con datos reales. No exigimos lógica de negocio.

### ADM-02; Construir menú e inventario

Responsable: Santiago Diaz Palma. Fecha objetivo: 2026-11-30.

Carpetas: `src/features/admin, src/features/superadmin y sus recursos en public/media`. [Diseño de referencia](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=749-3079).

| Jira | Subtarea | Puntos |
| --- | --- | --- |
| [KAN-73](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-73) | Maquetar tabla de platos y formularios visuales de agregar/editar | 2 |
| [KAN-74](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-74) | Maquetar inventario, ingredientes y alertas con datos fijos | 2 |
| [KAN-75](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-75) | Mostrar diálogos de ejemplo y enlazar variantes sin validar ni guardar datos | 1 |

Vamos a revisar el diseño o boceto, los enlaces y la adaptación a celular/escritorio. Dejamos PR y capturas; si es seguimiento, acta e informe con datos reales. No exigimos lógica de negocio.

### ADM-03; Construir personal y Superadmin mínimo

Responsable: Santiago Diaz Palma. Fecha objetivo: 2026-12-03.

Carpetas: `src/features/admin, src/features/superadmin y sus recursos en public/media`. [Diseño de referencia](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=745-39170).

| Jira | Subtarea | Puntos |
| --- | --- | --- |
| [KAN-76](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-76) | Maquetar personal y formularios de alta/desactivación de ejemplo | 2 |
| [KAN-77](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-77) | Maquetar Superadmin, lista de solicitudes y detalle con decisiones de ejemplo | 2 |
| [KAN-78](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-78) | Conectar páginas privadas visuales; noindex y sin enlaces públicos; sin autenticación real | 1 |

Vamos a revisar el diseño o boceto, los enlaces y la adaptación a celular/escritorio. Dejamos PR y capturas; si es seguimiento, acta e informe con datos reales. No exigimos lógica de negocio.

### INT-01; Integrar navegación y datos de las cinco áreas

Responsable: yo, Oscar Rojas. Fecha objetivo: 2026-12-04.

Carpetas: `archivos compartidos coordinados por Oscar`. [Diseño de referencia](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=0-1).

| Jira | Subtarea | Puntos |
| --- | --- | --- |
| [KAN-79](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-79) | Revisar PR y coherencia visual de las cinco áreas | 2 |
| [KAN-80](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-80) | Recorrer enlaces de las cinco áreas con datos de ejemplo | 2 |
| [KAN-81](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-81) | Corregir enlaces rotos y documentar partes visuales pendientes | 1 |

Vamos a revisar el diseño o boceto, los enlaces y la adaptación a celular/escritorio. Dejamos PR y capturas; si es seguimiento, acta e informe con datos reales. No exigimos lógica de negocio.

### INT-02; Preparar privacidad administrativa y prueba final

Responsable: yo, Oscar Rojas. Fecha objetivo: 2026-12-04.

Carpetas: `archivos compartidos coordinados por Oscar`. [Diseño de referencia](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=0-1).

| Jira | Subtarea | Puntos |
| --- | --- | --- |
| [KAN-82](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-82) | Revisar noindex y ausencia de enlaces administrativos en la parte pública | 1 |
| [KAN-83](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-83) | Mantener índice de demo solo local/controlado y documentar acceso real pendiente | 1 |
| [KAN-84](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-84) | Comprobar instalación con pnpm, compilación y navegación con el equipo | 2 |

Vamos a revisar el diseño o boceto, los enlaces y la adaptación a celular/escritorio. Dejamos PR y capturas; si es seguimiento, acta e informe con datos reales. No exigimos lógica de negocio.

### REV-01; Revisar preparación y arranque del equipo

Responsable: yo, Oscar Rojas. Fecha objetivo: 2026-11-23.

Carpetas: `docs/seguimiento-semanal.md y Jira`. [Diseño de referencia](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=0-1).

| Jira | Subtarea | Puntos |
| --- | --- | --- |
| [KAN-85](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-85) | Revisar la base publicada y los primeros bloqueos de instalación el 23 de noviembre | 1 |
| [KAN-86](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-86) | Registrar acuerdos de arranque con evidencias reales y responsables | 1 |

Vamos a revisar el diseño o boceto, los enlaces y la adaptación a celular/escritorio. Dejamos PR y capturas; si es seguimiento, acta e informe con datos reales. No exigimos lógica de negocio.

### REV-02; Reunión semanal y acta del 27 de noviembre

Responsable: yo, Oscar Rojas. Fecha objetivo: 2026-11-27.

Carpetas: `docs/seguimiento-semanal.md y Jira`. [Diseño de referencia](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=0-1).

| Jira | Subtarea | Puntos |
| --- | --- | --- |
| [KAN-87](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-87) | Revisar avances y pendientes; acordar alcance restante y ayuda entre compañeros | 1 |
| [KAN-88](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-88) | Preparar acta e informe semanal con PR, dificultades y responsables de resolver | 1 |

Vamos a revisar el diseño o boceto, los enlaces y la adaptación a celular/escritorio. Dejamos PR y capturas; si es seguimiento, acta e informe con datos reales. No exigimos lógica de negocio.

### REV-03; Reunión de cierre del sprint el 4 de diciembre

Responsable: yo, Oscar Rojas. Fecha objetivo: 2026-12-04.

Carpetas: `docs/seguimiento-semanal.md y Jira`. [Diseño de referencia](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=0-1).

| Jira | Subtarea | Puntos |
| --- | --- | --- |
| [KAN-89](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-89) | Revisar frontend integrado y estado real de tareas al cerrar el periodo | 1 |
| [KAN-90](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-90) | Preparar acta e informe de cierre con evidencias y pendientes para la instructora | 1 |

Vamos a revisar el diseño o boceto, los enlaces y la adaptación a celular/escritorio. Dejamos PR y capturas; si es seguimiento, acta e informe con datos reales. No exigimos lógica de negocio.

### ENT-01; Preparar demostración y entrega del 7 de diciembre

Responsable: yo, Oscar Rojas. Fecha objetivo: 2026-12-07.

Carpetas: `docs y versión de demostración`. [Diseño de referencia](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=0-1).

| Jira | Subtarea | Puntos |
| --- | --- | --- |
| [KAN-91](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-91) | Ensayar el 3 de diciembre en el SENA con participación de los cinco | 1 |
| [KAN-92](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-92) | Corregir errores visuales el 4 de diciembre y preparar capturas e informe final dentro de la jornada | 1 |
| [KAN-93](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-93) | Entregar el 7 la versión frontend y documentar qué queda para backend | 1 |

Vamos a revisar el diseño o boceto, los enlaces y la adaptación a celular/escritorio. Dejamos PR y capturas; si es seguimiento, acta e informe con datos reales. No exigimos lógica de negocio.

## Cómo se ve que una tarea está lista

La pantalla se puede abrir desde su ruta, tiene los estilos y recursos acordados y permite recorrer el flujo de ejemplo. La revisamos mediante PR y capturas. Los botones pueden navegar a pantallas preparadas con datos fijos; no tienen que enviar formularios ni comprobar credenciales.

Si falta tiempo, priorizamos el recorrido principal. Cuenta de comensal completa, amigos y notificaciones, y Superadmin avanzado se revisan después. Si alguien termina antes, toma una subtarea acordada de otra área, se la asignamos y define los archivos que va a tocar. Una carpeta tiene un responsable de coordinación, no un dueño que impide colaborar.

El detalle del informe semanal está en [seguimiento-semanal.md](seguimiento-semanal.md).

## Sprint configurado

Ya quedó habilitado y activo en nuestro tablero existente; no necesitamos crear otro proyecto. Seguimos las fechas y el reparto anteriores y dejamos la entrega final fuera del periodo de desarrollo.

## Nuestra disponibilidad

Estudio de 12:00 a 18:00. Para dudas y revisiones del proyecto estoy en el SENA de 13:00 a 18:00 los lunes, martes, jueves y viernes; los miércoles tenemos inglés. No trabajo ni atiendo consultas del proyecto después del SENA ni fines de semana. Esa ventana no equivale a cinco horas continuas de programación: seguimos teniendo clase. Dejamos dudas y PR para el siguiente bloque de apoyo. Las revisiones del martes son 15:30–16:00; los viernes 17:00–17:15, con informe antes de las 18:00.

**Para empezar nuestra tarea:** comprobamos su ruta en el [mapa](rutas.md), creamos nuestra rama y seguimos el recorrido de [Jira y GitHub](jira-y-github.md). Dejamos evidencia para la [revisión semanal](seguimiento-semanal.md).
