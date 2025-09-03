# SGA Backend - SAGA Abogados y Asociados

Backend del Sistema de Gestión de Abogados desarrollado con Node.js y Express.

## Requisitos

- Node.js 22.10.0
- npm (incluido con Node.js)
- MongoDB (opcional, para base de datos)
- NVS (Node Version Switcher) para Windows

## Instalación y Configuración

### 1. Configurar la versión de Node.js

Navega a la carpeta del backend:
```bash
cd sga-backend
```

Usar NVS para seleccionar la versión 22.10.0:
```bash
nvs use 22.10.0
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Copia el archivo `.env.example` y renómbralo como `.env`:
```bash
copy .env.example .env
```

Edita el archivo `.env` con tus configuraciones:
- `PORT`: Puerto del servidor (por defecto: 3000)
- `MONGODB_URI`: URL de conexión a MongoDB
- `JWT_SECRET`: Clave secreta para JWT
- `NODE_ENV`: Entorno de ejecución

### 4. Ejecutar el servidor

Para ejecutar el servidor, navega a la carpeta `src` y ejecuta:
```bash
cd src
node app.js
```

El servidor estará disponible en `http://localhost:3000`

## Estructura del Proyecto

```
sga-backend/
├── src/
│   ├── app.js              # Archivo principal de la aplicación
│   ├── config/             # Configuraciones (base de datos, etc.)
│   ├── controllers/        # Controladores de rutas
│   ├── middleware/         # Middleware personalizado
│   ├── models/            # Modelos de datos
│   ├── routes/            # Definición de rutas
│   └── services/          # Lógica de negocio
├── package.json
├── .env.example
└── README.md
```

## Scripts Disponibles

- `npm start` - Inicia el servidor en modo producción
- `npm run dev` - Inicia el servidor en modo desarrollo con nodemon

## API Endpoints

### Básicos
- `GET /` - Información básica de la API
- `GET /api/health` - Estado de salud del servidor

### Casos (requiere autenticación)
- `GET /api/cases` - Obtener todos los casos
- `POST /api/cases` - Crear nuevo caso

## Contribución

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request
