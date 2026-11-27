# La base de Cowpay y cómo empezamos nuestra parte

> **Actualización del 27 de noviembre:** el alcance vigente incorpora backend, base de datos, accesos y CRUD. Este documento conserva la explicación o planificación inicial de frontend; sus restricciones de «solo frontend» no se aplican al nuevo mínimo. Antes de tomar una tarea consultamos [el plan de backend y entrega](plan-backend-y-entrega.md).


[Volver al README](../README.md). Estado revisado el 20 de noviembre de 2026.

Ya tenemos la estructura para trabajar. Hay 77 rutas P0/P1, pantallas provisionales con responsable, layouts por área y CSS Modules organizados en `styles`. La compilación y TypeScript pasaron. También comprobamos las 77 direcciones con identificadores de ejemplo antes de renombrar las rutas administrativas; después de los cambios de nombres la compilación volvió a pasar.

Este avance todavía necesita su commit, push y PR de estructura para quedar compartido en main. No vamos a pedir a los demás que creen otra base: cuando esté integrado, actualizamos los forks y descargamos esta misma aplicación.

## 1. Qué hacemos al recibir la base

1. Leemos el README y la [guía de colaboración](trabajo-colaborativo.md).
2. Actualizamos nuestra copia desde el repositorio del equipo. Los compañeros usan `upstream`; yo uso `origin`, como explica la guía.
3. Desde `cowpay` ejecutamos `pnpm install` para instalar las bibliotecas y `pnpm dev` para iniciar el servidor.
4. Abrimos la dirección que muestra la terminal. En desarrollo podemos entrar a `/demo` para encontrar las páginas por área y responsable.
5. Elegimos una subtarea y creamos nuestra rama antes de desarrollar. No modificamos main directamente.

Mi equipo utilizó Node.js 26.12.1. El proyecto fija pnpm 12.21.0. Las versiones instaladas de Next.js y React son 16.4.6 y 19.3.1. No necesitamos actualizar paquetes para empezar a maquetar.

## 2. Dónde trabaja cada uno

| Persona | Código de su área | Imágenes propias |
| --- | --- | --- |
| Useche | `src/features/publico` | `public/media/publico` |
| Yo, Oscar | `src/features/comensal` | `public/media/comensal` |
| Samuel | `src/features/mesero` | `public/media/mesero` |
| Evanz | `src/features/cocina` y `src/features/caja` | `public/media/cocina` y `public/media/caja` |
| Palma | `src/features/admin` y `src/features/superadmin` | `public/media/admin` y `public/media/superadmin` |

Dentro de cada área usamos:

```text
features/mesero/
├── pages/       Pantallas completas
├── components/  Piezas reutilizables del área
└── styles/      CSS Modules de ambas
```

`features` significa funcionalidades; aquí agrupamos el código por áreas. Es un nombre elegido por nosotros, no una carpeta especial de rutas. `pages` dentro de features tampoco es el antiguo Pages Router: son nuestros componentes de pantalla.

Un ejemplo real:

```text
src/app/mesero/mesas/page.tsx
src/features/mesero/pages/MesasPage.tsx
src/features/mesero/styles/MesasPage.module.css
```

El primero conecta la dirección con el componente; el segundo muestra el contenido; el tercero contiene sus estilos. Samuel trabaja principalmente en los dos últimos. Si una tarea requiere cambiar la ruta, lo coordinamos.

Desde la pantalla importamos su CSS así:

```tsx
import styles from "../styles/MesasPage.module.css";
```

`../` sube desde pages hasta la carpeta del área y después entra a styles. En los componentes hacemos lo mismo. Los nombres de archivo distinguen mayúsculas de minúsculas: respetamos exactamente la importación.

## 3. Cómo encontramos una página concreta

Buscamos su dirección en el [mapa de rutas](rutas.md). Después abrimos su `page.tsx` dentro de `src/app`: su importación indica exactamente qué archivo de features muestra esa ruta. No tenemos que adivinarlo por el título.

Las pantallas actuales tienen el título, responsable y explicación del contenido. Los detalles de rutas variables también muestran sus identificadores para comprobar que llegan. Eso no significa que las mesas, restaurantes ni operaciones se hayan creado en una base de datos.

