# Cómo vamos a terminar la entrega con backend

[Volver al README](../README.md). Actualización del 27 de noviembre de 2026.

## Qué cambió

Ya no vamos a intentar terminar todo Figma antes de esta entrega. Vamos a priorizar la landing, el acceso con datos reales y la gestión de cuentas. Cerramos el sprint el 4 de diciembre y entregamos el 7. Conservamos las pantallas y tareas pendientes para seguir después.

Es un plan ajustado para lo que nos falta aprender. Las fechas son objetivos: si el 1 de diciembre todavía no tenemos base y autenticación funcionando, revisamos el alcance con la instructora. No contamos con trabajar obligatoriamente los fines de semana ni con que yo atienda después del SENA. Mi horario de apoyo sigue siendo de 13:00 a 18:00 lunes, martes, jueves y viernes; miércoles tenemos inglés.

Este documento describe lo que vamos a preparar. No significa que el backend ya esté programado o las dependencias instaladas.

## Qué tenemos comprobado

Revisamos el main local y su referencia en GitHub: `c284ef9f30911fb3496f3f105f640dc08ec51882`. Coincidían al hacer esta revisión. La copia de trabajo está en `prueba-no-renderizar-navBar`, con el commit adicional `6fc320e`; esa reorganización todavía no está integrada en main. No cambiamos de rama para hacer esta planificación.

