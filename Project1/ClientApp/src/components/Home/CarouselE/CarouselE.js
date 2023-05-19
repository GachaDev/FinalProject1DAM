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
  
  date: {
    color: theme.white,
    fontSize: rem(14),
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
        <Text className={classes.date}>May 18, 2023</Text>
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

export default function CarouselE() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel miw={800} maw={800} mx="auto"
      withIndicators
      height={450}
      transition="slide"
      breakpoints={[
        { maxWidth: theme.breakpoints.md, slidesToShow: 1, slidesToScroll: 1 },
        { maxWidth: theme.breakpoints.xl, slidesToShow: 1, slidesToScroll: 1 },
      ]}
    >
      {slides}
    </Carousel>
  );
}
