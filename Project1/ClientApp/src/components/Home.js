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
        
        <div className={classes.root}>
          <h2 style={{textAlign:'center', backgroundColor:'black', color:'white',width:'100%'}}>PARTIDOS</h2>
          <h4 style={{textAlign:'center'}}>Jornada 2
            <span>
              <img src='https://img.icons8.com/?size=512&id=18488&format=png' style={{width:'10%'}}></img>
            </span>
            <h6 style={{textAlign:'center'}}>21/05/2023</h6>
          </h4>
          
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
