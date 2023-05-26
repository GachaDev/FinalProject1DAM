import Matches from './Matches/Matches';
import CarouselE from './CarouselE/CarouselE'
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';
import BestPlayers from './BestPlayers/BestPlayers';
import ReactPlayer from 'react-player';
import Clasification from './Clasification/Clasification';
import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
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


const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 4px",

    '&:hover': {
      transform: 'scale(1.01)',
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));


export default function Home() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);
  const { classes } = useStyles();
  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" className={classes.card}>
      <AspectRatio ratio={16 / 9}>
        <ReactPlayer url={article.videoUrl} width="100%" height="100%" controls />
      </AspectRatio>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));
  
  return (
    <div style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', margin: 40, gap: 20 }}>
      <div className='homeIzquierda'>
        <Matches />
        <Clasification />
      </div>
      <div className='homeDerecha'>
        <CarouselE />
        <BestPlayers/>
        <div>
          <h5>Ultimos vlogs de Navarrosa</h5>
          <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
            {cards}
          </SimpleGrid>
        </div>
      </div>
    </div>
  );
}
