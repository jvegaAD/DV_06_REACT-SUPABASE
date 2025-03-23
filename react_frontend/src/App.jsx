import React from "react";
import TableView from "./components/TableView";
import ChartEstado from "./components/ChartEstado";
import ChartEspecialidad from "./components/ChartEspecialidad";
import ChartEntregasMes from "./components/ChartEntregasMes";

function App() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">📊 Panel de Proyectos</h1>
      <ChartEstado />
      <ChartEspecialidad />
      <ChartEntregasMes />
      <TableView />
    </div>
  );
}

export default App;
