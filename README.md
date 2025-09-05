

# SGA Pravda SaGa - Backend & Frontend

>Sistema de Gestión de Abogados desarrollado con Node.js, Express, PostgreSQL y Angular.

---

## Requisitos

- Node.js 22.10.0
- npm
- PostgreSQL (la base se crea automáticamente)
- Angular CLI (para frontend)

---

## Instalación y Configuración

### 1. Backend

```bash
cd sga-backend
npm install
cd src
copy .env.example .env
# Edita src/.env con tus datos reales
```

Variables de entorno (`src/.env`):
```
DB_NAME=pravda
DB_USER=postgres
DB_PASSWORD=tu_contraseña_secreta
DB_HOST=localhost
DB_PORT=5432
```

Ejecuta el backend:
```bash
node app.js
```
El backend estará en `http://localhost:3000`

### 2. Frontend

```bash
cd ../sga-frontend
npm install
cd src
ng serve
```
El frontend estará en `http://localhost:4200`

---

## ¿Qué hace el backend?

- Crea la base de datos automáticamente si no existe
- Sincroniza todos los modelos y tablas

## ¿Qué hace el frontend?

- Permite login y registro de usuarios (solo admin puede registrar)
- Panel de administración solo para admin
- Gestión de casos legales y clientes
- Navegación protegida por roles
- Interfaz moderna y responsiva (Bootstrap, Font Awesome)

---

## Estructura del Proyecto

```
sga-backend/
├── src/
│   ├── app.js              # Archivo principal
│   ├── config/             # Configuración y conexión a la base de datos
│   ├── controllers/        # Lógica de rutas
│   ├── middlewares/        # Middlewares personalizados
│   ├── models/             # Modelos Sequelize
│   ├── routes/             # Definición de rutas
│   └── services/           # Lógica de negocio
├── package.json
├── README.md

sga-frontend/
├── src/
│   ├── app/
│   │   ├── components/     # Componentes de Angular
│   │   ├── services/       # Servicios para API calls
│   │   ├── models/         # Interfaces y modelos
│   │   ├── guards/         # Guards de autenticación
│   │   ├── app.component.* # Componente principal
│   │   ├── app.config.ts   # Configuración de la aplicación
│   │   └── app.routes.ts   # Definición de rutas
│   ├── assets/            # Recursos estáticos
│   ├── environments/      # Configuraciones de entorno
│   ├── index.html         # Página HTML principal
│   ├── main.ts           # Punto de entrada de la aplicación
│   └── styles.css        # Estilos globales
├── angular.json
├── package.json
├── tsconfig.json
├── README.md
```

---

## Scripts Disponibles

- Backend:
	- `npm start` - Inicia el servidor en modo producción
	- `npm run dev` - Inicia el servidor en modo desarrollo con nodemon
- Frontend:
	- `ng serve` - Inicia el servidor de desarrollo
	- `ng build` - Construye la aplicación para producción
	- `ng test` - Ejecuta las pruebas unitarias
	- `ng e2e` - Ejecuta las pruebas end-to-end

---

## API Endpoints principales

- `GET /` - Información básica de la API
- `GET /api/health` - Estado de salud del servidor
- `GET /api/cases` - Obtener todos los casos
- `POST /api/cases` - Crear nuevo caso
- `POST /api/users/register` - Registrar usuario (solo admin)
- `POST /api/users/login` - Iniciar sesión

---

## Contribución

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/mi-feature`)
3. Commit tus cambios (`git commit -m 'Agrega mi feature'`)
4. Push a la rama (`git push origin feature/mi-feature`)
5. Abre un Pull Request

---

## Soporte

Para soporte técnico, contacta al equipo de desarrollo de Pravda SaGa Abogados & Académicos.
