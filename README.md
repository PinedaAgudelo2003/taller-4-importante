# �️ Weather World

## 📌 Descripción
Weather World es una aplicación web desarrollada con React que ofrece una experiencia temática de clima mundial. Permite a los usuarios iniciar sesión, explorar información meteorológica y consultar datos desde APIs externas.

La app integra autenticación de usuarios, un backend con Node.js/Express y persistencia de datos con MongoDB. La interfaz está diseñada para mostrar pronósticos, métricas climáticas y mantener una experiencia fluida y moderna.

---

## 🚀 Características principales

- 🔐 Registro e inicio de sesión de usuarios
- 🌍 Interfaz temática de clima y pronósticos
- 🌦️ Consumo de APIs externas para datos meteorológicos
- 📌 Guardado de metas y preferencias de clima por usuario
- 📊 Visualización de estadísticas y métricas personalizadas
- 🌐 Comunicación con backend usando Axios
- 🎨 UI moderna con Material UI
- 🧠 Backend separado en Express y MongoDB

---

## 🛠️ Tecnologías utilizadas

### Frontend
- React
- Vite
- Material UI (MUI)
- Axios
- React Router

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- CORS

---

## 📁 Estructura del proyecto

```
react4/
└── t4_proyect/
    ├── backend/
    │   ├── api/
    │   │   ├── authRoutes.js
    │   │   └── gastosRoutes.js
    │   ├── models/
    │   │   ├── Gasto.js
    │   │   └── User.js
    │   ├── .env
    │   ├── index.js
    │   ├── package.json
    │   ├── package-lock.json
    │   ├── .gitignore
    │   └── vercel.json
    │
    ├── frontend/
    │   ├── public/
    │   ├── src/
    │   ├── .env
    │   ├── package.json
    │   ├── package-lock.json
    │   ├── vite.config.js
    │   └── README.md
    │
    └── README.md
```

---

## ⚙️ Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/PinedaAgudelo2003/taller-4-importante.git
```

### 2. Entrar al proyecto
```bash
cd t4_proyect
```

### 3. Instalar dependencias
```bash
cd frontend
npm install
cd ../backend
npm install
```

### 4. Ejecutar localmente

Inicia primero el backend:
```bash
cd backend
node index.js
```

En otra terminal inicia el frontend:
```bash
cd frontend
npm run dev
```

---

## ⚠️ Configuración de variables de entorno

En `backend/.env` define tu conexión a MongoDB:
```env
MONGO_URI=mongodb+srv://brahianpineda12_db_user:98765Mama.@cluster0.1nhoshf.mongodb.net/weatherworld?retryWrites=true&w=majority
PORT=4000
```

En `frontend/.env` define la URL del backend:
```env
VITE_API_URL=http://localhost:4000
```

---

## 🧩 Descripción de la arquitectura

- `frontend/`: aplicación React que maneja la interfaz y las rutas.
- `backend/`: API Express que procesa la lógica del servidor y accede a MongoDB.
- `frontend/src/`: componentes, páginas y servicios de la app.
- `backend/api/`: rutas de autenticación y gestión de datos.
- `backend/models/`: esquemas de MongoDB para usuarios y datos.

---

## 🌍 Deploy

El backend puede desplegarse en plataformas como Vercel o Render. El frontend puede desplegarse con Vite en servicios compatibles.

---

## 👨‍💻 Autor

- Nombre: Brahian Pineda
- Email: brahianpineda12@gmail.com
- Proyecto adaptado a la temática de clima.
- Fecha: 13/04/2026
