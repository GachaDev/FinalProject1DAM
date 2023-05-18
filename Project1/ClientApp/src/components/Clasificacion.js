import React, { Component, useState } from 'react';
import { Avatar, Badge, Table, Group, Text, Select, ScrollArea } from '@mantine/core';

//Filas de la tabla 



const data = [
  {
    name: '1k',
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
];

export default function Clasificacion() {
  const rows = data.map((item) => (
    <tr key={item.name}>
      <td>
        <h6>{item.pos}</h6>
      </td>
      <td className='tdimg'>
        <img src={item.shield} className='shieldTeam'></img>
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
      <td>
        <h6>{item.gf}</h6>
      </td>
      <td>
        <h6>{item.gc}</h6>
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table miw={800} verticalSpacing="sm">
        <thead>
          <tr>
            <th>POS</th>
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
