# 🚀 DV_06_REACT-SUPABASE

Aplicación construida con **React + Vite**, que consume datos desde una base de datos **Supabase** y los muestra mediante gráficos interactivos y tablas dinámicas. Incluye componentes reutilizables y arquitectura modular para facilitar su mantenimiento y escalabilidad.

---

## 📁 Estructura del Proyecto

```
06_REACT+SUPABASE/
│
├── supabase_fetch.py            # 🐍 Script Python para extraer datos desde Supabase y guardarlos en data.json
├── .env                         # 🔐 Variables de entorno con credenciales API de Supabase (¡No subir a GitHub!)
├── requirements_backend.txt     # 📦 Lista de dependencias Python necesarias (supabase, dotenv)
│
├── package.frontend.json        # ⚛️ Configuración de dependencias y scripts del frontend (React)
├── .gitignore                   # 🚫 Ignora carpetas y archivos innecesarios/sensibles (node_modules, .env, etc.)
│
├── react_frontend/              # 📁 Carpeta del frontend hecho en React + Vite
│   ├── public/
│   │   └── data.json            # 📊 Datos exportados desde Supabase y leídos por la app React
│   │
│   ├── src/                     # 🧠 Código fuente del proyecto React
│   │   ├── components/          # 📊 Componentes visuales: gráficos y tabla
│   │   │   ├── ChartEstado.jsx         # Gráfico de barras por estado de proyecto
│   │   │   ├── ChartEspecialidad.jsx  # Gráfico de barras por especialidad
│   │   │   ├── ChartEntregasMes.jsx   # Gráfico de líneas por entregas mensuales
│   │   │   └── TableView.jsx          # Tabla con los datos extraídos
│   │   │
│   │   ├── utils/
│   │   │   └── dataUtils.js    # 🔧 Funciones para agrupar y procesar datos (por mes, categoría, etc.)
│   │   │
│   │   ├── App.jsx             # 🧩 Componente principal que renderiza el panel de análisis
│   │   ├── main.jsx            # 🛠️ Punto de entrada de la app React (monta <App />)
│   │   └── index.css           # 🎨 Estilos base con TailwindCSS
│   │
│   ├── index.html              # 🧱 HTML base donde React se inyecta (div con id="root")
│   ├── vite.config.js          # ⚙️ Configuración del build de Vite (incluye base para GitHub Pages)
│   ├── tailwind.config.js      # 🌀 Configuración personalizada de TailwindCSS
│   ├── postcss.config.js       # 🧼 Configuración del procesador CSS usado por Tailwind
│   └── package.json            # 📦 Dependencias y scripts npm para desarrollo/despliegue
│
└── README.md                   # 📘 Documentación del proyecto (estructura, instalación, despliegue)

```

---

## ⚙️ Instalación y ejecución local

### 1. Clonar el repositorio

```bash
git clone https://github.com/jvegaAD/DV_06_REACT-SUPABASE.git
cd DV_06_REACT-SUPABASE/react_frontend
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar en modo desarrollo

```bash
npm run dev
```

---

## 🛠️ Script Python para importar datos

Ejecuta desde la raíz del proyecto:

```bash
python supabase_fetch.py
```

Esto actualizará el archivo `data.json` en `react_frontend/public`.

---

## 🌐 Despliegue en GitHub Pages

### 1. Configura vite.config.js

```js
export default {
  base: '/DV_06_REACT-SUPABASE/', // nombre del repositorio en GitHub
};
```

### 2. Construye y despliega

```bash
npm run build
npm run deploy
```

La aplicación estará disponible en:

```
https://jvegaAD.github.io/DV_06_REACT-SUPABASE/
```

---

## 🧪 Tecnologías utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Supabase](https://supabase.io/)
- [Recharts](https://recharts.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 🧑‍💻 Autor

**J. Vega** – Desarrollo y arquitectura  
Proyecto académico y demostrativo de conexión full-stack con Supabase + React.
