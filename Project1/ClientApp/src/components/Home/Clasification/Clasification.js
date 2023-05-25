import { Title, Table } from '@mantine/core';
import BarWithColor from './BarWithColor';
const data = [
  {
    name: '1K',
    pos:1,
    shield: 'https://kingsleague.pro/wp-content/uploads/2022/11/1k.svg',
    point:6,
    victory:2,
    defeat:0,
    gf:10,
    gc:7
  },
  {
    name: 'xBuyer Team',
    pos:2,
    shield:'https://kingsleague.pro/wp-content/uploads/2022/11/xbuyer-team.svg',
    point:3,
    victory:1,
    defeat:1,
    gf:9,
    gc:5
  },
  {
    name: 'Los Troncos FC',
    pos:3,
    shield: 'https://kingsleague.pro/wp-content/uploads/2022/12/los-troncos.png',
    point:3,
    victory:1,
    defeat:1,
    gf:10,
    gc:7
  },
  {
    name: 'Ultimate Móstoles',
    pos:4,
    shield:'https://kingsleague.pro/wp-content/uploads/2022/11/ultimate-mostoles.svg',
    point:3,
    victory:1,
    defeat:1,
    gf:8,
    gc:5
  },
  {
    name: 'Kunisports',
    pos:5,
    shield:'https://kingsleague.pro/wp-content/uploads/2022/11/kunisports.svg',
    point:3,
    victory:1,
    defeat:1,
    gf:6,
    gc:3
  },
  {
    name: 'Aniquiladores FC',
    pos:6,
    shield:'https://kingsleague.pro/wp-content/uploads/2022/11/aniquiladores.svg',
    point:3,
    victory:1,
    defeat:1,
    gf:9,
    gc:7
  },
  {
    name: 'Porcinos FC',
    pos:7,
    shield:'https://kingsleague.pro/wp-content/uploads/2022/11/porcinos-fc.svg',
    point:3,
    victory:1,
    defeat:1,
    gf:7,
    gc:6
  },
  {
    name: 'El Barrio',
    pos:8,
    shield: 'https://kingsleague.pro/wp-content/uploads/2022/11/el-bbarrio.svg',
    point:3,
    victory:1,
    defeat:1,
    gf:5,
    gc:7
  },
  {
    name: 'Saiyans FC',
    pos:9,
    shield:'https://kingsleague.pro/wp-content/uploads/2022/11/saiyans-fc.svg',
    point:3,
    victory:1,
    defeat:1,
    gf:6,
    gc:9
  },
  {
    name: 'PIO FC',
    pos:10,
    shield:'https://kingsleague.pro/wp-content/uploads/2022/11/pio.svg',
    point:3,
    victory:1,
    defeat:1,
    gf:5,
    gc:8
  },
  {
    name: 'Rayo de Barcelona',
    pos:11,
    shield:'https://kingsleague.pro/wp-content/uploads/2022/11/rayo-barcelona.svg',
    point:3,
    victory:1,
    defeat:1,
    gf:5,
    gc:10
  },
  {
    name: 'Jijantes FC',
    pos:12,
    shield:'https://kingsleague.pro/wp-content/uploads/2022/11/jijantes-fc.svg',
    point:0,
    victory:0,
    defeat:2,
    gf:4,
    gc:10
  }
]

export default function Clasification() {
  const rows = data.map((item) => (
    <tr key={item.name}>
      <td> 
        <tr>
          <BarWithColor text={item.pos}/>
        </tr>
      </td>
      <td>
        <tr>{item.pos}</tr>
      </td>
      <td style={{ display: "flex", flexDirection: 'row', alignItems: 'center', gap: "20px" }}>
        <img src={item.shield} style={{ width: 30 }} alt="Escudo del equipo" />
        <tr className="team-name">{item.name}</tr>
      </td>
      <td>
        <tr>{item.point}</tr>
      </td>
      <td>
        <tr>{item.victory}</tr>
      </td>
      <td>
        <tr>{item.defeat}</tr>
      </td>
      <td>
        <tr>{item.gf}</tr>
      </td>
      <td>
        <tr>{item.gc}</tr>
      </td>
    </tr>
  ));
  return (
     <div className='containerCalendar'>
      <Title order={4} className='titleCalendar'>Clasificación</Title>
      <div className="table-container">
        <Table verticalSpacing={"xs"} horizontalSpacing={10}>
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
