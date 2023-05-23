import React, { Component, useState } from 'react';
import { Button } from '@mantine/core';
import { Text, Paper } from '@mantine/core';

const data = [
  {
    team: 'PIaaaaaaaaaaO FC',
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
    team: 'aaaaaaaaaa',
    shield: 'https://www.kingsleague.pro/wp-content/uploads/2022/11/xbuyer-team.svg',
    player: 'https://kingsleague.pro/wp-content/uploads/2023/05/XBU_6.png',
    namePlayer: 'bbbbbb',
    position: 'MEDIO',
    number:'12'
  },
  {
    team: 'aaaaaaaaaa',
    shield: 'https://www.kingsleague.pro/wp-content/uploads/2022/11/xbuyer-team.svg',
    player: 'https://kingsleague.pro/wp-content/uploads/2023/05/XBU_6.png',
    namePlayer: 'bbbbbb',
    position: 'MEDIO',
    number:'12'
  }
];

function Buttonn() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
      <Button variant="light" color="orange" radius="lg" size="lg">
        Todos
      </Button>
      <Button variant="light" color="orange" radius="lg" size="lg">
        Equipos
      </Button>
      <Button variant="light" color="orange" radius="lg" size="lg">
        Jugador
      </Button>
    </div>
  );
}

function Paperr({ data }) {
  return (
    <div style={{ minWidth:'max-content'}}>
      <div style={{ display: 'flex', backgroundImage: 'url(https://kingsleague.pro/wp-content/uploads/2022/12/mostoles-bg.jpg)', backgroundSize: '100%', width: '30%', flexDirection: 'row' }}>
        <div>
          <img src={data.player} style={{ width: '100%', marginTop: '20%' }}></img>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'row', width: '20%', gap: '30%', alignItems: 'center', marginTop: '3%', height: '30%' }}>
            <img src={data.shield} style={{ width: '60%' }}></img>
            <div style={{ minWidth: 'max-content' }}>
              <h5 style={{ color: 'white' }}>{data.team}</h5>
            </div>
            <button style={{ backgroundColor: 'black', color: 'orange', fontFamily: 'monospace' }}>{data.number}</button>
          </div>
          <div style={{ display: 'flex', height: '30%', width: '100%', color: 'white', marginTop: '10px' }}>
            <h3 style={{ fontSize: '30px', fontWeight: 'bold' }}>{data.namePlayer}</h3>
          </div>
          <div style={{ marginTop: '10px', height: '30%', width: '40%' }}>
            <p style={{ backgroundColor: 'black', color: 'white', textAlign: 'center', fontFamily: "Archivo Narrow" }}>{data.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Player1213() {
  const uniqueData = [...new Map(data.map((item) => [item.team, item])).values()];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '5%', gap: '20px' }}>
      <h1>Jugadores 12 y 13</h1>
      <div>
        <Buttonn />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns:'repeat(3,1fr)',gap:'20px' }}>
        {uniqueData.map((player, index) => (
          <Paperr key={index} data={player} />
        ))}
      </div>
    </div>
  );
}