P0 es nuestro recorrido mínimo. P1 va después de lo esencial y según capacidad. P2 queda documentado sin programar en esta base. No son palabras de Next.js: son prioridades del equipo.

## 4. Rutas y layouts

Tenemos un layout raíz en `src/app/layout.tsx`. Contiene html, body y el contenido recibido mediante children.

Los layouts de cada área añaden su estructura particular. No duplicamos html y body en ellos. El público tiene su encabezado y footer; el mesero tiene su encabezado y navegación; administración usa su propia estructura.

```text
src/app/
├── layout.tsx
├── (publico)/
│   ├── layout.tsx
│   └── page.tsx
├── (comensal)/
│   ├── layout.tsx
│   ├── comensal/
│   └── r/[slug]/mesa/[code]/
├── mesero/
├── cocina/
├── caja/
├── admin/
└── superadmin/
```

Los nombres entre paréntesis son grupos: no se incluyen en la URL. `(publico)/page.tsx` responde a `/`. No podemos tener otro page.tsx que también resuelva esa misma dirección.

`children` recibe contenido de React; `ReactNode` es el tipo con el que describimos ese contenido. Next.js conecta la página y sus layouts según la ruta. El layout no busca ni importa todas las páginas a mano.

Los menús provisionales de las áreas internas ayudan a comprobar rutas; cada responsable los adapta a su diseño. Tener una ruta no significa añadirla al menú principal. El público conserva Inicio, Restaurantes, Cómo funciona, Planes, Para restaurantes y Quiénes somos, más los accesos de cuenta. Las otras páginas se descubren desde tarjetas, botones o el footer según Figma.

### Ajuste pendiente: separar el acceso del menú de cuenta

Al comenzar el diseño de inicio de sesión detectamos que `/entrar` recibe el encabezado de `(comensal)`, aunque la pantalla de Figma no lo tiene. Este ajuste todavía no está aplicado: no existe el grupo `(acceso)` en la base actual.

En la rama de trabajo del acceso vamos a crear `src/app/(acceso)` y mover allí la carpeta `entrar` completa desde `src/app/(comensal)`. Su dirección seguirá siendo `/entrar`, porque los nombres entre paréntesis no forman parte de la URL. Su pantalla seguirá en `src/features/comensal/pages/EntrarPage.tsx` y su CSS en `src/features/comensal/styles/EntrarPage.module.css`.

No dejamos una copia del mismo page.tsx en ambos grupos: competirían por la misma dirección. Mover solo la ruta a otro grupo del mismo nivel no cambia la profundidad de sus importaciones relativas. Si movemos un archivo a otra profundidad o cambia un nombre, comprobamos sus importaciones.

El acceso seguirá recibiendo el layout raíz, pero no el layout hermano de `(comensal)`. Después revisaremos registro, recuperación y restablecimiento para decidir su agrupación según el diseño. No ocultamos el encabezado con CSS para corregir una agrupación incorrecta.

Este ajuste lo preparo yo, Oscar, en una rama y un PR pequeños. Los compañeros no mueven las mismas carpetas en paralelo. Cuando se integre, actualizan su copia siguiendo la guía de colaboración. Si tienen una rama abierta que toca estos archivos, coordinamos la incorporación y revisamos cualquier conflicto. El mapa de archivos se actualizará cuando el movimiento se haya realizado; no lo presentamos como ya hecho.

## 5. Qué representa /r

Elegimos `r` como abreviatura de restaurante. No tiene un significado especial para Next.js.

- `/r/arepique`: ficha pública del restaurante, asignada actualmente a Useche en el plan.
- `/r/arepique/mesa/AX7K2/menu`: menú del recorrido de mesa, a mi cargo como comensal.

Las dos áreas pueden compartir datos y componentes sin tener que ser la misma pantalla. Si ajustamos el reparto de una ficha concreta, primero lo acordamos y actualizamos la tarea; el prefijo de la URL no determina quién la programa.

`slug` es un identificador legible, como arepique. `[id]`, `[slug]` y `[code]` representan valores variables; no creamos carpetas por cada mesa o restaurante.

