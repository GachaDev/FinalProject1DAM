import Matches from './Matches/Matches';
import CarouselE from './CarouselE/CarouselE'
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';

export default function Home() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <div style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', margin: 40, gap: 20 }}>
      <div style={{ flex: '1', minWidth: 0 }}>
        <Matches />
      </div>
      <div style={{ flex: '2', maxWidth: '100%', position: 'relative', minWidth: 0 }}>
        <CarouselE />
      </div>
    </div>
  );
}
