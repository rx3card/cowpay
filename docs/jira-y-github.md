# Cómo vamos a trabajar con Jira y GitHub

> **Actualización del 27 de noviembre:** el alcance vigente incorpora backend, base de datos, accesos y CRUD. Este documento conserva la explicación o planificación inicial de frontend; sus restricciones de «solo frontend» no se aplican al nuevo mínimo. Antes de tomar una tarea consultamos [el plan de backend y entrega](plan-backend-y-entrega.md).


[Volver al README](../README.md). Seguimos este recorrido cuando ya tenemos la base instalada y una tarea elegida. Los pasos para instalar están en el README. Si estamos aprendiendo Git, primero seguimos la [guía de trabajo colaborativo](trabajo-colaborativo.md): distingue mi caso del de los compañeros y explica los comandos uno por uno.

## Para qué usamos cada uno

**Jira nos sirve para organizar el trabajo:** qué falta, quién lo está haciendo, cuándo lo revisamos y qué evidencia dejamos. **GitHub guarda nuestro código y los Pull Requests.** La integración permite relacionarlos; no revisa por sí sola si una pantalla quedó bien.

Nuestro sprint es **CowPay; Frontend; 21 nov – 4 dic 2026**. Ya está activo en Jira, con inicio reprogramado el 21 a las 13:00 y cierre el 4 a las 17:45, hora de Colombia. Tenemos 23 tareas principales de desarrollo y seguimiento dentro. El ensayo del 3, preparación final del 4 y entrega del 7 se siguen aparte en KAN-24.

Las primeras fechas son puntos de revisión de una parte pequeña, no la exigencia de terminar toda el área en tres días. Las entregas parciales se revisan el 26 y el 30; el 3 debemos poder recorrer lo esencial, y el 4 cerramos integración y correcciones. El inicio del periodo es el sábado 21, con primer apoyo presencial el lunes 23. No convertimos el fin de semana en trabajo obligatorio. El jueves 3 ensayamos de 17:00 a 17:30 en el SENA, el viernes 4 dejamos correcciones e informe antes de las 18:00 y el lunes 7 entregamos. No cuento con el fin de semana para trabajar. Si una estimación no coincide con nuestro avance, la ajustamos en la reunión y dejamos el motivo escrito.

## Qué significan las columnas

| Columna | Qué significa para nosotros | Quién la cambia |
| --- | --- | --- |
| To Do / Pendiente | Tenemos la tarea asignada, pero no la empezamos | Queda así desde la planificación |
| In Progress / En curso | Ya estamos trabajando en esa subtarea | Cada responsable al comenzar |
| In Review / En revisión | Hay un PR listo para revisar, con ruta y capturas | Cada responsable al pedir revisión |
| Done / Hecho | Ya revisamos y fusionamos el PR al repositorio del equipo | Yo, después de revisar e integrar; mis cambios los revisa otro compañero |

Este es nuestro acuerdo de equipo. No significa que Jira ya tenga permisos que impidan a los demás mover una tarjeta a Hecho.

No completamos una tarea solo por hacer un commit, subirlo a nuestro fork o pulsar un botón. Sí, Jira permite cambiar el estado manualmente desde la actividad o mover la tarjeta en el tablero, pero el acuerdo es hacerlo cuando corresponda al avance real.

Para las reuniones y los informes no hay PR de una pantalla: dejamos el acta o informe real como evidencia y luego cerramos esa actividad.

## Cómo vemos el sprint y quién hizo cada parte

Un **sprint** es el periodo en que acordamos avanzar estas tareas; no significa que entreguemos todo en un único PR al final. Vamos entregando subtareas pequeñas durante el periodo.

