# 🚀 DV_06_REACT-SUPABASE

Aplicación construida con **React + Vite**, que consume datos desde una base de datos **Supabase** y los muestra mediante gráficos interactivos y tablas dinámicas. Incluye componentes reutilizables y arquitectura modular para facilitar su mantenimiento y escalabilidad.

---

## 📁 Estructura del Proyecto

```
06_REACT+SUPABASE/
├── supabase_fetch.py             # Script Python que extrae datos desde Supabase
├── .env                          # Credenciales de Supabase (NO subir al repo)
│
├── react_frontend/
│   ├── public/
│   │   └── data.json             # Datos exportados desde Supabase
│   │
│   ├── src/
│   │   ├── components/           # Gráficos y tabla
│   │   │   ├── ChartEstado.jsx
│   │   │   ├── ChartEspecialidad.jsx
│   │   │   ├── ChartEntregasMes.jsx
│   │   │   └── TableView.jsx
│   │   ├── utils/
│   │   │   └── dataUtils.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
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
