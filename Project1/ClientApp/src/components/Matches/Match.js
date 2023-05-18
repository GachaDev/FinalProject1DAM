import { Image } from '@mantine/core';

export default function Match({ index, team1, team2, finished, goalsTeam1, goalsTeam2, team1Initials, team2Initials }) {
  const hour = index < 6 ? `${index + 16}:00` : '';

  return (
    <div className='match' key={index}>
      <div className="initials team1">
        {team1Initials}
      </div>
      <div className="logo">
        <Image maw={40} mx="auto" radius="md" src={team1} alt="Team 1" />
      </div>
      <div className="score">
        {finished ? (
          <span>{goalsTeam1}-{goalsTeam2}</span>
        ) : (
          <span>{hour}</span>
        )}
      </div>
      <div className="logo">
        <Image maw={40} mx="auto" radius="md" src={team2} alt="Team 2" />
      </div>
      <div className="initials team2">
        {team2Initials}
      </div>
    </div>
  );
}
