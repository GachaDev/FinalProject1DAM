import { useState } from 'react';
import { Title, ActionIcon } from '@mantine/core';
import { ChevronLeft, ChevronRight } from 'tabler-icons-react';
import Match from './Match';

export default function Matches() {
  const jornadas = [
    {
      title: 'Jornada 1',
      date: '7 de Mayo de 2023',
      matches: [
        { team1: "https://kingsleague.pro/wp-content/uploads/2022/11/xbuyer-team.svg", team2: "https://kingsleague.pro/wp-content/uploads/2022/11/saiyans-fc.svg", team1Initials: "XBU", team2Initials: "SAI", finished: true, goalsTeam1: 3, goalsTeam2: 2 },
        { team1: "https://kingsleague.pro/wp-content/uploads/2022/11/el-bbarrio.svg", team2: "https://kingsleague.pro/wp-content/uploads/2022/11/jijantes-fc.svg", team1Initials: "ELB", team2Initials: "JFC", finished: true, goalsTeam1: 0, goalsTeam2: 0 },
        { team1: "https://kingsleague.pro/wp-content/uploads/2022/11/ultimate-mostoles.svg", team2: "https://kingsleague.pro/wp-content/uploads/2022/11/aniquiladores.svg", team1Initials: "ULT", team2Initials: "ANI", finished: true, goalsTeam1: 2, goalsTeam2: 2 },
        { team1: "https://kingsleague.pro/wp-content/uploads/2022/11/kunisports.svg", team2: "https://kingsleague.pro/wp-content/uploads/2022/11/rayo-barcelona.svg", team1Initials: "KNS", team2Initials: "RDB", finished: true, goalsTeam1: 0, goalsTeam2: 0 },
        { team1: "https://kingsleague.pro/wp-content/uploads/2022/11/pio.svg", team2: "https://kingsleague.pro/wp-content/uploads/2022/11/1k.svg", team1Initials: "PIO", team2Initials: "1K", finished: true, goalsTeam1: 1, goalsTeam2: 0 },
        { team1: "https://kingsleague.pro/wp-content/uploads/2022/11/porcinos-fc.svg", team2: "https://kingsleague.pro/wp-content/uploads/2022/12/los-troncos.png", team1Initials: "POR", team2Initials: "TFC", finished: true, goalsTeam1: 2, goalsTeam2: 1 },
      ],
    },
    {
      title: 'Jornada 2',
      date: '14 de Mayo de 2023',
      matches: [
        { team1: "https://kingsleague.pro/wp-content/uploads/2022/11/xbuyer-team.svg", team2: "https://kingsleague.pro/wp-content/uploads/2022/11/saiyans-fc.svg", team1Initials: "XBU", team2Initials: "SAI", finished: false, goalsTeam1: 0, goalsTeam2: 0 },
        { team1: "https://kingsleague.pro/wp-content/uploads/2022/11/el-bbarrio.svg", team2: "https://kingsleague.pro/wp-content/uploads/2022/11/jijantes-fc.svg", team1Initials: "ELB", team2Initials: "JFC", finished: false, goalsTeam1: 0, goalsTeam2: 0 },
        { team1: "https://kingsleague.pro/wp-content/uploads/2022/11/ultimate-mostoles.svg", team2: "https://kingsleague.pro/wp-content/uploads/2022/11/aniquiladores.svg", team1Initials: "ULT", team2Initials: "ANI", finished: false, goalsTeam1: 0, goalsTeam2: 0 },
        { team1: "https://kingsleague.pro/wp-content/uploads/2022/11/kunisports.svg", team2: "https://kingsleague.pro/wp-content/uploads/2022/11/rayo-barcelona.svg", team1Initials: "KNS", team2Initials: "RDB", finished: false, goalsTeam1: 0, goalsTeam2: 0 },
        { team1: "https://kingsleague.pro/wp-content/uploads/2022/11/pio.svg", team2: "https://kingsleague.pro/wp-content/uploads/2022/11/1k.svg", team1Initials: "PIO", team2Initials: "1K", finished: false, goalsTeam1: 0, goalsTeam2: 0 },
        { team1: "https://kingsleague.pro/wp-content/uploads/2022/11/porcinos-fc.svg", team2: "https://kingsleague.pro/wp-content/uploads/2022/12/los-troncos.png", team1Initials: "POR", team2Initials: "TFC", finished: false, goalsTeam1: 0, goalsTeam2: 0 },
      ],
    },
  ];

  const [currentJornada, setCurrentJornada] = useState(0);

  const handlePreviousJornada = () => {
    if (currentJornada > 0) {
      setCurrentJornada(currentJornada - 1);
    }
  };

  const handleNextJornada = () => {
    if (currentJornada < jornadas.length - 1) {
      setCurrentJornada(currentJornada + 1);
    }
  };

  const currentJornadaData = jornadas[currentJornada];

  return (
    <div className='containerCalendar'>
      <Title order={4} className='titleCalendar'>Partidos</Title>
      <div className='jornadaInfo'>
        <ActionIcon variant="transparent" onClick={handlePreviousJornada}><ChevronLeft size="1rem" /></ActionIcon>
        <div>
          <span className='titleJornada'>{currentJornadaData.title}</span>
          <span className='dateJornada' style={{ textAlign: 'center', fontSize: 12 }}>{currentJornadaData.date}</span>
        </div>
        <ActionIcon variant="transparent" onClick={handleNextJornada}><ChevronRight size="1rem" /></ActionIcon>
      </div>
      {currentJornadaData.matches.map((match, index) => (
        <Match
          key={index}
          index={index}
          team1={match.team1}
          team2={match.team2}
          finished={match.finished}
          goalsTeam1={match.goalsTeam1}
          goalsTeam2={match.goalsTeam2}
          team1Initials={match.team1Initials}
          team2Initials={match.team2Initials}
        />
      ))}
    </div>
  );
}