| Parte | Evidencia y estado observado |
| --- | --- |
| Base Next.js, rutas y documentación | PR [#17](https://github.com/rx3card/cowpay/pull/17), [#18](https://github.com/rx3card/cowpay/pull/18) y [#19](https://github.com/rx3card/cowpay/pull/19) integrados |
| Login visual del comensal | PR [#20](https://github.com/rx3card/cowpay/pull/20) integrado; falta conectarlo al servidor |
| Acceso y estructura del panel de cocina | PR [#21](https://github.com/rx3card/cowpay/pull/21) integrado; falta autenticación real |
| Navegación e inicio de mesero | PR [#23](https://github.com/rx3card/cowpay/pull/23) integrado; su acceso sigue provisional en la versión revisada |
| Landing | PR [#24](https://github.com/rx3card/cowpay/pull/24), [#25](https://github.com/rx3card/cowpay/pull/25) y [#26](https://github.com/rx3card/cowpay/pull/26) integrados; hay contenido y header, pero el footer sigue provisional y algunos botones no navegan |
| Admin y superadmin | Hay rutas y pantallas provisionales; no encontramos CRUD persistente |
| Base de datos, sesiones y servicios de servidor | No encontramos implementación ni configuración en el código y dependencias revisados |

En la rama local de reorganización encontramos 12 imports relativos sin destino: cinco de admin y siete de mesero. Lo seguimos en [KAN-120](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-120). Antes de compartir ese cambio hay que corregir imports y compilar con los archivos generados de la rama actual. Esta planificación no modificó el código de la aplicación ni ejecutó una nueva compilación.

KAN-62 y KAN-63 figuran En revisión. No encontramos su entrega integrada en main y conservamos ese estado para comprobar el avance con Evanz. Una rama personal puede tener trabajo que esta revisión no ve. No estamos contando archivos provisionales como pantallas terminadas ni dando por revisado todo Figma.

## Quién crea a quién

| Cuenta | Quién la crea | Qué puede gestionar en esta entrega |
| --- | --- | --- |
| Superadmin | Nosotros, mediante una cuenta inicial de desarrollo configurada por servidor | Restaurantes y sus administradores |
| Admin | Superadmin | Personal de su propio restaurante |
| Mesero | Admin de su restaurante | Entrar y utilizar su área; no crear cuentas de personal |
| Cocina | Admin de su restaurante | Entrar y utilizar su área; no crear cuentas de personal |
| Cajero | Admin de su restaurante | Entrar y utilizar su área; no crear cuentas de personal |
| Comensal | La propia persona mediante registro público | Crear su cuenta, iniciar sesión y cerrarla; es independiente del personal del restaurante |

Mesero, cocina y cajero son roles fijos. No necesitamos un editor para inventar roles nuevos en esta entrega. El comensal no es un empleado que crea el admin.

La recuperación del personal la atiende su admin. Si un admin pierde el acceso, lo atendemos desde superadmin. Oscar confirmó este recorrido. Cambiar un correo o un usuario no equivale por sí solo a restablecer la contraseña.

Para el mínimo vamos a registrar solicitudes y restablecimientos supervisados en el sistema. Antes de programar acordamos la entrega de una credencial temporal o enlace de un uso. Debe vencer, exigir el cambio de clave y revocar las sesiones anteriores. No mostramos la contraseña anterior ni guardamos la nueva como texto legible. Si elegimos correo real para entregar el enlace, hay que configurar y probar el proveedor; no lo damos por resuelto por dibujar un formulario.

## Qué significa CRUD aquí

CRUD viene de **Create, Read, Update, Delete**: crear, consultar, actualizar y eliminar. Lo aplicamos a restaurantes, administradores y personal. Para las bajas vamos a desactivar registros y conservar sus relaciones; lo llamamos baja lógica.

Iniciar sesión es otra operación. Una pantalla que cambia de URL al pulsar Entrar no está comprobando una contraseña. En esta etapa el servidor consulta la cuenta, comprueba las credenciales y crea una sesión. Después comprueba qué operaciones puede hacer esa cuenta.

Para comensal acordamos registro, login y logout. No añadimos ahora un CRUD administrativo sobre todas las cuentas de comensales ni los flujos de pedido y pago.

## Una base común para todos

Conservamos Next.js, React, TypeScript, CSS Modules y pnpm. El backend vive en el mismo proyecto Next.js. PostgreSQL guarda los datos y Prisma es la propuesta de acceso y cambios de esquema que ya teníamos documentada. Fijamos versiones compatibles al preparar la base; no actualizamos dependencias por separado en cada rama.

Vamos a elegir una biblioteca de autenticación mantenida antes de implementar las sesiones. La decisión y el contrato quedan en KAN-102. Esa biblioteca puede necesitar sus propias tablas: ajustamos el esquema una sola vez, de forma coordinada. La [guía de autenticación de Next.js](https://nextjs.org/docs/app/guides/authentication) explica la diferencia entre identificar al usuario, mantener su sesión y autorizar operaciones.

Las distintas pantallas llaman al mismo servicio de autenticación. No creamos seis servidores ni seis bases de datos. El servidor obtiene el rol y el restaurante desde la sesión y los registros; no confía en que el navegador diga que es superadmin o que pertenece a otro restaurante.

## Cómo evitamos esperar a que termine otro compañero

Yo preparo las bases del backend, los contratos y un ejemplo conectado antes de pedirles a los compañeros que conecten sus interfaces. No les asignamos construir autenticación, sesiones ni consultas compartidas desde cero. Mientras preparo eso, pueden avanzar las pantallas con ejemplos del contrato.

Inicializamos **únicamente nuestra cuenta de superadmin**. Un programa de inicialización o bootstrap crea esa cuenta sin duplicarla. No insertamos administradores, empleados ni comensales mediante un seed. Desde la interfaz de superadmin creamos restaurante/admin; desde la de admin creamos personal; comensal utiliza el registro público. Las cuentas para probar también se crean siguiendo ese recorrido.

Para probar un login de personal sí necesitamos que su cuenta exista: primero hacemos el recorrido de alta desde las interfaces. Podemos preparar un ejemplo pequeño antes del diseño final para explicar y comprobar esa conexión; no lo sustituimos por usuarios insertados automáticamente en DB.

Cada compañero necesita su propia base o un entorno aislado para practicar sin borrar datos ajenos. Las credenciales iniciales se configuran localmente y no se publican en Jira ni en el repositorio.

## Podemos empezar desde main aunque falte corregir los menús

El layout decide qué estructura visual envuelve la página. Podemos construir modelo, conexión, sesiones y operaciones desde main aunque algún login todavía muestre el menú. La autorización se comprueba en el servidor y no depende de ocultar el encabezado.

Samuel corrige los layouts de mesero; Palma los de admin y superadmin; Evanz los de cocina/caja. Lo realizan ellos para aprender, en sus ramas y con PR. Yo preparo el backend en otra rama desde main actualizada, después de guardar la documentación pendiente. No necesitamos integrar antes la reorganización local `6fc320e` con imports rotos.

Para las correcciones pendientes dejamos [KAN-125 para Samuel](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-125) y [KAN-126 para Palma](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-126), dentro de sus principales FRONTEND KAN-97 y KAN-96, respectivamente. KAN-120 queda como coordinación anterior en backlog. Yo reviso sus PR, no les hago esa práctica.

## Qué preparo yo como base

1. **Modelo y contrato de datos.** Acordamos qué representa un usuario, cómo pertenece a un restaurante y cuáles son sus campos. Un contrato es un acuerdo sobre lo que una función recibe y devuelve.
2. **Conexión y migración.** Una migración registra cambios en las tablas para que todos podamos reproducir la misma estructura. Dejamos instrucciones para una instalación limpia.
3. **Inicialización de superadmin.** Es la única cuenta que preparamos directamente en DB; todas las demás se crean desde la interfaz.
4. **Autenticación compartida a mi cargo.** Preparo login, logout, sesión, errores y recuperación. Antes de implementar fijamos biblioteca, nombres y tipos; los compañeros reciben ese contrato.
5. **Operaciones de cuentas y permisos.** Preparo las funciones de servidor para restaurantes/admins, personal y registro de comensal. Cada lectura y escritura protegida comprueba identidad y restaurante en servidor.
6. **Un ejemplo pequeño conectado.** Explico el recorrido de un formulario hasta el servidor y DB. Cada compañero conecta su interfaz siguiendo ese patrón; no tiene que inventar otro backend.

Estas son tareas por hacer, no archivos que ya hayamos creado. No vamos a instalar dependencias ni programar esta base automáticamente desde esta conversación: yo ejecuto los comandos y construyo el código con la guía.

## Carpetas y responsabilidad

| Lugar propuesto | Qué contiene | Responsable inicial |
| --- | --- | --- |
| `prisma/` y configuración del motor | Esquema, migraciones e inicialización exclusiva de superadmin | Oscar |
| `src/server/db/` | Conexión compartida, solo de servidor | Oscar |
| `src/server/auth/` | Autenticación, sesiones y recuperación comunes | Oscar |
| `src/server/auth/permissions.ts` | Reglas de rol y restaurante | Oscar |
| `src/server/restaurantes/` | Operaciones de restaurante y administradores | Oscar; Palma consume el contrato desde su interfaz |
| `src/server/personal/` | Operaciones sobre personal del restaurante | Oscar; Samuel consume el contrato desde su interfaz |
| `src/app/api/` | Entradas HTTP del servidor, cuando las necesite el contrato o la biblioteca | Oscar prepara la base y el ejemplo |
| `src/features/superadmin/` | Pantallas y estilos de superadmin | Palma |
| `src/features/admin/` | Panel de admin y gestión de personal | Palma coordina; Samuel trabaja PersonalPage y sus piezas |
| `src/features/mesero/` | Acceso y panel del mesero | Samuel |
| `src/features/cocina/` y `src/features/caja/` | Accesos y panel mínimo | Evanz |
| `src/features/comensal/` | Registro y acceso del comensal | Oscar |
| `src/features/publico/` | Landing, header, footer y enlaces | Useche |

No metemos consultas de base de datos en componentes del navegador. Un Route Handler recibe una petición HTTP en un `route.ts`; llama a las funciones de servidor, que comprueban los permisos y consultan la base. Explicaremos y construiremos un ejemplo antes de repartir ese patrón. La [guía de seguridad de datos de Next.js](https://nextjs.org/docs/app/guides/data-security) desarrolla esta separación.

Una propuesta de contratos para acordar en KAN-99 y KAN-102 es: `UsuarioActual` con id, nombre, rol, restauranteId y estado; operaciones de crear/listar/editar/desactivar personal y administradores; y respuestas de éxito o error con campos definidos. No devolvemos hashes. La identidad de quien realiza una operación viene de la sesión, no del formulario.

## Tareas de Jira y orden

| Tarea | Responsable | Objetivo |
| --- | --- | --- |
| [KAN-94; BACKEND de base de datos y superadmin inicial](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-94) | Oscar | 30 nov |
| [KAN-95; BACKEND de autenticación y permisos](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-95) | Oscar | Login y permisos 1 dic; recuperación 2 dic |
| [KAN-121; BACKEND de operaciones de cuentas](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-121) | Oscar | 2 dic; contrato disponible antes para avanzar interfaz |
| [KAN-96; FRONTEND de superadmin y admin](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-96) | Palma | 1 dic |
| [KAN-97; FRONTEND de mesero y personal](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-97) | Samuel, coordinado con Palma | 1 dic |
| [KAN-116; FRONTEND de cocina y cajero](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-116) | Evanz | 1 dic |
| [KAN-98; FRONTEND del registro y login del comensal](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-98) | Oscar | 1 dic |
| [KAN-3; FRONTEND de landing](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-3) | Useche | 3 dic |
| [KAN-130; INTEGRACIÓN de superadmin/admin](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-130) | Palma | 3 dic |
| [KAN-131; INTEGRACIÓN de mesero/personal](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-131) | Samuel | 3 dic |
| [KAN-132; INTEGRACIÓN de cocina/cajero](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-132) | Evanz | 3 dic |
| [KAN-133; INTEGRACIÓN de comensal](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-133) | Oscar | 3 dic |
| [KAN-19; integración](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-19) y [KAN-20; pruebas](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-20) | Oscar coordina; todos revisamos | 4 dic |
| [KAN-24; entrega](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-24) | Oscar coordina | 7 dic |

El 30 cerramos esquema, contrato e inicialización exclusiva de superadmin. Mientras tanto avanzamos formularios y tablas. El 1 comprobamos login y permisos. El 2 tengo como objetivo dejar operaciones compartidas y ejemplo para probar las altas desde interfaz. El 3 conectamos los CRUD y ensayamos el recorrido. El 4 corregimos e integramos. La concentración del backend en mí aumenta el riesgo de plazo; revisamos el alcance si nos retrasamos, no lo damos por garantizado.

Los puntos están en las tareas principales; las subtareas explican su esfuerzo y fecha objetivo en la descripción. No sumamos la estimación de la principal y sus subtareas dos veces. Estas estimaciones todavía necesitan contrastarse con lo que realmente tardemos.

La recuperación común se sigue en [KAN-119](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-119). Los formularios de superadmin y admin consumen esa función en KAN-110 y KAN-114. Así no implementamos dos mecanismos distintos para restablecer contraseñas.

## Cómo se ve el trabajo y la evidencia en el tablero

Separamos tres fases en tarjetas principales, cada una con estado independiente: **FRONTEND** es maquetar pantallas; **BACKEND** es implementar datos, operaciones y permisos del servidor; **INTEGRACIÓN** es conectar interfaces y comprobar resultados persistentes. No mezclamos las tres en una principal. Podemos avanzar frontend y backend en paralelo; la integración sí necesita ambos.

| Responsable | Evidencia entregada | Trabajo pendiente visible |
| --- | --- | --- |
| Samuel | KAN-10; principal Finalizada con PR #23 y KAN-53: navegación e inicio del panel de mesero | FRONTEND KAN-97: KAN-52, KAN-111 y layouts KAN-125. INTEGRACIÓN KAN-131: KAN-112 a KAN-115 |
| Evanz | KAN-61; frontend de acceso y estructura de cocina, PR #21, Finalizada dentro de su principal | FRONTEND KAN-116: KAN-61 entregada y KAN-64 pendiente. INTEGRACIÓN KAN-132: KAN-127 y KAN-128 |
| Palma | No declaramos entregados los accesos provisionales de admin/superadmin | FRONTEND KAN-96: KAN-70, KAN-106, KAN-134 y layouts KAN-126. INTEGRACIÓN KAN-130: KAN-107 a KAN-110 y KAN-117 |
| Oscar | Login visual del comensal integrado en PR #20 | FRONTEND KAN-98 con KAN-129; INTEGRACIÓN KAN-133 con KAN-118; BACKEND en KAN-94/KAN-95/KAN-121 |
| Useche | PR #24, #25 y #26: header y contenido de landing | KAN-3; principal En curso para terminar landing, footer y enlaces |

Esta es una fotografía de la revisión; Jira puede cambiar cuando los responsables actualizan sus estados. KAN-10 se acotó al panel efectivamente integrado: no afirma que login o mesas estén terminados. KAN-54 de listado/detalle de mesas sigue aplazada bajo KAN-11. KAN-52 y KAN-70 se recuperaron de las tareas anteriores, no se borraron ni se duplicaron.

KAN-116 se convirtió de Subtarea a Tarea conservando su clave y responsable. Se quitó su padre KAN-98 y se restauró prioridad alta después de la conversión. Después se separaron sus conexiones en KAN-132. Lo mismo se hizo con los accesos y CRUD de Samuel, Palma y Oscar. Si un filtro oculta a Oscar, también puede ocultar las principales BACKEND que tiene asignadas: borramos el filtro de responsables para ver el conjunto.

KAN-120 se conserva en backlog como coordinación anterior: sus prácticas de layouts no se borraron; KAN-125 está dentro del frontend de Samuel y KAN-126 dentro del de Palma. La conexión real de KAN-96/KAN-97/KAN-98 ya no se mide en esas tarjetas, sino en KAN-130/KAN-131/KAN-133.

Podemos consultar las claves y dependencias en el [registro de replanificación](replan-jira-2026-11-27.json). Es un registro del plan, no una implementación del backend ni una confirmación de que ya hayamos empezado todas las tareas.

## Qué comprobamos para darlo por terminado

Con datos de prueba recorremos lo siguiente:

1. Superadmin entra, crea un restaurante y su admin.
2. El admin entra y crea mesero, cocina y cajero.
3. Las tres cuentas entran en su área. El comensal se registra por separado y entra en la suya.
4. Editamos datos y recargamos: el cambio permanece en la base.
5. Desactivamos una cuenta y comprobamos que no puede seguir accediendo, aunque tuviera una sesión anterior.
6. Admin A no puede consultar ni modificar personal de B, ni cambiando identificadores en una petición.
7. El personal solicita recuperación a su admin; el admin que pierde acceso la solicita a superadmin. Probamos el restablecimiento acordado y la caducidad de la credencial temporal.
8. Cerramos sesión y las rutas y operaciones privadas dejan de permitir acceso. El registro público no puede crear un admin enviando otro rol.
9. Revisamos landing y accesos en móvil y escritorio, compilación e instalación desde una copia limpia con migraciones e inicialización exclusiva de superadmin. Después creamos las otras cuentas desde sus interfaces.

Que compile o que exista una ruta no demuestra por sí solo que este recorrido funciona. Cada PR debe incluir pasos y evidencia. No usamos datos personales reales para las pruebas.

## Qué dejamos para después

Conservamos las tareas de directorio y ficha pública completa, páginas informativas adicionales, flujo de mesa, menú, carrito, pedidos, división de cuenta, cobros, inventario y reportes. No borramos esas pantallas ni inventamos que están terminadas. Priorizamos el acceso y el CRUD acordados.

Las tareas anteriores de maquetación de admin y personal también se conservan como historial. El frontend actual se sigue en KAN-96/KAN-97/KAN-98/KAN-116; backend en KAN-94/KAN-95/KAN-121; integración en KAN-130 a KAN-133. La landing debe llevar a destinos coherentes: Useche revisa sus botones y enlaces, y anotamos las páginas todavía provisionales.

## Cómo trabajamos sin pisarnos

Primero publicamos e integramos el PR de base de datos y contrato. Solo yo, Oscar, cambio ese esquema durante este bloque; si necesitamos otro campo, lo pedimos en la tarea y coordinamos una migración. También preparo autenticación y operaciones comunes. Evanz conecta las interfaces de cocina/caja. Palma y Samuel acuerdan los archivos del área admin antes de trabajar.

Cada uno crea su rama desde main actualizada. Si dependemos de una parte no integrada, podemos maquetar con un ejemplo del contrato; no copiamos una segunda autenticación para desbloquearnos. Cuando se integra el contrato, recibimos main en nuestra rama y conectamos.

Actualizamos Jira al empezar y dejamos el PR al pasar a En revisión. Solo cerramos al revisar e integrar el alcance de esa tarea. Si ayudamos a otro, acordamos una subtarea y archivos concretos; no empujamos cambios al fork ajeno sin coordinación. Consultamos los comandos en [trabajo colaborativo](trabajo-colaborativo.md).

## Seguimiento

El seguimiento del 27 de noviembre registra este cambio de alcance y las evidencias reales; no damos una reunión por celebrada por haber actualizado Jira. El 1 revisamos el punto crítico de base y autenticación. El 4 dejamos informe de lo entregado, pruebas y pendientes. El 7 presentamos la versión integrada y explicamos sus límites.

## Pendiente de limpieza de vínculos

Las principales y subtareas ya están separadas. Quedó pendiente quitar nueve vínculos de bloqueo anteriores entre backend y frontend o la coordinación antigua KAN-120. Sus enlaces no cambian el estado de las tarjetas, pero pueden confundir la lectura de dependencias. No los damos por eliminados: durante el ajuste dejó de estar disponible Atlassian y se deshabilitó el control del navegador. Las dependencias nuevas hacia KAN-130 a KAN-133 sí se crearon. El registro JSON identifica los vínculos pendientes para corregirlos al recuperar acceso.
