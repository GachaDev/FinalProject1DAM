import { Image } from '@mantine/core';

export default function Match({index, team1, team2, hour}) {
  return (
    <div className='match' key={index}>
        <Image maw={40} mx="auto" radius="md" src={team1} alt="Random image" />
        <div>
        <span>{hour}</span>
        </div>
        <Image maw={40} mx="auto" radius="md" src={team2} alt="Random image" />
    </div>
  );
}
