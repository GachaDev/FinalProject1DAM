import Matches from './Matches/Matches';
import CarouselE from './CarouselE/CarouselE'
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';
import BestPlayers from './BestPlayers/BestPlayers';
import { Title } from '@mantine/core';
import { Avatar, Badge, Table, Group, Text, Select, ScrollArea } from '@mantine/core';


export default function Home() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <div style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', margin: 40, gap: 20 }}>
      <div className='homeIzquierda'>
        <Matches />
        <div className='containerCalendar' style={{marginTop: 20}}>
          <Title order={4} className='titleCalendar'>Clasificación</Title>
        </div>
      </div>
      <div className='homeDerecha'>
        <CarouselE />
        <BestPlayers/>
      </div>
    </div>
  );
}
