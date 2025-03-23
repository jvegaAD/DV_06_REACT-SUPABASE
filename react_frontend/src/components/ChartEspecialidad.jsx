import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#d84c6f", "#ff7f50", "#a6cee3", "#b2df8a"];

const ChartEspecialidad = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => {
        const counts = {};
        json.forEach((item) => {
          counts[item.especialidad] = (counts[item.especialidad] || 0) + 1;
        });
        const chartData = Object.entries(counts).map(([key, value]) => ({ especialidad: key, valor: value }));
        setData(chartData);
      });
  }, []);

  return (
    <div className="w-full h-80">
      <h2 className="text-lg font-semibold mb-2">Distribución por Especialidad</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="valor"
            nameKey="especialidad"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartEspecialidad;