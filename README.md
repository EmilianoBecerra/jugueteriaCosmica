# Juguetería Cósmica

E-commerce de juguetes con temática espacial. Permite explorar el catálogo de productos, gestionar un carrito de compras y registrar pedidos. El panel de administración permite agregar y gestionar productos con imágenes en la nube.

---

## Stack tecnológico

| Capa | Tecnologías |
|------|-------------|
| **Backend** | Node.js 22, Express 5, Mongoose 8 |
| **Base de datos** | MongoDB Atlas |
| **Almacenamiento de imágenes** | Cloudinary + multer-storage-cloudinary |
| **Template engine** | Express Handlebars (.hbs) |
| **Frontend** | Vanilla JS (ES Modules), Handlebars.js (CDN) |
| **Estilos** | SASS/SCSS → CSS |
| **Dev tools** | nodemon, sass CLI |

---

## Estructura del proyecto

```
jugueteriaCosmica/
├── src/                        # Servidor (Node.js/Express)
│   ├── index.js                # Entry point
│   ├── Routers/Router.js       # Router principal
│   ├── modules/
│   │   ├── Product/            # CRUD de productos
│   │   └── Cart/               # Lógica del carrito
│   ├── middlewares/file.js     # Upload de imágenes (Multer)
│   ├── services/cloudinaryConfig.js
│   └── views/index.hbs         # Template base
├── public/                     # Frontend (client-side)
│   ├── js/
│   │   ├── main.js             # SPA routing e inicialización
│   │   ├── modules/
│   │   │   ├── spaLibrary/     # Router SPA personalizado
│   │   │   ├── cart/           # UI del carrito
│   │   │   └── events/         # Handlers por página
│   │   └── templates/          # Templates Handlebars client-side
│   └── css/main.css            # Estilos compilados
└── resources/sass/estilos.scss # Fuente SASS
```

---

## Funcionalidades

### Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Home con carrusel de imágenes y testimonios |
| `/productos` | Catálogo de productos con botón "Agregar al carrito" |
| `/alta` | Formulario para registrar nuevos productos |
| `/pagar` | Resumen del carrito y finalización de compra |
| `/contacto` | Formulario de contacto |

### Carrito de compras
- Almacenamiento en `localStorage`
- Agregar, quitar y modificar cantidades
- Cálculo de total en tiempo real
- Badge con cantidad de ítems
- Modal de visualización

### Gestión de productos
- Formulario con validación cliente y servidor
- Subida de imágenes a Cloudinary
- API REST para operaciones CRUD

### SPA (Single Page Application)
- Router personalizado sin frameworks externos
- Navegación con `pushState` y evento `locationchange`

---

## API REST

### Productos

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/api/productos` | Listar todos los productos |
| `GET` | `/api/productos/:id` | Obtener producto por ID |
| `POST` | `/api/alta` | Crear producto (con imagen) |
| `PATCH` | `/api/EditProducto` | Actualizar producto |
| `DELETE` | `/api/producto/:id` | Eliminar producto |

### Carrito

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `POST` | `/cart/pagar` | Guardar carrito y registrar pedido |

---

## Modelos de datos

### Producto
```js
{
  id: Number,          // único, requerido
  nombre: String,      // requerido
  precio: Number,      // mín. 200
  stock: Number,       // mín. 0
  marca: String,
  categoria: String,
  descripcion: String,
  imagen: String       // URL de Cloudinary
}
```

### Carrito
```js
{
  items: [{ productId: Number, quantity: Number }],
  state: 'active' | 'inactive' | 'finish',
  total: Number
}
```

---

## Instalación y uso local

### Requisitos
- Node.js 22+
- Cuenta en MongoDB Atlas
- Cuenta en Cloudinary

### 1. Clonar el repositorio

```bash
git clone https://github.com/EmilianoBecerra/jugueteriaCosmica.git
cd jugueteriaCosmica
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crear un archivo `.env` en la raíz:

```env
PORT=3000
MPS=<password_mongodb>
APPROUTE=<prefijo_de_ruta>
CLOUDINARY_CLOUD_NAME=<cloud_name>
CLOUDINARY_API_KEY=<api_key>
CLOUDINARY_API_SECRET=<api_secret>
```

### 4. Compilar SASS (opcional, en desarrollo)

```bash
npx sass resources/sass/estilos.scss public/css/main.css --watch
```

### 5. Iniciar el servidor

```bash
# Producción
npm start

# Desarrollo (con hot reload)
npm run dev
```

El servidor estará disponible en `http://localhost:3000`.

