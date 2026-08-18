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

#### Cómo trabajar con git & github

```
# 1. Debe de estar en main y tener actualizo el repositorio
git checkout main
git pull

# 2. Crea tu propia rama
git checkout -b nombre-de-tu-rama

# 3. Trabaja en ella... (creas archivos, editas, lo que sea)

# 4. Guarda los cambios
git add .
git commit -m "Descripción de tus cambios"

# 5. Sube TU RAMA (no main)
git push origin nombre-de-tu-rama

# 6. En GitHub: Compare & pull request → Create pull request
# 7. Yo lo reviso y apruebo
# 8. Botón Merge pull request

### Antes de empezar siempre se debe hacer lo siguiente para evitar conflictos.
git checkout main       # voy a la rama oficial
git pull                # bajo lo nuevo que hicieron los demás
git checkout su-rama    # vuelvo a lo mío
git merge main          # meto lo de ellos en lo mío
```