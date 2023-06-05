import { Table, ScrollArea } from '@mantine/core';
import { UseAdmin } from '../../Zustand/UseAdmin';
import { Button } from '@mantine/core';

//La variable 'data' contiene una matriz de objetos que representan información de clasificación de equipos de fútbol.
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
      {Admin ? <Button style={{marginRight: '1%', marginLeft: 'auto', display: 'block'}} color="orange" radius="md" size="xs" uppercase>
        Insertar Equipo
      </Button> : null}
    </ScrollArea>
  );
}
