import React, { useState, useEffect } from 'react';
import { NativeSelect } from '@mantine/core';

//El componente 'Paperr' recibe un objeto data como prop y muestra la información del jugador, incluyendo su imagen y detalles del equipo.
//En el componente Paperr, hay varios elementos HTML con estilos en línea para dar formato
function Paperr({ data}) {
  return (
    <div style={{ display:'flex'}}>
      <div style={{ display: 'flex', background:'linear-gradient(236.07deg,#f7ab35 .09%,#e8521e 102.47%)', backgroundSize: '100%', width: '100%', flexDirection: 'row' }}>
        <div style={{width:'100%'}}>
          <img src={data.imagen} style={{ width: '100%', height: 'auto', maxWidth: '150px', maxHeight: '200px', objectFit: 'cover' }} alt={'Player'}></img>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width:'200%' }}>
          <div style={{ display: 'flex', flexDirection: 'row', width: '20%', gap: '30%', alignItems: 'center', marginTop: '3%', height: '30%' }}>
            <img src={data.equipoLogo} style={{ width: '50%', height: 'auto', maxWidth: '150px', maxHeight: '200px', objectFit: 'cover' }} alt={'Escudo'}></img>
            <div style={{ minWidth: 'max-content' }}>
              <h5 style={{ color: 'white' }}>{data.equipo}</h5>
            </div>
            <div>
              <span style={{ backgroundColor: 'black', color: 'orange', fontFamily: 'monospace', fontSize:'20px',padding:'3px'}}>{data.tipo}</span>
            </div>
          </div>
          <div style={{ display: 'flex', height: '30%', width: '100%', color: 'white', marginTop: '10px' }}>
            <h3 style={{ fontSize: '30px', fontWeight: 'bold' }}>{data.nombre}</h3>
          </div>
          <div style={{ marginTop: '10px', height: '30%', width: '40%' }}>
            <p style={{ backgroundColor: 'black', color: 'white', textAlign: 'center',fontWeight:'bold'}}>{data.posicion}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

//Componente principal para renderizar los demás componentes
export default function Player1213() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7233/api/TJugadors')
      .then(response => response.json())
      .then(data => {setData(data)})
      .catch(error => console.error('Error al obtener los datos de la API:', error));
  }, []);

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
          (value === 'Todos' || value === 'Jugador ' + player.tipo) ? (
            <Paperr key={index} data={player} />
          ) : null
        ))}
      </div>
    </div>
  );
}