1. Entramos al [tablero de CowPay](https://rojasricosworkspace-65f8ece0.atlassian.net/jira/software/projects/KAN/boards/1) y seleccionamos nuestro sprint activo **CowPay; Frontend; 21 nov – 4 dic 2026**, si aparece un selector.
2. Filtramos por responsable para ver lo que le toca a cada uno. El responsable indica quién se encarga, no demuestra por sí solo quién escribió el código.
3. Abrimos una tarea, por ejemplo [KAN-3, inicio público](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-3), para ver sus subtareas. Si el tablero solo muestra la tarjeta principal, las revisamos dentro de ella.
4. En cada subtarea dejamos el PR, las capturas, la ruta y el comentario de revisión. El historial de actividad registra los cambios de estado; el PR y sus commits muestran la contribución de código. Si hubo ayuda, la anotamos.
5. Una tarea principal sigue abierta mientras tenga subtareas pendientes. Aunque todas estén en Hecho, revisamos también que sus piezas encajen antes de cerrar la principal.

No confundimos dos botones: cambiar una actividad a **Hecho** termina esa actividad; **Completar sprint** cierra el periodo de todo el equipo. Solo voy a cerrar el sprint al final, después de revisar lo entregado y dejar los pendientes registrados. No lo pulsamos para entregar una pantalla.

## Ejemplo completo de una entrega pequeña

Useche empieza [KAN-31, header y presentación principal](https://rojasricosworkspace-65f8ece0.atlassian.net/browse/KAN-31):

1. La pasa a **En curso**, crea una rama con `KAN-31` y construye esa parte en su carpeta.
2. Puede abrir un **Draft PR** mientras trabaja para mostrar avance; un borrador no significa que ya pide aprobación.
3. Cuando esté lista, deja el PR como listo para revisión, añade capturas de celular y escritorio y explica cómo abrirla. Pega el enlace en KAN-31 y la pasa a **En revisión**.
4. Voy a comprobar el resultado. Si faltan correcciones, las comento y la devolvemos a **En curso**. Useche hace cambios y los sube a la misma rama: no necesita crear otro PR por cada corrección.
5. Cuando esté bien, integro el PR y paso KAN-31 a **Hecho**. KAN-3 no se cierra todavía: siguen pendientes KAN-32 y KAN-33.

La siguiente entrega puede ser otra sección, no toda la web pública. Las fechas de revisión no significan esperar hasta ese día para mostrar avances. En cada reunión semanal vamos a abrir las pantallas y los PR reales; los puntos de Jira no sustituyen esa revisión.

Para pedir revisión dejamos este comentario, reemplazando cada campo:

```text
Ya dejé esta parte lista para revisar.
PR: [enlace]
Ruta: [dirección concreta]
Diseño: [enlace a Figma o al boceto]
Capturas: [celular y escritorio]
Qué hice: [resumen corto]
Qué falta: [pendiente real o ninguno dentro de esta subtarea]
Ayuda recibida: [si trabajamos con alguien más]
```

## Cómo se relaciona una subtarea con el código

Cada actividad de Jira tiene una clave, por ejemplo **KAN-31**. Usamos la clave real de la subtarea en el nombre de la rama, el mensaje del commit y el título del PR. No copiamos KAN-31 para todas las tareas.

| Lugar | Ejemplo para la entrega de Useche |
| --- | --- |
| Rama | `feat/KAN-31-header-publico` |
| Mensaje de commit | `KAN-31: agregar encabezado publico` |
| Título del PR | `KAN-31: construir header y presentación principal` |

La [guía de colaboración](trabajo-colaborativo.md) explica cómo crear esa rama, seleccionar archivos y abrir el PR. No ejecutamos una lista incompleta de comandos sin actualizar primero nuestra copia y comprobar dónde estamos.

Para los compañeros, el PR sale de su fork y llega a `rx3card/cowpay`, rama `main`. Mis PR salen de una rama del propio repositorio principal y también llegan a `main`. Si un PR abarca más de una subtarea, lo indicamos; preferimos entregas pequeñas que podamos comprobar por separado.

Cuando la sincronización esté confirmada, la integración podrá relacionar la actividad mediante esas claves. Mientras tanto, pegamos el enlace del PR manualmente en Jira. No hace falta que la sincronización funcione para seguir nuestro recorrido de revisión.

## Cómo vamos a revisar una pantalla

Antes de pedir revisión, dejamos en la tarea:

- Enlace al PR.
- Ruta concreta, por ejemplo `/mesero/mesas`.
- Captura en celular y escritorio.
- Qué pantalla de Figma o boceto seguimos.
- Qué quedó pendiente, si lo hay.

Voy a abrir la pantalla, compararla con nuestro diseño y revisar navegación y estilos. No vamos a exigir validaciones ni backend para este frontend. Cuando el cambio esté listo, integramos el PR y movemos esa subtarea a Hecho. Mis cambios los revisa otro compañero.

La tarea principal reúne varias subtareas: no la cerramos al fusionar el primer PR si todavía falta parte del trabajo. Revisamos todas sus subtareas y el recorrido completo antes de darla por terminada.

## Qué puede automatizarse y qué no

La conexión puede mostrarnos actividad de GitHub. Los cambios automáticos de estado necesitan reglas adicionales de Jira; no ocurren solo por conectar la cuenta. Si configuramos esas reglas, una opción es pasar a En revisión cuando se abre el PR y a Hecho cuando se fusiona una subtarea concreta. No vamos a cerrar una tarea principal con varios pendientes por el primer PR que se fusione.

Ninguna de esas reglas demuestra por sí sola que la interfaz coincida con Figma. La revisión visual sigue siendo nuestra. Tampoco vamos a poner fechas de finalización ni informes de reuniones que todavía no sucedieron.

## Alcance de la conexión

Repositorio que vamos a conectar: **`rx3card/cowpay`**. La aplicación elegida es **GitHub for Atlassian**, de Atlassian. Antes de conceder acceso revisamos los permisos y elegimos solo ese repositorio. Los demás repositorios personales y los forks no se agregan por defecto.

Ya instalamos **GitHub for Atlassian en Jira** y **Atlassian en GitHub**. En GitHub dejamos seleccionada la opción **Only select repositories**, con **un solo repositorio: `rx3card/cowpay`**. Comprobamos que la configuración quedó guardada en [la instalación de GitHub](https://github.com/settings/installations/183142911).

Todavía no damos por funcionando la sincronización con nuestro sitio de Jira. Su asistente de conexión vuelve a quedarse cargando al elegir GitHub Cloud y registra `TypeError: r.charAt is not a function` en el puente de la aplicación. Probamos tanto el inicio de configuración como la opción de configurar la aplicación; no apareció una conexión confirmada. La guía de Atlassian y el asistente piden permisos de propietario de una organización de GitHub; nuestro repositorio sigue en la cuenta personal `rx3card`. No cambiamos su propietario ni lo trasladamos a otra organización.

Para terminar, necesitamos que el asistente complete ese paso y muestre la conexión con nuestro sitio. Mientras tanto, seguimos trabajando con nuestras claves KAN y enlaces al PR en cada tarea. La instalación guardada no demuestra por sí sola que los eventos lleguen a Jira.

## Seguimiento semanal

Los martes 24 de noviembre y 1 de diciembre revisamos el trabajo de 15:30 a 16:00. Los viernes 27 de noviembre y 4 de diciembre hacemos el registro semanal de 17:00 a 17:15. Todo es presencial en el SENA. Mi apoyo es de 13:00 a 18:00 los lunes, martes, jueves y viernes; miércoles tenemos inglés. No atiendo el proyecto después de clase ni fines de semana. Voy a preparar el informe con el modelo de [seguimiento semanal](seguimiento-semanal.md). Nuestro informe es evidencia del trabajo que revisamos; no un porcentaje inventado a partir del número de tarjetas.

## Referencias

- [Conectar GitHub Cloud con Jira](https://support.atlassian.com/jira-cloud-administration/docs/integrate-with-github/).
- [Relacionar ramas, commits y PR con actividades de Jira](https://support.atlassian.com/jira-cloud-administration/docs/use-the-github-for-jira-app/).

**Nuestro recorrido por tarea:** elegimos una subtarea, creamos una rama, abrimos un PR, revisamos e integramos. Dejamos la evidencia en Jira y la retomamos en el [seguimiento semanal](seguimiento-semanal.md).
