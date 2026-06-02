Proyecto productivo *(Cowpay)*

```
cowpay/ (Raíz del repositorio Git)
├── .git/
├── docs/                      ← Documentación y diseño
│   ├── UML/
│   ├── Scrum/
│   ├── prototipado/           ← Designs
│   ├── Historias de campo.docx
│   └── CowPay.pdf
├── src/                       ← Código fuente de la app real
│   ├── index.html
│   ├── css/
│   └── img/
├── README.md
└── .gitignore
```

## Servidor

Para iniciar el servidor local:
```bash
npx serve -p 3000 src
```

Para inicar un servidor público-temporal:
```bash
npx serve -l tcp://0.0.0.0:3000 src
```