import { useEffect, useState } from 'react';
import { Table, ScrollArea } from '@mantine/core';
import { UseAdmin } from '../../Zustand/UseAdmin';
import { Button } from '@mantine/core';

//El componente BarWithColor es una función que recibe como prop un texto y devuelve un componente que muestra un color de barra según el valor del texto.
const BarWithColor = ({ text }) => {
  let barColor = '';
  
  if (text >= 2 && text <= 4) {
    barColor = 'orange';
  } else if (text >= 5 && text <= 10) {
    barColor = 'red';
  } else if (text === 1) {
    barColor = 'green';
  }else if (text > 10){
    barColor = 'white'
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {barColor && <div style={{ backgroundColor: barColor, height: '30px', width: '10px', marginRight: '10px' }} />}
      <span>{text}</span>
    </div>
  );
};

//El componente Clasificacion muestra una tabla con la información de clasificación de los equipos. Cada fila se genera a partir de los datos en la matriz data. El componente BarWithColor se utiliza para mostrar la posición del equipo con una barra de color.
export default function Clasificacion() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7233/api/TPartidoes')
      .then(response => response.json())
      .then(apiData => {
        const teams = {};

        apiData.forEach(partido => {
          if (!teams[partido.equipoLocal]) {
            teams[partido.equipoLocal] = {
              name: partido.equipoLocal,
              pos: 0,
              shield: partido.logoLocal,
              point: 0,
              victory: 0,
              defeat: 0,
              gf: 0,
              gc: 0
            };
          }
          if (!teams[partido.equipoVisitante]) {
            teams[partido.equipoVisitante] = {
              name: partido.equipoVisitante,
              pos: 0,
              shield: partido.logoVisitante,
              point: 0,
              victory: 0,
              defeat: 0,
              gf: 0,
              gc: 0
            };
          }

          teams[partido.equipoLocal].gf += partido.golesLocal;
          teams[partido.equipoLocal].gc += partido.golesVisitante;
          teams[partido.equipoVisitante].gf += partido.golesVisitante;
          teams[partido.equipoVisitante].gc += partido.golesLocal;

          if (partido.golesLocal > partido.golesVisitante) {
            teams[partido.equipoLocal].point += 3;
            teams[partido.equipoLocal].victory += 1;
            teams[partido.equipoVisitante].defeat += 1;
          } else if (partido.golesLocal < partido.golesVisitante) {
            teams[partido.equipoVisitante].point += 3;
            teams[partido.equipoVisitante].victory += 1;
            teams[partido.equipoLocal].defeat += 1;
          } else {
            teams[partido.equipoLocal].point += 1;
            teams[partido.equipoVisitante].point += 1;
          }
        });

        const transformedData = Object.values(teams).sort((a, b) => {
          if (a.point !== b.point) {
            return b.point - a.point;
          }
          if (a.gf !== b.gf) {
            return b.gf - a.gf;
          }
          return b.gc - a.gc;
        }).map((team, index) => ({
          ...team,
          pos: index + 1
        }));

        setData(transformedData);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);
  const rows = data.map((item) => (
    <tr key={item.name}>
      <td> 
        <h6>
          <BarWithColor text={item.pos}/>
         </h6>
      </td>
      <td className='tdimg'>
        <img src={item.shield} className='shieldTeam' style={{marginLeft:'6%'}} alt='Escudo'></img>
      </td>
      <td className='tdteam'>
        <h6>{item.name}</h6>
      </td>
      <td>
        <h6>{item.point}</h6>
      </td>
      <td>
        <h6>{item.victory}</h6>
      </td>
      <td>
        <h6>{item.defeat}</h6>
      </td>
      <td className='gf'>
        <h6>{item.gf}</h6>
      </td>
      <td>
        <h6>{item.gc}</h6>
      </td>
    </tr>
  ));
  
  const { Admin } = UseAdmin();

  //Se utiliza el componente ScrollArea para agregar una barra de desplazamiento vertical a la tabla.
  return (
    <ScrollArea>
      <Table miw={800} verticalSpacing="sm">
        <thead>
          <tr>
            <th style={{width:'8%'}}>POS</th>
            <th>ESCUDO</th>
            <th>EQUIPO</th>
            <th>PTS</th>
            <th>V</th>
            <th>D</th>
            <th>GF</th>
            <th>GC</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
