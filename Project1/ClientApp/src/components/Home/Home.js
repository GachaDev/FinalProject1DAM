import Matches from './Matches/Matches';
import CarouselE from './CarouselE/CarouselE'
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';
import { createStyles, Paper, Text, Title, Image, rem, Space } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  title: {
    position: 'absolute',
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.5,
    fontSize: "12px",
    marginLeft: 2
  },

  category: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: "25px",
    marginLeft: 2
  },
}));

export default function Home() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const { classes } = useStyles();
  return (
    <div style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', margin: 40, gap: 20 }}>
      <div style={{ flex: '1', minWidth: 0 }}>
        <Matches />
      </div>
      <div style={{ flex: '2', maxWidth: '100%', minWidth: 0 }}>
        <CarouselE />
        <div style={{display: 'flex', flexDirection: 'row', gap: 20, marginTop: 20}}>
          <div style={{ flex: '1' }}>
            <Paper
              shadow="md"
              p="xl"
              radius="md"
              sx={{ backgroundImage: `url(	https://kingsleague.pro/wp-content/uploads/2022/12/troncos-bg.jpg)` }}
              className={'cardMain'}
            >
              <div style={{display: "flex", flexDirection: "row"}}>
                <div>
                  <Text className={classes.category} size="xs">
                    MVP
                  </Text>
                  <Text order={5} className={classes.title}>
                    Jornada 2
                  </Text>
                  <p></p>
                  <Title order={4} className={classes.title}>
                    Joan Verdú
                  </Title>
                </div>
                <div>
                  <Image height={rem(320)} className='imageCard' src="https://kingsleague.pro/wp-content/uploads/2023/05/TFC_10.png" alt="Random image" />
                </div>
              </div>
            </Paper>
          </div>
          <div style={{ flex: '1' }}>
            <Paper
              shadow="md"
              p="xl"
              radius="md"
              sx={{ backgroundImage: `url(https://kingsleague.pro/wp-content/uploads/2022/12/1k-bg.jpg)` }}
              className={'cardMain'}
            >
              <div style={{display: "flex", flexDirection: "row"}}>
                <div>
                  <Text className={classes.category} size="xs">
                    5
                  </Text>
                  <Text order={5} className={classes.title}>
                    Goles
                  </Text>
                  <p></p>
                  <Title order={4} className={classes.title}>
                    Granero
                  </Title>
                </div>
                <div>
                  <Image height={rem(320)} className='imageCard' src="	https://kingsleague.pro/wp-content/uploads/2023/05/1K_7.png" alt="Random image" />
                </div>
              </div>
            </Paper>
          </div>
          <div style={{ flex: '1' }}>
            <Paper
              shadow="md"
              p="xl"
              radius="md"
              sx={{ backgroundImage: `url(https://kingsleague.pro/wp-content/uploads/2022/12/1k-bg.jpg)` }}
              className={'cardMain'}
            >
              <div style={{display: "flex", flexDirection: "row"}}>
                <div>
                  <Text className={classes.category} size="xs">
                    3
                  </Text>
                  <Text order={5} className={classes.title}>
                    Asistencias
                  </Text>
                  <p></p>
                  <Title order={4} className={classes.title}>
                    Ricardo
                  </Title>
                </div>
                <div>
                  <Image height={rem(320)} className='imageCard' src="https://kingsleague.pro/wp-content/uploads/2023/05/1K_01.png" alt="Random image" />
                </div>
              </div>
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
}
