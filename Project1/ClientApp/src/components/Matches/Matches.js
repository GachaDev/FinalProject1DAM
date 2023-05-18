import { useState } from 'react';
import { Title, ActionIcon } from '@mantine/core';
import { ChevronLeft, ChevronRight } from 'tabler-icons-react';
import Match from './Match';

export default function Matches() {
  const matches = [
    { team1: "https://kingsleague.pro/wp-content/uploads/2022/11/xbuyer-team.svg", team2: "https://kingsleague.pro/wp-content/uploads/2022/11/saiyans-fc.svg", hour: "16:00" },
    { team1: "https://kingsleague.pro/wp-content/uploads/2022/11/el-bbarrio.svg", team2: "https://kingsleague.pro/wp-content/uploads/2022/11/jijantes-fc.svg", hour: "17:00" },
    { team1: "https://kingsleague.pro/wp-content/uploads/2022/11/ultimate-mostoles.svg", team2: "https://kingsleague.pro/wp-content/uploads/2022/11/aniquiladores.svg", hour: "18:00" },
    { team1: "https://kingsleague.pro/wp-content/uploads/2022/11/kunisports.svg", team2: "https://kingsleague.pro/wp-content/uploads/2022/11/rayo-barcelona.svg", hour: "19:00" },
    { team1: "https://kingsleague.pro/wp-content/uploads/2022/11/pio.svg", team2: "https://kingsleague.pro/wp-content/uploads/2022/11/1k.svg", hour: "20:00" },
    { team1: "https://kingsleague.pro/wp-content/uploads/2022/11/porcinos-fc.svg", team2: "https://kingsleague.pro/wp-content/uploads/2022/12/los-troncos.png", hour: "21:00" },
  ];

  return (
    <div className='containerCalendar'>
        <Title order={4} className='titleCalendar'>Partidos</Title>
        <div className='jornadaInfo'>
        <ActionIcon variant="transparent"><ChevronLeft size="1rem" /></ActionIcon>
        <div>
            <span className='titleJornada'>Jornada 1</span>
            <span className='dateJornada' style={{ textAlign: 'center', fontSize: 12 }}>21 de Mayo de 2023</span>
        </div>
        <ActionIcon variant="transparent"><ChevronRight size="1rem" /></ActionIcon>
        </div>
        {matches.map((match, index) => (
            <Match index={index} team1={match.team1} team2={match.team2} hour={match.hour} />
        ))}
    </div>
  );
}
