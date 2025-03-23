import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { parseISO, format } from "date-fns";

const ChartEntregasMes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => {
        const counts = {};
        json.forEach((item) => {
          const fecha = parseISO(item.fecha_entrega_proyectada);
          const key = format(fecha, "yyyy-MM");
          counts[key] = (counts[key] || 0) + 1;
        });
        const chartData = Object.entries(counts).map(([key, value]) => ({ mes: key, entregas: value }));
        setData(chartData.sort((a, b) => a.mes.localeCompare(b.mes)));
      });
  }, []);

  return (
    <div className="w-full h-64">
      <h2 className="text-lg font-semibold mb-2">Entregas por Mes</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="entregas" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartEntregasMes;
