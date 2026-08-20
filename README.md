## Cowpay

### Cambios
Se creo `/apps` en la que se encuentra /web.
```
pnpm create next-app@latest web
```

### Estructura del proyecto

```
cowpay/ (Raíz del repositorio Git)
├── .git/
├── docs/                      ← Documentación
├── README.md
└── .gitignore
```

## Servidor

Para iniciar el servidor local:
```bash
npx serve -p 3000 src
```

Para iniciar un servidor público-temporal:
```bash
ssh -R 80:localhost:3000 nokey@localhost.run
ó
npx serve -l tcp://0.0.0.0:3000 src
```

### Instalación

```
git clone <URL>
cd cowpay/
pnpm install

#para iniciar el servidor en modo desarrollo
pnpm dev

#para compilar el proyecto
pnpm build
```


### Cómo trabajar con Git & GitHub

Cada debe de tener su **fork** (su propia copia) y propone sus cambios al
repositorio del equipo mediante una **Pull Requests**.

---

###### 1. Configuración inicial (una sola vez)

1. Entra a https://github.com/rx3card/cowpay y presiona **Fork**.
2. Clona tu fork (cambia `SU_USUARIO`):

```bash
git clone https://github.com/SU_USUARIO/cowpay.git
cd cowpay
pnpm install
```

3. Conecta el repositorio del equipo con el nombre `upstream`:

```bash
git remote add upstream https://github.com/rx3card/cowpay.git
```

4. Verifica:

```bash
git remote -v
```

Debe aparecer `origin` (tu fork) y `upstream` (el del equipo).

**Lo más importante de entender:**
`git pull` solo trae cambios de TU fork, y a tu fork nadie más sube NADA.
Para traer lo del equipo se usa `upstream`. Sin esto, van a trabajar sobre
una versión antigua sin darse cuenta.

---

##### 2. TODOS LOS DÍAS, antes de hacer alguna modificación

```bash
git fetch upstream
git merge upstream/main
```

Esto trae lo que el equipo fusionó ayer.
**NUNCA SALTARLO.** Es la causa número uno de conflictos.

---

##### 3. Trabaja y guarda

```bash
git add .
git commit -m "Descripción de sus cambios."
```
---

##### 4. Sube a tu fork

```bash
git push
```

---

##### 5. Abre el Pull Request

**Hacer push NO abre el Pull Request.** Son dos cosas distintas. El push
sube tu trabajo a tu copia, el PR es la solicitud para que entre al proyecto PRINCIPAL.

1. Entra a **tu fork** en GitHub
2. Botón **Contribute** → **Open pull request**
3. Verifica que arriba diga:
   `base: rx3card/cowpay  main`  ←  `head: SU_USUARIO/cowpay  main`
4. Escribe qué hiciste y por qué
5. **Create pull request**

---

##### 6. Cuando fusionen los cambios.

```bash
git fetch upstream
git merge upstream/main
```

---