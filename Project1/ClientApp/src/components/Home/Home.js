import Matches from './Matches/Matches';
import CarouselE from './CarouselE/CarouselE'
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';
import BestPlayers from './BestPlayers/BestPlayers';
import Clasification from './Clasification/Clasification';

export default function Home() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);
  return (
    <div style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', margin: 40, gap: 20 }}>
      <div className='homeIzquierda'>
        <Matches />
        <Clasification />
      </div>
      <div className='homeDerecha'>
        <CarouselE />
        <BestPlayers/>
      </div>
    </div>
  );
}
