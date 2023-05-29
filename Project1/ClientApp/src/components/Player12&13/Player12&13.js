import React, { useState } from 'react';
import { NativeSelect } from '@mantine/core';

const data = [
  {
    team: 'Ultimate Móstoles',
    shield: 'https://www.kingsleague.pro/wp-content/uploads/2022/11/ultimate-mostoles.svg',
    player: 'https://kingsleague.pro/wp-content/uploads/2023/05/ULT_5.png',
    namePlayer: 'Cristian Gómez',
    position: 'MEDIO',
    number:'13'
  },
  {
    team: 'PIO FC',
    shield: 'https://www.kingsleague.pro/wp-content/uploads/2022/11/pio.svg',
    player: 'https://kingsleague.pro/wp-content/uploads/2023/05/PIO_4.png',
    namePlayer: 'Alberto Lopo',
    position: 'DEFENSA',
    number:'12'
  },
  {
    team: 'xBuyer Team',
    shield: 'https://www.kingsleague.pro/wp-content/uploads/2022/11/xbuyer-team.svg',
    player: 'https://kingsleague.pro/wp-content/uploads/2023/05/XBU_6.png',
    namePlayer: 'Adri Gimeno',
    position: 'MEDIO',
    number:'12'
  },
  {
    team: 'Rayo de Barcelona',
    shield: 'https://www.kingsleague.pro/wp-content/uploads/2022/11/rayo-barcelona.svg',
    player: 'https://kingsleague.pro/wp-content/uploads/2023/05/RDB_20.png',
    namePlayer: 'Dani Liñares',
    position: 'MEDIO',
    number:'13'
  },
  {
    team: '1K FC',
    shield: 'https://www.kingsleague.pro/wp-content/uploads/2022/12/1k-inverse.svg',
    player: 'https://kingsleague.pro/wp-content/uploads/2023/05/1K_25.png',
    namePlayer: 'Marc Torrejón',
    position: 'DEFENSA',
    number:'13'
  },
  {
    team: 'Porcinos FC',
    shield: 'https://www.kingsleague.pro/wp-content/uploads/2022/11/porcinos-fc.svg',
    player: 'https://kingsleague.pro/wp-content/uploads/2023/05/POR_7.png',
    namePlayer: 'Hugo Fraile',
    position: 'MEDIO',
    number:'12'
  },
  {
    team: 'Jijantes FC',
    shield: 'https://www.kingsleague.pro/wp-content/uploads/2022/11/jijantes-fc.svg',
    player: 'https://kingsleague.pro/wp-content/uploads/2023/05/JFC_11.png',
    namePlayer: 'Ibai Gómez',
    position: 'MEDIO',
    number:'12'
  },
  {
    team: 'Aniquiladores FC',
    shield: 'https://www.kingsleague.pro/wp-content/uploads/2022/11/aniquiladores.svg',
    player: 'https://kingsleague.pro/wp-content/uploads/2023/05/ANI_3.png',
    namePlayer: 'Nadir Louah',
    position: 'DEFENSA',
    number:'12'
  },
  {
    team: 'Los Troncos FC',
    shield: 'https://www.kingsleague.pro/wp-content/uploads/2022/12/los-troncos.png',
    player: 'https://kingsleague.pro/wp-content/uploads/2023/05/TFC_10.png',
    namePlayer: 'Joan Verdú',
    position: 'MEDIO',
    number:'12'
  },
  {
    team: 'El Barrio',
    shield: 'https://www.kingsleague.pro/wp-content/uploads/2022/11/el-bbarrio.svg',
    player: 'https://kingsleague.pro/wp-content/uploads/2023/05/ELB_21.png',
    namePlayer: 'Nico Pareja',
    position: 'DEFENSA',
    number:'12'
  },
  {
    team: 'Kunisports',
    shield: 'https://www.kingsleague.pro/wp-content/uploads/2022/11/kunisports.svg',
    player: 'https://kingsleague.pro/wp-content/uploads/2023/05/KNS_32.png',
    namePlayer: 'M. del Castillo',
    position: 'DELANTERO',
    number:'13'
  },
  {
    team: 'Porcinos FC',
    shield: 'https://www.kingsleague.pro/wp-content/uploads/2022/11/porcinos-fc.svg',
    player: 'https://kingsleague.pro/wp-content/uploads/2023/05/POR_23.png',
    namePlayer: 'Alberto Bueno',
    position: 'DELANTERO',
    number:'13'
  }
];

function Paperr({ data}) {
  return (
    <div style={{ display:'flex'}}>
      <div style={{ display: 'flex', background:'linear-gradient(236.07deg,#f7ab35 .09%,#e8521e 102.47%)', backgroundSize: '100%', width: '100%', flexDirection: 'row' }}>
        <div style={{width:'100%'}}>
          <img src={data.player} style={{ width: '100%', height: 'auto', maxWidth: '150px', maxHeight: '200px', objectFit: 'cover' }} alt={'Player'}></img>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width:'200%' }}>
          <div style={{ display: 'flex', flexDirection: 'row', width: '20%', gap: '30%', alignItems: 'center', marginTop: '3%', height: '30%' }}>
            <img src={data.shield} style={{ width: '50%', height: 'auto', maxWidth: '150px', maxHeight: '200px', objectFit: 'cover' }} alt={'Escudo'}></img>
            <div style={{ minWidth: 'max-content' }}>
              <h5 style={{ color: 'white' }}>{data.team}</h5>
            </div>
            <div>
              <span style={{ backgroundColor: 'black', color: 'orange', fontFamily: 'monospace', fontSize:'20px',padding:'3px'}}>{data.number}</span>
            </div>
          </div>
          <div style={{ display: 'flex', height: '30%', width: '100%', color: 'white', marginTop: '10px' }}>
            <h3 style={{ fontSize: '30px', fontWeight: 'bold' }}>{data.namePlayer}</h3>
          </div>
          <div style={{ marginTop: '10px', height: '30%', width: '40%' }}>
            <p style={{ backgroundColor: 'black', color: 'white', textAlign: 'center',fontWeight:'bold'}}>{data.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Player1213() {
  const uniqueData = [...new Map(data.map((item) => [item.namePlayer, item])).values()];
  const [value, setValue] = useState('Todos');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '5%', gap: '20px' }}>
      <h1 style={{fontFamily: "Archivo Narrow"}}>Jugadores 12 y 13</h1>
      <div>
        <NativeSelect
          maw={'25%'}
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          data={['Todos','Jugador 12', 'Jugador 13']}
        />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns:'repeat(3,1fr)',gap:'20px' }}>
        {uniqueData.map((player, index) => (
          (value === 'Todos' || value === 'Jugador ' + player.number) ? (
            <Paperr key={index} data={player} />
          ) : null
        ))}
      </div>
    </div>
  );
}
