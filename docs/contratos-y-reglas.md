# Cómo dejamos el frontend preparado para conectar datos después

> **Actualización del 27 de noviembre:** el alcance vigente incorpora backend, base de datos, accesos y CRUD. Este documento conserva la explicación o planificación inicial de frontend; sus restricciones de «solo frontend» no se aplican al nuevo mínimo. Antes de tomar una tarea consultamos [el plan de backend y entrega](plan-backend-y-entrega.md).


[Volver al README](../README.md). Consultamos estos acuerdos después de aprender componentes y datos en la [guía teórica y práctica](guia-desde-cero.md). No es una tarea de backend para esta entrega.

## Lo que estamos haciendo ahora

Solo vamos a maquetar las interfaces y conectar su navegación. Podemos usar datos fijos y formularios visuales. No necesitamos validar entradas, guardar cambios, calcular cuentas ni implementar pedidos o pagos.

Para evitar rehacerlo todo después, vamos a separar tres cosas:

- **Pantalla:** estructura y presentación en `src/features/<area>/pages`.
- **Datos de ejemplo:** un archivo del área o `src/mocks` si los compartimos.
- **Funciones para obtener datos:** las añadimos cuando hagan falta; al principio pueden devolver un ejemplo.

No vamos a pedir a cada compañero que programe una API falsa antes de empezar a dibujar su pantalla. Un dato fijo importado desde un archivo es suficiente. Más adelante cambiamos el origen y ajustamos los componentes al contrato real.

## Ejemplo compartido

Usamos un restaurante con slug `arepique`, mesa de ejemplo 4 y código de demostración `AX7K2`. Los platos y sus nombres salen de una lista de ejemplo acordada, no de cinco listas incompatibles. Los identificadores son cadenas sencillas y los precios mostrados son inventados.

Para una cuenta visual podemos mostrar consumo y partes ya calculadas. El botón de pagar puede llevar a una confirmación preparada. No vamos a capturar tarjetas ni fingir una transacción real.

## Qué no mezclamos con la interfaz

Los archivos de CSS solo contienen estilos. Los componentes muestran datos y enlaces. Las imágenes y multimedia están en `public/media/<area>`; todo lo de `public` se considera público. No guardar credenciales ahí.

Los enlaces actuales utilizan las direcciones que aparecen en el mapa. Todavía no existe `src/config/routes.ts`; no hace falta crearlo para maquetar. Si después centralizamos direcciones, lo estudiaremos y coordinaremos sin cambiar el sistema de rutas de Next.js.

No hacemos llamadas a una base de datos desde el navegador. En la etapa de backend decidiremos esquemas definitivos, permisos, sesiones y operaciones, y conectaremos las pantallas de una en una. Tener un frontend ordenado facilita ese trabajo, pero no lo hace automáticamente.

## Solo para la etapa futura de backend

Next.js permite alojar lógica de servidor en el mismo proyecto; no necesitamos Express para empezar. PostgreSQL y Prisma quedan como opción acordada de persistencia para esa etapa. Antes de implementarla tendremos que confirmar el flujo de pedidos, apertura de sesiones de mesa, permisos, inventario y división de cuenta.

El servidor será responsable de autenticación y autorización, precios y cálculos, estados de pedidos y pagos y aislamiento por restaurante. La ruta de administración no será segura por tener un nombre menos obvio. Nada de esto se exige para entregar las pantallas visuales de este periodo.

## Diseño que todavía falta

Mi área de comensal tiene huecos en Figma. Voy a anotar qué existe y qué falta, dibujar una versión sencilla coherente y acordar la navegación mínima antes de llevar esa parte a código. La tarea de Jira es KAN-6. Si aparece otro hueco, lo registramos en su subtarea en vez de asumir un diseño terminado.

**Al trabajar:** mantenemos estos acuerdos y consultamos el [mapa de rutas](rutas.md). Si necesitamos cambiar un dato compartido, lo coordinamos en la tarea antes de modificarlo.
