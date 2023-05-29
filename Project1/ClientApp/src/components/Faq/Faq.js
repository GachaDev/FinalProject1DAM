import { createStyles, Image, Accordion, Grid, Col, Container, Title } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
  },

  title: {
    marginBottom: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  item: {
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
  },
}));

const placeholder =
  ['La Kings League es un torneo de fútbol 7 en la que participan un total de 12 equipos. Impulsada por Gerard Piqué e Ibai Llanos, surgió de una charla entre ambos con la idea de cambiar algunas reglas del deporte rey, como por ejemplo acortar el tiempo de duración de los partidos.',
    'El evento empieza a las 16h (con apertura de puertas a las 14:30h) y termina a las 23h. No obstante, los accesos estarán abiertos durante todo el evento.',
      'Los mayores de 14 años podrán acceder sin ir obligatoriamente acompañados de un adulto y no necesitan autorización escrita. Los menores de 14 años necesitan ir acompañados de un mayor de edad (no hace falta que sea su padre/madre/tutor legal y con un adulto por grupo es suficiente).',
        'Cada partido estará dirigido por dos árbitros colegiados: uno en el terreno de juego y otro en la sala VAR.',
          'Todos los domingos por la tarde se disputarán los 6 partidos de cada jornada, uno tras otro.',
            'Cada jugador recibe una remuneración por parte de la Kings League InfoJobs. Todos los jugadores seleccionados en el draft cobran lo mismo, mientras que el 11 y el 12 corren a cargo de cada presidente.',
              'Los encuentros tienen una duración de 40 minutos que se divide en dos partes de 20 minutos.',
                'Es una liga de Fútbol-7, de 12 equipos y que tendrá dos splits de 11 jornadas cada uno. Después de la fase regular, arrancarán los play-off por el título entre los ocho primeros clasificados.']

export default function FAQ() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Grid id="faq-grid" gutter={50}>
          <Col span={12} md={6}>
            <Image src={"https://ui.mantine.dev/_next/static/media/image.b0c2306b.svg"} alt="Frequently Asked Questions" />
          </Col>
          <Col span={12} md={6}>
            <Title order={2} ta="left" className={classes.title}>
              Preguntas frecuentes
            </Title>

            <Accordion chevronPosition="right" defaultValue="reset-password" variant="separated">
              <Accordion.Item className={classes.item} value="reset-password">
                <Accordion.Control>En que consiste la Kings League?</Accordion.Control>
                <Accordion.Panel>{placeholder[0]}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="even-schedule">
                <Accordion.Control>¿Cuál es el horario del evento?</Accordion.Control>
                <Accordion.Panel>{placeholder[1]}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="minimum-age">
                <Accordion.Control>¿Cuál es la edad mínima para acceder al CUPRA arena?</Accordion.Control>
                <Accordion.Panel>{placeholder[2]}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="referee">
                <Accordion.Control>¿Cuántos árbitros hay?</Accordion.Control>
                <Accordion.Panel>{placeholder[3]}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="day">
                <Accordion.Control>¿Qué día se disputa la Kins League Infojobs?</Accordion.Control>
                <Accordion.Panel>{placeholder[4]}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="football-player">
                <Accordion.Control>¿Los futbolistas cobran por participar?</Accordion.Control>
                <Accordion.Panel>{placeholder[5]}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="matchs">
                <Accordion.Control>¿Cuánto duran los partidos?</Accordion.Control>
                <Accordion.Panel>{placeholder[6]}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="formats">
                <Accordion.Control>¿Cuál es el formato de la competición?</Accordion.Control>
                <Accordion.Panel>{placeholder[7]}</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Grid>
      </Container>
    </div>
  );
}