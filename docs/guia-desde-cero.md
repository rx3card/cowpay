# Vamos a construir nuestra primera pantalla de CowPay

> **Actualización del 27 de noviembre:** el alcance vigente incorpora backend, base de datos, accesos y CRUD. Este documento conserva la explicación o planificación inicial de frontend; sus restricciones de «solo frontend» no se aplican al nuevo mínimo. Antes de tomar una tarea consultamos [el plan de backend y entrega](plan-backend-y-entrega.md).


Esta guía es para quienes ya hemos practicado HTML y CSS y estamos empezando con React y Next.js. Vamos por partes: primero entendemos una idea, después hacemos un cambio pequeño y comprobamos el resultado. No necesitamos memorizar toda la estructura antes de empezar.

[Volver al inicio del proyecto](../README.md). Antes de practicar, seguimos la instalación del README y abrimos la aplicación.

La base ya está preparada en la copia de trabajo. Los ejemplos nos sirven para entenderla y practicar; después cada uno desarrolla su pantalla en su rama. Para descargarla esperamos que el PR de estructura esté integrado en main.

## Nuestro recorrido

1. Qué ocurre al abrir una página.
2. Las herramientas, una a una.
3. Los archivos sin palabras complicadas.
4. Cómo preparamos y abrimos la aplicación.
5. Nuestra primera página de React.
6. Nuestra pantalla vive fuera de las rutas.
7. La ruta que muestra esa pantalla.
8. Cómo pasamos de una pantalla a otra.
9. Imágenes, logos y otros recursos.
10. Reutilizamos una tarjeta sin copiarla cinco veces.
11. Cómo leemos Figma para escribir la pantalla.
12. Lo de las rutas no impide construir backend.
13. Una ruta administrativa no es una contraseña.
14. Cómo entregamos la primera práctica.
15. Nuestra primera meta.

## 1. Qué ocurre al abrir una página

Una dirección como `http://localhost:3000/mesero/mesas` tiene varias partes:

- `http://`: el protocolo de comunicación de este ejemplo local.
- `localhost`: nuestra propia computadora. No es un servidor público.
- `3000`: el puerto por el que responde la aplicación en desarrollo.
- `/mesero/mesas`: la ruta que estamos solicitando.

El navegador pide esa dirección y la aplicación decide qué devolver. Una ruta puede devolver una página para una persona o datos para otro programa.

**Frontend** es la interfaz que usamos: el menú, las tarjetas, los campos y las pantallas. **Backend** es el código que procesa operaciones en el servidor: comprobar una sesión, guardar un pedido o consultar la base de datos. **Base de datos** es donde persistimos información para recuperarla después.

Ahora vamos a construir el frontend con ejemplos fijos. Todavía no vamos a crear pedidos reales ni validar formularios. Podemos pulsar un enlace y pasar de una pantalla de ejemplo a otra.

## 2. Las herramientas, una a una

| Nombre | Qué hace | Cómo lo reconocemos en nuestro trabajo |
| --- | --- | --- |
| HTML | Describe el contenido | `<h1>`, `<p>`, `<article>`, `<form>` |
| CSS | Define cómo se ve | Colores, márgenes, grid, flex y media queries |
| JavaScript | Permite escribir comportamiento y transformar datos | Variables, funciones, arreglos y eventos |
| React | Nos permite organizar la interfaz en componentes | Una tarjeta o página escrita como una función |
| TypeScript | Añade información de tipos a JavaScript | Indicamos que `name` es texto o `price` un número |
| Next.js | Organiza una aplicación React, sus páginas y código de servidor | Reconoce archivos como `page.tsx` y `route.ts` |
| Node.js | Ejecuta JavaScript fuera del navegador | Ejecuta el servidor de desarrollo y las herramientas |
| pnpm | Instala bibliotecas y ejecuta nuestros scripts | `pnpm install`, `pnpm dev` |
| Git | Guarda versiones del código | `git add`, `git commit` |
| GitHub | Aloja el repositorio y nuestras propuestas de cambios | Forks y Pull Requests |
| Jira | Organiza las tareas | KAN-31, responsable, fecha, estado y evidencia |

React no reemplaza HTML y CSS. Seguimos usando lo que conocemos; aprendemos a organizarlo en piezas.

