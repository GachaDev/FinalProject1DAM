import Matches from './Matches/Matches';
import CarouselE from './CarouselE/CarouselE'
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';
import { createStyles, Paper, Text, Title, Image, rem } from '@mantine/core';

export default function Home() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
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
                  <Text className={'categoryCard'} size="xs">
                    MVP
                  </Text>
                  <Text order={5} className={'titleCard'}>
                    Jornada 2
                  </Text>
                  <p></p>
                  <Title order={4} className={'titleCard'}>
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
                  <Text className={'categoryCard'} size="xs">
                    5
                  </Text>
                  <Text order={5} className={'titleCard'}>
                    Goles
                  </Text>
                  <p></p>
                  <Title order={4} className={'titleCard'}>
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
                  <Text className={'categoryCard'} size="xs">
                    3
                  </Text>
                  <Text order={5} className={'titleCard'}>
                    Asistencias
                  </Text>
                  <p></p>
                  <Title order={4} className={'titleCard'}>
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
