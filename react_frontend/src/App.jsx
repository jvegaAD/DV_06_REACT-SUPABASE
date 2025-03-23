// import React from "react";
// import TableView from "./components/TableView";
// import ChartEstado from "./components/ChartEstado";
// import ChartEspecialidad from "./components/ChartEspecialidad";
// import ChartEntregasMes from "./components/ChartEntregasMes";

// function App() {
//   return (
//     <div className="p-6 space-y-8">
//       <h1 className="text-2xl font-bold">📊 Panel de Proyectos</h1>
//       <ChartEstado />
//       <ChartEspecialidad />
//       <ChartEntregasMes />
//       <TableView />
//     </div>
//   );
// }

// export default App;


// nuevo codigo
import React, { useEffect, useState } from "react";
import TableView from "./components/TableView";
import ChartEstado from "./components/ChartEstado";
import ChartEspecialidad from "./components/ChartEspecialidad";
import ChartEntregasMes from "./components/ChartEntregasMes";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // 📥 Carga dinámica del archivo JSON desde el directorio público
    fetch(`${import.meta.env.BASE_URL}data.json`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.error("❌ Error al cargar data.json:", error);
      });
  }, []);

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">📊 Panel de Proyectos</h1>

      <h2 className="text-xl font-semibold">Proyectos por Estado</h2>
      <ChartEstado data={data} />

      <h2 className="text-xl font-semibold">Distribución por Especialidad</h2>
      <ChartEspecialidad data={data} />

      <h2 className="text-xl font-semibold">Entregas por Mes</h2>
      <ChartEntregasMes data={data} />

      <h2 className="text-xl font-semibold">📋 Tabla de Proyectos</h2>
      <TableView data={data} />

      {data.length === 0 && <p className="text-sm text-gray-500">Cargando datos...</p>}
    </div>
  );
}

export default App;