## 3. Los archivos sin palabras complicadas

Vamos a tener una sola aplicación dentro de `cowpay`:

```text
cowpay/
├── README.md
├── docs/
├── package.json
├── pnpm-lock.yaml
├── node_modules/
├── public/
└── src/
```

- `README.md`: nuestra explicación de cómo trabajar.
- `docs/`: guías, tareas y diseño de las rutas.
- `package.json`: una lista de bibliotecas y comandos. No contiene todas esas bibliotecas dentro.
- `pnpm-lock.yaml`: registra las versiones concretas que acordamos instalar.
- `node_modules/`: el código de bibliotecas que pnpm descarga. No escribimos nuestras pantallas aquí.
- `public/`: imágenes, logos y recursos que el navegador puede pedir.
- `src/`: nuestro código.

Antes teníamos `apps/web` porque se había preparado una estructura para varias aplicaciones. Para esta etapa no la necesitamos. **No hay que aprender monorepositorios para construir nuestra pantalla.**

En nuestro proyecto habrá un `node_modules` en la raíz. Puede contener una carpeta `.pnpm`: es la organización interna del gestor, no otra aplicación. No hace falta abrirla. Al clonar, pnpm vuelve a instalar las dependencias; no subimos esa carpeta a GitHub.

## 4. Cómo preparamos y abrimos la aplicación

