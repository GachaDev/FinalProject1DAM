import Matches from './Matches/Matches';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(450),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },
}));

function Card({ image, title }) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
    </Paper>
  );
}

const data = [
  {
    image: 'https://kingsleague.pro/wp-content/uploads/2023/05/KL_J2.jpg',
    title: '1K se coloca líder en la jornada más goleadora',
  },
  {
    image: 'https://kingsleague.pro/wp-content/uploads/2023/05/16831283669188.jpg',
    title: 'Djibril Cissé, destacado en las compras para la 2ª jornada',
  },
];

export default function Home() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <div style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', margin: 40, gap: 20 }}>
      <div style={{ flex: '1', minWidth: 0 }}>
        <Matches />
      </div>
      <div style={{ flex: '2', maxWidth: '100%', position: 'relative', minWidth: 0 }}>
        <Carousel
          withIndicators
          height={450}
          transition="slide"
          breakpoints={[
            { maxWidth: theme.breakpoints.md, slidesToShow: 2, slidesToScroll: 1 },
            { maxWidth: theme.breakpoints.xl, slidesToShow: 3, slidesToScroll: 1 },
          ]}
        >
          {slides}
        </Carousel>
      </div>
    </div>
  );
}
