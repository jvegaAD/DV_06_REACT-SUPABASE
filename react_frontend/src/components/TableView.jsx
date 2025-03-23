import React, { useEffect, useState } from "react";

const TableView = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (data.length === 0) return <p>Cargando datos...</p>;

  return (
    <div className="overflow-auto">
      <table className="min-w-full text-sm border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Empresa</th>
            <th className="p-2">Proyecto</th>
            <th className="p-2">Fecha Entrega</th>
            <th className="p-2">Estado</th>
            <th className="p-2">Especialidad</th>
            <th className="p-2">Estudio</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-100">
              <td className="p-2">{item.empresa}</td>
              <td className="p-2">{item.nombre_proyecto}</td>
              <td className="p-2">{item.fecha_entrega_proyectada}</td>
              <td className="p-2">{item.estado}</td>
              <td className="p-2">{item.especialidad}</td>
              <td className="p-2">{item.proyecto_estudio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;