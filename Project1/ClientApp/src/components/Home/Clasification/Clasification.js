import { useEffect, useState } from 'react';
import { Title, Table } from '@mantine/core';
import BarWithColor from './BarWithColor';

export default function Clasification() {
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

  const rows = data.map(item => (
    <tr key={item.name}>
      <td>
        <BarWithColor text={item.pos} />
      </td>
      <td>{item.pos}</td>
      <td style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <img src={item.shield} style={{ width: 30 }} alt="Escudo del equipo" />
        <span className="team-name">{item.name}</span>
      </td>
      <td>{item.point}</td>
      <td>{item.victory}</td>
      <td>{item.defeat}</td>
      <td>{item.gf}</td>
      <td>{item.gc}</td>
    </tr>
  ));

  return (
    <div className="containerCalendar">
      <Title order={4} className="titleCalendar">
        Clasificación
      </Title>
      <div className="table-container">
        <Table verticalSpacing="xs" horizontalSpacing={10}>
          <thead>
            <tr>
              <th></th>
              <th>POS</th>
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
      </div>
    </div>
  );
}
