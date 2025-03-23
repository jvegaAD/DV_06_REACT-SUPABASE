import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ChartEstado = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => {
        const counts = {};
        json.forEach((item) => {
          counts[item.estado] = (counts[item.estado] || 0) + 1;
        });
        const chartData = Object.entries(counts).map(([key, value]) => ({ estado: key, cantidad: value }));
        setData(chartData);
      });
  }, []);

  return (
    <div className="w-full h-64">
      <h2 className="text-lg font-semibold mb-2">Proyectos por Estado</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="estado" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="cantidad" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartEstado;
