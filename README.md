# Portafolio de Sharon Araya

Portafolio personal desarrollado con HTML, CSS y JavaScript. Presenta información académica y profesional, habilidades, proyectos y medios de contacto.

## Tecnologías

- HTML5
- CSS3
- JavaScript sin frameworks

No requiere instalación de dependencias ni proceso de compilación.


## Páginas

- `index.html`: inicio y descarga del CV.
- `pages/sobre-mi.html`: perfil personal.
- `pages/habilidades.html`: tecnologías y niveles.
- `pages/proyectos.html`: proyectos desarrollados.
- `pages/educacion.html`: estudios y certificaciones.
- `pages/experiencia.html`: práctica profesional en DHL Express.
- `pages/contacto.html`: correo, redes sociales y formulario.

## Estructura

```text
Shary09/
├── css/                 Estilos globales y hojas por página
├── documents/           CV en PDF
├── images/              Imágenes del portafolio
├── includes/
│   └── header.html      Marcado compartido de la navegación
├── js/
│   ├── header-loader.js  Carga y configura la navegación
│   └── script.js         Interacciones del sitio
├── pages/                Páginas secundarias
└── index.html            Página de inicio
```

Cada página secundaria tiene su propia hoja CSS. `css/header.css` contiene los estilos compartidos de la navegación y `css/style.css` los estilos de Inicio.

## Contacto

El formulario abre un mensaje nuevo en Gmail con el asunto **“Propuesta de colaboración”**. No envía el correo automáticamente: la persona debe revisar y enviar el mensaje desde Gmail. El sitio no utiliza un backend.