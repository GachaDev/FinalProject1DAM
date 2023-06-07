import { useState, useEffect } from 'react';
import { Title, ActionIcon } from '@mantine/core';
import { ChevronLeft, ChevronRight } from 'tabler-icons-react';
import Match from './Match';
import { UseAdmin } from '../../../Zustand/UseAdmin';

export default function Matches() {
  const { Partidos, setPartidos } = UseAdmin();

  useEffect(() => {
    fetch('https://localhost:7233/api/TPartidoes')
    .then(response => response.json())
    .then(partidos => {
      const newJornadas = partidos.reduce((acc, partido) => {
        const jornada = acc.find(j => j.title === `Jornada ${partido.jornada}`);
        if (jornada) {
          jornada.matches.push({
            team1: partido.logoLocal,
            team2: partido.logoVisitante,
            team1Initials: partido.inicialesLocal,
            team2Initials: partido.inicialesVisitante,
            finished: true,
            goalsTeam1: partido.golesLocal,
            goalsTeam2: partido.golesVisitante
          });
        } else {
          acc.push({
            title: `Jornada ${partido.jornada}`,
            date: partido.fecha,
            matches: [{
              team1: partido.logoLocal,
              team2: partido.logoVisitante,
              team1Initials: partido.inicialesLocal,
              team2Initials: partido.inicialesVisitante,
              finished: true,
              goalsTeam1: partido.golesLocal,
              goalsTeam2: partido.golesVisitante
            }]
          });
        }
        return acc;
      }, []);
      setPartidos(newJornadas);
    })
    .catch(error => {
      console.log('Error al obtener los datos de la API:', error);
    });
    // eslint-disable-next-line
  }, []);

  const [currentJornada, setCurrentJornada] = useState(0);

  const handlePreviousJornada = () => {
    if (currentJornada > 0) {
      setCurrentJornada(currentJornada - 1);
    }
  };

  const handleNextJornada = () => {
    if (currentJornada < Partidos.length - 1) {
      setCurrentJornada(currentJornada + 1);
    }
  };

  const currentJornadaData = Partidos[currentJornada];

  return (
    <div className='containerCalendar'>
      <Title order={4} className='titleCalendar'>Partidos</Title>
      <div className='jornadaInfo'>
        <ActionIcon variant="transparent" onClick={handlePreviousJornada}><ChevronLeft size="1rem" /></ActionIcon>
        <div>
          <span className='titleJornada'>{currentJornadaData?.title}</span>
          <span className='dateJornada' style={{ textAlign: 'center', fontSize: 12 }}>{currentJornadaData?.date}</span>
        </div>
        <ActionIcon variant="transparent" onClick={handleNextJornada}><ChevronRight size="1rem" /></ActionIcon>
      </div>
      {currentJornadaData?.matches.map((match, index) => (
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
