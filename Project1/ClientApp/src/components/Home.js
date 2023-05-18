import { useState } from 'react';
import { Title, Image, ActionIcon } from '@mantine/core';
import { ChevronLeft, ChevronRight } from 'tabler-icons-react';
import Matches from './Matches/Matches';


export default function Home() {
  const matches = [
    { team1: "https://kingsleague.pro/wp-content/uploads/2022/11/xbuyer-team.svg", team2: "https://kingsleague.pro/wp-content/uploads/2022/11/saiyans-fc.svg", hour: "16:00" },
    { team1: "https://kingsleague.pro/wp-content/uploads/2022/11/el-bbarrio.svg", team2: "https://kingsleague.pro/wp-content/uploads/2022/11/jijantes-fc.svg", hour: "17:00" },
    { team1: "https://kingsleague.pro/wp-content/uploads/2022/11/ultimate-mostoles.svg", team2: "https://kingsleague.pro/wp-content/uploads/2022/11/aniquiladores.svg", hour: "18:00" },
    { team1: "https://kingsleague.pro/wp-content/uploads/2022/11/kunisports.svg", team2: "https://kingsleague.pro/wp-content/uploads/2022/11/rayo-barcelona.svg", hour: "19:00" },
    { team1: "https://kingsleague.pro/wp-content/uploads/2022/11/pio.svg", team2: "https://kingsleague.pro/wp-content/uploads/2022/11/1k.svg", hour: "20:00" },
    { team1: "https://kingsleague.pro/wp-content/uploads/2022/11/porcinos-fc.svg", team2: "https://kingsleague.pro/wp-content/uploads/2022/12/los-troncos.png", hour: "21:00" },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '3' }}>
        <Matches></Matches>
      </div>
      <div style={{ flex: '1' }}>55</div>
    </div>
  );
}