En una ruta dinámica, Next.js entrega params como una promesa. `await` obtiene su resultado antes de pasar los valores al componente. La guía teórica y los ejercicios nos ayudan a practicarlo; no copiamos ese patrón sin leer qué propiedades recibe cada pantalla.

## 6. Admin y superadmin

Las direcciones definitivas de la base son `/admin` y `/superadmin`. Sus pantallas están en las áreas con esos mismos nombres dentro de features. El nombre anterior central ya no se utiliza.

Admin corresponde al restaurante. Superadmin corresponde a la operación de Cowpay. Palma desarrolla ambas interfaces; eso es distinto de quién tendrá permisos para utilizarlas.

No enlazamos estas áreas desde el menú público. Sus layouts incluyen noindex. La comprobación de sesión y permisos pertenece a la etapa posterior de backend; el nombre de una dirección no es una contraseña.

## 7. Qué añadimos para revisar la base

### El índice /demo

Está en `src/app/demo/page.tsx`. Reúne enlaces por responsable para revisar el trabajo. Los parámetros de ejemplo ya están sustituidos en los destinos: por ejemplo, el enlace rotulado `/mesero/mesas/[id]` lleva a `/mesero/mesas/4`.

No forma parte del menú del producto. Solo abre en desarrollo con pnpm dev. La condición que contiene compara `process.env.NODE_ENV` con development; en otros modos llama a `notFound()` y devuelve una página no encontrada. Por eso /demo da 404 con pnpm start. `/demo/solicitar` es otra ruta: la solicitud pública de demostración y no depende de ese índice.

### not-found.tsx y notFound()

`not-found.tsx` define el mensaje y enlace de regreso para una página no encontrada. No crea una URL llamada /not-found. `notFound()` es la función de Next.js que solicita esa respuesta. 404 significa que el recurso no se encontró.

### metadata y robots

Los layouts internos contienen esta configuración:

```tsx
export const metadata = {
  robots: { index: false, follow: false },
};
```

`metadata` describe información de la página. `robots` indica a los buscadores que no la indexen ni sigan sus enlaces. No modifica el menú ni restringe el acceso de las personas. Lo aplicamos también al índice local de revisión.

Estas piezas fueron añadidas al preparar la estructura y quedan documentadas para poder revisarlas y aprenderlas, no para exigir que todos las dominen antes de empezar a maquetar.

## 8. Recursos compartidos

El logo se guarda en `public/media/compartido`. Una imagen ahí se referencia como `/media/compartido/nombre.png`, sin escribir public en la dirección. Cada área utiliza su propia carpeta para imágenes específicas.

Los archivos `.gitkeep` conservan en Git las carpetas que todavía están vacías. Cuando contengan archivos reales podemos retirarlos. No son configuración de Next.js.

Los CSS Modules van en styles de cada área; los colores comunes están en `src/app/globals.css`, dentro de :root. Se leen mediante `var(--nombre-de-variable)`. La fuente global actual sigue siendo Arial: todavía no se configuró una familia distinta de Figma.

`src/components/ui` queda reservado para las piezas que realmente compartamos. No hay que esperar a una biblioteca completa para empezar una pantalla ni copiar componentes de otra área sin coordinarlo.

## 9. Qué sigue pendiente de compartir

- Guardar, subir y revisar el PR de la estructura actual; los comandos de Git los ejecuto yo.
- Comprobar con un compañero su primera instalación y apertura de una ruta.
- Completar los componentes y datos compartidos que necesitemos, sin bloquear el primer avance de cada área.
- Elegir la tipografía definitiva y ajustar los bocetos faltantes del comensal.
- Construir las interfaces de Figma: las páginas creadas ahora solo preparan sus lugares de trabajo.

El periodo reprogramado empieza el 21 de noviembre. La primera jornada de apoyo es el lunes 23; el jueves 26 revisamos el primer avance pequeño. El detalle está en el [plan del equipo](plan-equipo.md). Seguimos entregando por PR y dejando evidencia en Jira, como explica la [guía de colaboración](trabajo-colaborativo.md).
