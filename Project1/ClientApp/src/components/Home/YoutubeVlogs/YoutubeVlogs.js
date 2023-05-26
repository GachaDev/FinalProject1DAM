import ReactPlayer from 'react-player';
import { IconBrandYoutube } from '@tabler/icons-react';
import { SimpleGrid, Card, Text, AspectRatio } from '@mantine/core';
import CardVlog from './CardVlog';

const mockdata = [
  {
    title: 'Le damos una BURGUER A KIKO, celebramos con SPURS y nos colamos en el VIP I NAVARRO S.A. - VLOG 3',
    videoUrl: 'https://www.youtube.com/watch?v=tVhqXT2pm6A',
  },
  {
    title: 'HABLAMOS con CISSÉ, ARROITA aprende CATALÁN y nos colamos en el VIP I NAVARRO S.A. - VLOG 2',
    videoUrl: 'https://www.youtube.com/watch?v=OPzdlewvxoM',
  },
];

export default function YoutubeVlogs() {
  const cards = mockdata.map((article) => (
    <CardVlog article={article}/>
  ));
  return (
    <div>
        <h5>Ultimos vlogs de Navarrosa <IconBrandYoutube color="#ff0000" size="1.6rem" stroke={1.5} /></h5>
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
            {cards}
        </SimpleGrid>
    </div>
  );
}
