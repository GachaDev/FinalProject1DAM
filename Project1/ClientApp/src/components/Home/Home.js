import Matches from './Matches/Matches';
import CarouselE from './CarouselE/CarouselE'
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';
import { createStyles, Paper, Text, Title, Image, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: 0,
    height: "auto"
  },

  title: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: "17px",
    marginTop: theme.spacing.xs,
    marginLeft: 5
  },

  category: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: "25px",
    marginTop: theme.spacing.xs,
    marginLeft: 5
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
          <Paper
            shadow="md"
            p="xl"
            radius="md"
            sx={{ backgroundImage: `url(https://kingsleague.pro/wp-content/uploads/2022/12/1k-bg.jpg)` }}
            className={classes.card}
          >
            <div style={{display: "flex", flexDirection: "row"}}>
              <div>
                <Text className={classes.category} size="xs">
                  Pepe
                </Text>
                <Title order={3} className={classes.title}>
                  Pepito
                </Title>
              </div>
              <div>
                <Image width={"100%"} src="https://kingsleague.pro/wp-content/uploads/2023/05/1K_01.png" alt="Random image" />
              </div>
            </div>
          </Paper>
          <Paper
            shadow="md"
            p="xl"
            radius="md"
            sx={{ backgroundImage: `url(https://kingsleague.pro/wp-content/uploads/2022/12/1k-bg.jpg)` }}
            className={classes.card}
          >
            <div style={{display: "flex", flexDirection: "row"}}>
              <div>
                <Text className={classes.category} size="xs">
                  Pepe
                </Text>
                <Title order={3} className={classes.title}>
                  Pepito
                </Title>
              </div>
              <div>
                <Image width={"100%"} src="https://kingsleague.pro/wp-content/uploads/2023/05/1K_01.png" alt="Random image" />
              </div>
            </div>
          </Paper>
          <Paper
            shadow="md"
            p="xl"
            radius="md"
            sx={{ backgroundImage: `url(https://kingsleague.pro/wp-content/uploads/2022/12/1k-bg.jpg)` }}
            className={classes.card}
          >
            <div style={{display: "flex", flexDirection: "row"}}>
              <div>
                <Text className={classes.category} size="xs">
                  Pepe
                </Text>
                <Title order={3} className={classes.title}>
                  Pepito
                </Title>
              </div>
              <div>
                <Image width={"100%"} src="https://kingsleague.pro/wp-content/uploads/2023/05/1K_01.png" alt="Random image" />
              </div>
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
}
