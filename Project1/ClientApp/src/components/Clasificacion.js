import React, { Component,useState } from 'react';
export default function TablaClasificacion() {
  const [datosTabla, setDatosTabla] = useState([
    { equipo: 'Equipo A', puntos: 10, partidosJugados: 5 },
    { equipo: 'Equipo B', puntos: 8, partidosJugados: 4 },
    { equipo: 'Equipo C', puntos: 6, partidosJugados: 3 },
    { equipo: 'Equipo D', puntos: 2, partidosJugados: 2 },
  ]);

  // Componente para ordenar los datos de la tabla por puntos
  const ordenarTabla = () => {
    const tablaOrdenada = [...datosTabla].sort((a, b) => b.puntos - a.puntos);
    setDatosTabla(tablaOrdenada);
  };
  
  return (
    <div>
      <h2>Tabla de Clasificación</h2>
      <button onClick={ordenarTabla}>Ordenar por Puntos</button>
      <table>
        <thead>
          <tr>
            <th>Equipo</th>
            <th>Puntos</th>
            <th>Partidos Jugados</th>
          </tr>
        </thead>
        <tbody>
          {datosTabla.map((equipo, index) => (
            <tr key={index}>
              <td>{equipo.equipo}</td>
              <td>{equipo.puntos}</td>
              <td>{equipo.partidosJugados}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
   
}
  