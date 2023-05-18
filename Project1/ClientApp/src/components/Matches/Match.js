import { useState } from 'react';
import { Title, Image, ActionIcon } from '@mantine/core';
import { ChevronLeft, ChevronRight } from 'tabler-icons-react';

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