Primero seguimos la [instalación en Windows del README](../README.md#4-qué-debemos-instalar-en-windows). Ahí están los enlaces, pasos y comprobaciones de Node.js, pnpm, Git y VS Code.

Yo preparo nuestra única base dentro de `cowpay`, siguiendo [Preparar la base](preparar-base.md). No creamos otra aplicación por compañero. Esa guía termina con el servidor funcionando y explica los archivos mínimos; el siguiente capítulo de esta guía empieza con la página que veremos ahí.

Cuando la base esté en GitHub, la descargamos como indica el README. Desde la carpeta que contiene `package.json` ejecutamos:

```powershell
pnpm install
pnpm dev
```

`install` descarga las bibliotecas; `dev` ejecuta el comando de desarrollo definido en `package.json`. Abrimos la dirección que indique la terminal, normalmente `http://localhost:3000`. Si el puerto 3000 está ocupado, puede mostrar otro. Detenemos el servidor con Ctrl+C.

Si no encontramos `package.json`, comprobamos la carpeta con `Get-Location` y sus archivos con `dir` en PowerShell. También puede faltar descargar la base nueva. No intentamos arreglarlo generando una aplicación diferente. El README explica por qué `--frozen-lockfile` queda para las comprobaciones automáticas, no para nuestros primeros pasos.

## 5. Nuestra primera página de React

En nuestra base, Next.js reconoce `src/app/(publico)/page.tsx` como la ruta de inicio. El grupo `(publico)` no forma parte de la URL. El componente de pantalla está en `src/features/publico/pages/InicioPublicoPage.tsx`. Un ejemplo pequeño:

```tsx
export default function HomePage() {
  return (
    <main>
      <h1>CowPay</h1>
      <p>Vamos a construir nuestro menú digital.</p>
    </main>
  );
}
```

Vamos a leerlo:

- `function HomePage()` define una función llamada HomePage.
- `return` indica qué estructura va a mostrar.
- `<main>`, `<h1>` y `<p>` se parecen al HTML que ya conocemos.
- `export default` permite que Next.js utilice esa función como la página de este archivo.
- `.tsx` permite escribir TypeScript con JSX.

**JSX** es la forma de describir nuestra interfaz dentro del código de React. Se parece a HTML, pero tiene diferencias: usamos `className` en lugar de `class`, cerramos etiquetas como `<img />` y colocamos valores de JavaScript entre llaves.

### El JavaScript que necesitamos en este primer ejemplo

React no nos evita aprender JavaScript. Vamos incorporando sus ideas cuando las usamos:

```tsx
const nombre = "CowPay";

function obtenerSaludo(nombre: string) {
  return `Bienvenidos a ${nombre}`;
}
```

`const` guarda un valor que no vamos a reasignar. `function` declara una función: un bloque al que podemos pasar datos y pedirle un resultado. `nombre: string` indica que el dato es texto; esa anotación es TypeScript. `return` devuelve el resultado. En la página podemos escribir `<h1>{obtenerSaludo(nombre)}</h1>` para mostrarlo. Este bloque es una práctica para añadir antes del componente, no otro archivo obligatorio.

`import` trae algo de otro archivo o biblioteca. `export` permite utilizar una función desde otro archivo. Si escribimos `export function MesasPage`, la importamos como `{ MesasPage }`; si escribimos `export default function HomePage`, la importación no lleva esas llaves. El nombre de la función se lo damos nosotros; los nombres especiales `page.tsx` y `layout.tsx` los reconoce Next.js.

Empezamos mostrando texto y datos fijos. No necesitamos programar formularios ni usar estado para maquetar estas primeras pantallas. Cuando una pieza necesite eventos del navegador, practicaremos esa interacción en un componente pequeño.

Práctica: cambiamos el texto del párrafo, guardamos y miramos el navegador. El servidor de desarrollo normalmente actualiza la pantalla sin que reiniciemos todo.

Un error rojo no significa que perdimos el proyecto: leemos el archivo y la línea que señala, revisamos etiquetas y paréntesis y guardamos de nuevo.

## 6. Nuestra pantalla vive fuera de las rutas

Para que no tengamos que repartir archivos de rutas entre todos, vamos a construir las pantallas en una carpeta propia. Usemos el ejemplo del mesero:

```text
src/features/mesero/
├── pages/
│   └── MesasPage.tsx
└── styles/
    └── MesasPage.module.css
```

`features` significa áreas o funcionalidades. Podríamos llamarla de otra manera, pero acordamos este nombre. **Next.js no convierte esta carpeta en una URL.** `pages` dentro de `features` es una carpeta normal nuestra, no el Pages Router de Next.js.

En `MesasPage.tsx`:

```tsx
import styles from '../styles/MesasPage.module.css';

export function MesasPage() {
  return (
    <main className={styles.page}>
      <h1>Mis mesas</h1>
      <p>Estas son las mesas de nuestro ejemplo.</p>
      <article className={styles.card}>
        <h2>Mesa 1</h2>
        <p>Ocupada; 3 comensales</p>
      </article>
    </main>
  );
}
```

En `src/features/mesero/styles/MesasPage.module.css`:

```css
.page {
  padding: 24px;
  background: #f8fafc;
  min-height: 100vh;
}

.card {
  max-width: 360px;
  padding: 16px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
}

@media (max-width: 600px) {
  .page {
    padding: 16px;
  }
}
```

Esto sigue siendo CSS normal. La terminación `.module.css` hace que Next.js prepare nombres de clase aislados. `import styles` nos da un objeto con nuestras clases; `styles.card` se refiere a `.card` de este archivo. Las llaves en `className={styles.card}` insertan ese valor.

No necesitamos Tailwind para hacerlo. Más adelante, si vemos que nos ayuda, podemos incorporarlo con un acuerdo del equipo.

## 7. La ruta que muestra esa pantalla

Ahora conectamos la pantalla con una dirección. **Esta pequeña parte la preparo yo en la base.**

Archivo `src/app/mesero/mesas/page.tsx`:

```tsx
import { MesasPage } from '@/features/mesero/pages/MesasPage';

export default function Page() {
  return <MesasPage />;
}
```

Abrimos `/mesero/mesas` y vemos la pantalla anterior.

La ruta solo elige qué componente mostrar. El HTML/JSX y CSS de la pantalla están en el área del mesero. Samuel puede seguir cambiando `MesasPage.tsx` y su CSS sin editar este archivo de ruta.

`@/` es un atajo hacia `src/` que configuramos al crear la base. Así no escribimos varios `../../..` para localizar la pantalla.

El recorrido completo es:

```text
Navegador pide /mesero/mesas
              ↓
Next.js encuentra src/app/mesero/mesas/page.tsx
              ↓
Ese archivo muestra MesasPage
              ↓
MesasPage usa su CSS y los datos de ejemplo
```

No todas las carpetas son rutas. En App Router, `src/app` es el punto especial; `features`, `components` y las carpetas de CSS son organización nuestra. Dentro de `app`, una página necesita `page.tsx`; un endpoint necesita `route.ts`.

Podemos agrupar páginas con carpetas `(publico)` que no añaden su nombre a la URL y usar `_components` para excluir una carpeta del enrutamiento. No necesitamos usar estas dos opciones para aprender la primera pantalla.

## 8. Cómo pasamos de una pantalla a otra

Para navegar dentro de la aplicación usamos `Link`:

```tsx
import Link from 'next/link';

export function AccesoMeseroPage() {
  return (
    <main>
      <h1>Ingreso del mesero</h1>
      <p>Acceso de ejemplo para recorrer el diseño.</p>
      <Link href="/mesero/mesas">Ver mis mesas</Link>
    </main>
  );
}
```

Por ahora el enlace nos lleva a la siguiente pantalla sin comprobar usuario y contraseña. Es válido para nuestro frontend visual. Enlazar dos pantallas no implementa una autenticación real.

Vamos a preparar `src/config/routes.ts` para no repetir las mismas direcciones por todos lados:

```ts
export const routes = {
  home: '/',
  waiterTables: '/mesero/mesas',
};
```

Podemos usar `href={routes.waiterTables}` después de importar `routes`. **Este objeto no crea rutas**: solo guarda sus direcciones para construir enlaces. Los archivos `page.tsx` siguen siendo necesarios. No vamos a añadir React Router encima de Next.js para reemplazarlos.

Una dirección con un dato variable, como `/r/arepique`, utiliza una carpeta `[slug]`. `slug` es el nombre corto que identifica al restaurante en la URL. Al navegar escribimos `arepique`, no los corchetes. Voy a preparar estos ejemplos después de que dominemos dos páginas sencillas; no necesitamos empezar por rutas dinámicas.

## 9. Imágenes, logos y otros recursos

Guardamos una imagen de ejemplo así:

```text
public/media/mesero/mesa-ejemplo.png
```

Desde la pantalla:

```tsx
<img
  src="/media/mesero/mesa-ejemplo.png"
  alt="Mesa de nuestro restaurante de ejemplo"
  width={320}
  height={180}
/>
```

No ponemos `public` en la URL: esa carpeta se sirve desde la raíz. Podemos darle `max-width: 100%` y `height: auto` desde una clase para conservar su proporción en celular. Si la configuración del proyecto recomienda `next/image`, vamos a dejar un ejemplo compartido y utilizarlo de manera consistente; no necesitamos instalar una biblioteca para añadir imágenes.

Cada área tiene su carpeta en `public/media`. El logo común vive en `compartido`. No usamos rutas de nuestra computadora como `/home/...` dentro de `src` de una imagen web, ni dejamos enlaces temporales del Figma como recurso final. Descargamos los archivos que tengamos permiso de usar y conservamos nombres claros.

Todo lo que guardemos en `public` puede solicitarse públicamente: ahí no van claves ni documentos privados. Los vídeos se comprimen antes de subirlos y solo los añadimos si hacen falta en la pantalla.

## 10. Reutilizamos una tarjeta sin copiarla cinco veces

Cuando una pieza se repite, la hacemos componente. Un ejemplo sin CSS para concentrarnos en los datos:

```tsx
type MesaCardProps = {
  number: number;
  status: string;
};

export function MesaCard({ number, status }: MesaCardProps) {
  return (
    <article>
      <h2>Mesa {number}</h2>
      <p>{status}</p>
    </article>
  );
}
```

`MesaCardProps` describe los datos que recibe el componente. `number: number` indica un número y `status: string`, texto. Los valores recibidos se llaman **props**. Dentro de JSX, `{number}` muestra el valor que recibimos.

Podemos usarlo en una pantalla, después de importarlo desde su archivo:

```tsx
<section>
  <MesaCard number={1} status="Ocupada" />
  <MesaCard number={2} status="Disponible" />
</section>
```

La ventaja: si cambiamos el borde o la estructura de `MesaCard`, todas las tarjetas que la usan reciben ese cambio. Los datos pueden ser distintos, pero la pieza se escribe una sola vez. En React los nombres de nuestros componentes empiezan con mayúscula: `<MesaCard />` es nuestro componente; `<article>` es una etiqueta del navegador.

Después de probar dos tarjetas, podemos mostrar una lista. Este ejemplo sustituye el contenido de `MesasPage.tsx`; guardamos la tarjeta anterior en `src/features/mesero/components/MesaCard.tsx`:

```tsx
import { MesaCard } from "../components/MesaCard";

const mesas = [
  { id: "mesa-1", number: 1, status: "Ocupada" },
  { id: "mesa-2", number: 2, status: "Disponible" },
];

export function MesasPage() {
  return (
    <main>
      <h1>Mesas</h1>
      {mesas.map((mesa) => (
        <MesaCard
          key={mesa.id}
          number={mesa.number}
          status={mesa.status}
        />
      ))}
    </main>
  );
}
```

`mesas` es un arreglo: una lista de objetos. Cada objeto reúne los datos de una mesa. `map` recorre la lista y devuelve una tarjeta por elemento. `key` es una identificación estable que React utiliza para distinguir cada tarjeta; no es un texto visible ni una propiedad que recibimos como las otras.

**Práctica:** añadimos una tercera mesa al arreglo. Debe aparecer otra tarjeta sin copiar todo el HTML. Cambiamos después el título dentro de `MesaCard` y comprobamos que cambia en las tres. Seguimos usando datos inventados; no necesitamos una base de datos ni formularios para aprender esto.

Los componentes propios quedan dentro de su área. Una pieza que realmente utilizamos todos puede pasar a `src/components/ui`, después de acordarlo. No creamos una biblioteca completa antes de maquetar la primera pantalla.

## 11. Cómo leemos Figma para escribir la pantalla

Antes de programar elegimos una pantalla concreta y anotamos:

1. Qué título y contenido muestra.
2. Qué bloques tiene: navegación, encabezado, tarjetas, tabla o formulario.
3. Qué partes se repiten y pueden ser componentes.
4. Qué colores y separaciones comunes vamos a usar.
5. Qué imágenes necesitamos exportar.
6. A qué pantalla lleva cada enlace.

No empezamos copiando coordenadas absolutas de todos los elementos. Para una fila usamos flexbox; para una cuadrícula de tarjetas podemos usar grid. El diseño debe acomodarse a pantallas distintas, no solo a los 1440 píxeles del dibujo.

Primera pasada: estructura y textos. Segunda: estilos y recursos. Tercera: adaptación a celular y enlaces. En cada pasada guardamos y miramos el navegador.

Si una pantalla del comensal no existe, primero voy a dibujar un boceto sencillo coherente con las otras. Lo anotamos en KAN-6 y no fingimos que la referencia ya estaba terminada.

## 12. Lo de las rutas no impide construir backend

**Sí podemos escribir backend con Next.js.** El archivo de ruta es una entrada; las funciones que hacen el trabajo las escribimos nosotros en otros archivos. El framework no inventa nuestras reglas de pedidos, permisos, cuentas o inventario.

Ejemplo educativo para una etapa posterior, **no es una tarea de este frontend**:

```ts
// src/app/api/saludo/route.ts
export async function GET() {
  return Response.json({ message: 'Hola desde el servidor' });
}
```

Si abrimos `/api/saludo`, devuelve datos JSON, no una pantalla. `GET` corresponde al método HTTP de consulta. `POST` se usa habitualmente para enviar una operación. En la etapa real necesitaremos revisar entradas, permisos y demás reglas, pero no las implementamos para este ejemplo visual.

Podemos tener funciones en `src/server/orders` y llamarlas desde un `route.ts` muy pequeño. PostgreSQL no necesita ser público ni estar en el navegador para que podamos acceder a él desde el servidor.

En Express escribiríamos la asociación con código, por ejemplo `app.get('/api/saludo', handler)`. En Next.js lo indica el archivo `src/app/api/saludo/route.ts`. **Los dos reciben peticiones y ejecutan funciones; cambia cómo declaramos la entrada.**

| Decisión | Next.js | React con Vite + Express |
| --- | --- | --- |
| Pantallas | React dentro de Next.js | React dentro de la aplicación Vite |
| Rutas de pantalla | Archivos `page.tsx` | Normalmente se configura un router de React |
| API | Archivos `route.ts` que llaman nuestras funciones | `app.get`, `app.post` y routers de Express |
| Organización inicial | Un proyecto puede cubrir las dos partes | Habitualmente preparamos frontend, backend y su conexión |
| Lo que aprendemos | Convenciones de Next.js | Router del frontend y configuración del servidor, además de React |

Express no es peor ni Next.js es la única alternativa. Para esta entrega vamos a **seguir con Next.js y dejar pequeña la capa de rutas**. Así practicamos una base y aprovechamos el mismo proyecto más adelante. Si la prioridad del curso fuera escribir un servidor independiente con rutas explícitas, React + Express sería razonable, pero cambiar ahora requiere rehacer la planificación y el arranque. Vamos a practicar primero esa separación entre ruta y pantalla para decidir con una base que ya entendamos.

Next.js tampoco es programar sin framework “desde cero”: ya nos resuelve infraestructura. Express es otro framework, más pequeño, y también nos da infraestructura. En ambos escribimos nuestro negocio; si quisiéramos HTTP sin framework sería otro ejercicio, no una necesidad de CowPay.

## 13. Una ruta administrativa no es una contraseña

Los nombres acordados son `/admin` y `/superadmin`. No los enlazamos desde la navegación pública y usaremos `noindex` para pedir que no aparezcan en buscadores. Esos nombres no son secretos: se pueden descubrir en el código o en las peticiones.

En el frontend actual solo mostramos pantallas. Cuando implementemos el backend, el acceso dependerá de la sesión y los permisos comprobados en servidor. Cambiar `/admin` por un nombre largo no resuelve esa parte.

## 14. Cómo entregamos la primera práctica

Elegimos una subtarea pequeña, actualizamos nuestra rama y trabajamos en nuestros archivos. Para el ejemplo de mesas:

- Ruta que voy a preparar: `src/app/mesero/mesas/page.tsx`.
- Pantalla de Samuel: `src/features/mesero/pages/MesasPage.tsx`.
- Sus estilos: `src/features/mesero/styles/MesasPage.module.css`.
- Sus recursos: `public/media/mesero/`.

Al terminar, abrimos la ruta, miramos celular y escritorio y comprobamos sus enlaces. Ejecutamos `pnpm build` y `pnpm lint` si ese script está preparado. Esto detecta algunos problemas de código; no comprueba que la pantalla sea igual a Figma.

Seguimos la [guía de trabajo colaborativo](trabajo-colaborativo.md) para guardar el cambio, subirlo y abrir el PR. Los compañeros lo hacen desde sus forks; yo, Oscar, desde una rama del repositorio principal. Usamos la clave real de Jira en nuestra rama y en el título del PR. La guía distingue empezar una tarea nueva de continuar la del día anterior y explica qué hacer si aparece un error.

En Jira: En curso al empezar; En revisión con el PR y las capturas; Hecho cuando revisamos e integramos la pantalla. Un push no completa una tarea por sí solo.

## 15. Nuestra primera meta

Antes de intentar todo el módulo, cada uno consigue lo siguiente:

- Abrir la aplicación.
- Identificar el archivo de su pantalla.
- Cambiar un título.
- Cambiar un color en su CSS.
- Añadir una imagen desde su carpeta.
- Enlazar a otra pantalla preparada.
- Subir ese cambio pequeño mediante PR.

Cuando podamos hacer esto y explicarlo, seguimos con las secciones de nuestra pantalla. Las dudas las revisamos presencialmente dentro del horario acordado en el SENA.

## Documentación para consultar cuando la necesitemos

- [Instalación de Next.js](https://nextjs.org/docs/app/getting-started/installation).
- [Páginas y layouts](https://nextjs.org/docs/app/getting-started/layouts-and-pages).
- [Organización del proyecto](https://nextjs.org/docs/app/getting-started/project-structure).
- [CSS en Next.js](https://nextjs.org/docs/app/getting-started/css).
- [Route Handlers de Next.js](https://nextjs.org/docs/app/getting-started/route-handlers).
- [Rutas explícitas en Express](https://expressjs.com/en/guide/routing/).
- [Instalación de pnpm](https://pnpm.io/installation).

**Siguiente paso:** elegimos nuestra primera pantalla en el [mapa de rutas](rutas.md), buscamos su subtarea en el [plan del equipo](plan-equipo.md) y seguimos el flujo de [Jira y GitHub](jira-y-github.md).

**Para practicar con nuestros propios archivos:** seguimos los [ejercicios prácticos](ejercicios-practicos.md). Empiezan en HTML/CSS y después pasan a React, componentes y una primera contribución revisada.
