export const agruparPor = (data, campo) => {
    const agrupado = {};
    data.forEach((item) => {
      const clave = item[campo] || 'Sin dato';
      agrupado[clave] = (agrupado[clave] || 0) + 1;
    });
    return Object.entries(agrupado).map(([key, value]) => ({ clave: key, valor: value }));
  };
  
  export const agruparPorMes = (data, campoFecha) => {
    const counts = {};
    data.forEach((item) => {
      const fecha = new Date(item[campoFecha]);
      const mes = fecha.toISOString().slice(0, 7); // yyyy-mm
      counts[mes] = (counts[mes] || 0) + 1;
    });
    return Object.entries(counts).map(([key, value]) => ({ mes: key, cantidad: value }));
  };
  