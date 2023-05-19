import React, { useEffect, useState } from 'react';
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

function Card({ image, title, date }) {
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
        <Text className={classes.date}>{date}</Text>
      </div>
    </Paper>
  );
}

const data = [
  {
    id: 1,
    image: 'https://kingsleague.pro/wp-content/uploads/2023/05/KL_J2.jpg',
    title: '1K se coloca líder en la jornada más goleadora',
    date: '14 MAYO 2023'
  },
  {
    id: 2,
    image: 'https://kingsleague.pro/wp-content/uploads/2023/05/16831283669188.jpg',
    title: 'Djibril Cissé, destacado en las compras para la 2ª jornada',
    date: '13 MAYO 2023'
  },
  {
    id: 3,
    image: 'https://kingsleague.pro/wp-content/uploads/2023/05/Fvit7yDXwAE3E5L.jpeg',
    title: '¡La Kings League InfoJobs volvió por todo lo alto!',
    date: '08 MAYO 2023'
  },
  {
    id: 4,
    image: 'https://kingsleague.pro/wp-content/uploads/2023/04/022_MercatoKings1_RachelAlvhz-scaled.jpg',
    title: 'Se acabó el ‘mercato’: ya tenemos plantillas definitivas',
    date: '26 ABRIL 2023'
  },
  {
    id: 5,
    image: 'https://kingsleague.pro/wp-content/uploads/2023/04/MQJM00394.jpg',
    title: 'Novedades del reglamento para el 2º split',
    date: '24 ABRIL 2023'
  },
  {
    id: 6,
    image: 'https://kingsleague.pro/wp-content/uploads/2023/04/J12-y-cronicas-2023-04-18T090628.652-1.jpg',
    title: 'Así será el innovador playoff del 2º split',
    date: '19 ABRIL 2023'
  },
  {
    id: 7,
    image: 'https://kingsleague.pro/wp-content/uploads/2023/04/MercatoKings_dia1.jpg',
    title: 'Mercato: ¡Acuerdo múltiple entre Jijantes, Porcinos, Aniquiladores y El Barrio!',
    date: '13 ABRIL 2023'
  },
  {
    id: 8,
    image: 'https://kingsleague.pro/wp-content/uploads/2023/04/queens-1-e1681152528960.jpeg',
    title: 'Estas son las jugadoras del draft de la Queens League Oysho',
    date: '10 ABRIL 2023'
  },
  {
    id: 9,
    image: 'https://kingsleague.pro/wp-content/uploads/2023/04/PSMQ05486-e1681119398469.jpg',
    title: 'Edgar Alvaro ficha por el Rayo y Marc Pelaz por Los Troncos',
    date: '10 ABRIL 2023'
  },
  {
    id: 10,
    image: 'https://kingsleague.pro/wp-content/uploads/2023/04/Ubon_F4.jpg',
    title: 'Cristian Ubón ficha por Ultimate Móstoles',
    date: '05 ABRIL 2023'
  },
];


export default function CarouselE() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const [forceUpdate, setForceUpdate] = useState(false);
  const [firstTime, setFirstTime] = useState(false);

  useEffect(() => {
    function handleResize() {
      setTimeout(() => setForceUpdate((prevState) => !prevState), 1);
    }

    if (!firstTime) {
      setTimeout(() => setForceUpdate((prevState) => !prevState), 600);
      setFirstTime(true);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mobile, firstTime]);

  const slides = data.map((item) => (
    <Carousel.Slide key={item.id}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <div key={forceUpdate}>
      <Carousel
        mx="auto"
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
    </div>
  );
}
