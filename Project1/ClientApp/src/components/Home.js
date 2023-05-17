import { useState } from 'react';
import dayjs from 'dayjs';
import { createStyles, Image, Text, Paper, Group, rem } from '@mantine/core';
import {
  IconSwimming,
  IconBike,
  IconRun,
  IconChevronDown,
  IconChevronUp,
} from '@tabler/icons-react';
import { Grid } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundImage: `linear-gradient(236.07deg,#f7ab35 .09%,#e8521e 102.47%)`,
    borderRadius: theme.radius.md,
    width: 320,
    padding: theme.spacing.xl,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },

  stat: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.white,
  },
}));

export default function Home() {
  const { classes } = useStyles();
  return (
    <Grid ml={20}>
      <Grid.Col span={4}>
        <h4>Próximos partidos</h4>
        <div className={classes.root}>
          <Group className='groupJornada' sx={{ flex: 1 }}>
            <Paper className={classes.stat} radius="md" shadow="md" p="xs" key={"Rayo de Barcelona FC"}>
              <Image maw={100} mx="auto" radius="md" src="https://kingsleague.pro/wp-content/uploads/2022/11/xbuyer-team.svg" alt="Random image" />
            </Paper> 
              VS
            <Paper className={classes.stat} radius="md" shadow="md" p="xs" key={"Porcinos FC"}>
            <Image maw={100} mx="auto" radius="md" src="	https://kingsleague.pro/wp-content/uploads/2022/11/saiyans-fc.svg" alt="Random image" />
            </Paper>  
          </Group>
          <Group className='groupJornada' sx={{ flex: 1 }}>
            <Paper className={classes.stat} radius="md" shadow="md" p="xs" key={"Rayo de Barcelona FC"}>
              <Image maw={100} mx="auto" radius="md" src="	https://kingsleague.pro/wp-content/uploads/2022/11/el-bbarrio.svg" alt="Random image" />
            </Paper> 
              VS
            <Paper className={classes.stat} radius="md" shadow="md" p="xs" key={"Porcinos FC"}>
            <Image maw={100} mx="auto" radius="md" src="https://kingsleague.pro/wp-content/uploads/2022/11/jijantes-fc.svg" alt="Random image" />
            </Paper>  
          </Group>
          <Group className='groupJornada' sx={{ flex: 1 }}>
            <Paper className={classes.stat} radius="md" shadow="md" p="xs" key={"Rayo de Barcelona FC"}>
              <Image maw={100} mx="auto" radius="md" src="https://kingsleague.pro/wp-content/uploads/2022/11/ultimate-mostoles.svg" alt="Random image" />
            </Paper> 
              VS
            <Paper className={classes.stat} radius="md" shadow="md" p="xs" key={"Porcinos FC"}>
            <Image maw={100} mx="auto" radius="md" src="	https://kingsleague.pro/wp-content/uploads/2022/11/aniquiladores.svg" alt="Random image" />
            </Paper>  
          </Group>
          <Group className='groupJornada' sx={{ flex: 1 }}>
            <Paper className={classes.stat} radius="md" shadow="md" p="xs" key={"Rayo de Barcelona FC"}>
              <Image maw={100} mx="auto" radius="md" src="https://kingsleague.pro/wp-content/uploads/2022/11/kunisports.svg" alt="Random image" />
            </Paper> 
              VS
            <Paper className={classes.stat} radius="md" shadow="md" p="xs" key={"Porcinos FC"}>
            <Image maw={100} mx="auto" radius="md" src="https://kingsleague.pro/wp-content/uploads/2022/11/rayo-barcelona.svg" alt="Random image" />
            </Paper>  
          </Group>
          <Group className='groupJornada' sx={{ flex: 1 }}>
            <Paper className={classes.stat} radius="md" shadow="md" p="xs" key={"Rayo de Barcelona FC"}>
              <Image maw={100} mx="auto" radius="md" src="https://kingsleague.pro/wp-content/uploads/2022/11/pio.svg" alt="Random image" />
            </Paper> 
              VS
            <Paper className={classes.stat} radius="md" shadow="md" p="xs" key={"Porcinos FC"}>
            <Image maw={100} mx="auto" radius="md" src="https://kingsleague.pro/wp-content/uploads/2022/11/1k.svg" alt="Random image" />
            </Paper>  
          </Group>
          <Group className='groupJornada' sx={{ flex: 1 }}>
            <Paper className={classes.stat} radius="md" shadow="md" p="xs" key={"Rayo de Barcelona FC"}>
              <Image maw={100} mx="auto" radius="md" src="https://kingsleague.pro/wp-content/uploads/2022/11/porcinos-fc.svg" alt="Random image" />
            </Paper> 
              VS
            <Paper className={classes.stat} radius="md" shadow="md" p="xs" key={"Porcinos FC"}>
            <Image maw={100} mx="auto" radius="md" src="https://kingsleague.pro/wp-content/uploads/2022/12/los-troncos.png" alt="Random image" />
            </Paper>  
          </Group>
        </div>
      </Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
    </Grid>
  );
}
