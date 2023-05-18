import { useState } from 'react';
import dayjs from 'dayjs';
import { createStyles, Image, Text, Paper, Group, rem } from '@mantine/core';
import { Title } from '@mantine/core';

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
    borderRadius: theme.radius.md,
    width: 320,
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 10,
    borderRadius: "8px",
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)"
  },

  stat: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.white
  },
  
}));

export default function Home() {
  const { classes } = useStyles();
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '3' }}>
        <div className='containerCalendar'>
          <Title order={4} className='titleCalendar'>Próximos partidos</Title>
          <p style={{textAlign: 'center'}}>Jornada 3</p>
          <div className='match'>
            <Image maw={40} mx="auto" radius="md" src="https://kingsleague.pro/wp-content/uploads/2022/11/xbuyer-team.svg" alt="Random image" />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: "column" }}>
              <span>16:00</span>
            </div>
            <Image maw={40} mx="auto" radius="md" src="https://kingsleague.pro/wp-content/uploads/2022/11/saiyans-fc.svg" alt="Random image" />
          </div>
          <div className='match'>
              <Image maw={40} mx="auto" radius="md" src="https://kingsleague.pro/wp-content/uploads/2022/11/el-bbarrio.svg" alt="Random image" />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span>VS</span>
            </div>
              <Image maw={40} mx="auto" radius="md" src="https://kingsleague.pro/wp-content/uploads/2022/11/jijantes-fc.svg" alt="Random image" />
          </div>
          <div className='match'>
              <Image maw={40} mx="auto" radius="md" src="https://kingsleague.pro/wp-content/uploads/2022/11/ultimate-mostoles.svg" alt="Random image" />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span>VS</span>
            </div>
              <Image maw={40} mx="auto" radius="md" src="https://kingsleague.pro/wp-content/uploads/2022/11/aniquiladores.svg" alt="Random image" />
          </div>
          <div className='match'>
              <Image maw={40} mx="auto" radius="md" src="https://kingsleague.pro/wp-content/uploads/2022/11/kunisports.svg" alt="Random image" />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span>VS</span>
            </div>
              <Image maw={40} mx="auto" radius="md" src="https://kingsleague.pro/wp-content/uploads/2022/11/rayo-barcelona.svg" alt="Random image" />
          </div>
          <div className='match'>
              <Image maw={40} mx="auto" radius="md" src="https://kingsleague.pro/wp-content/uploads/2022/11/pio.svg" alt="Random image" />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span>VS</span>
            </div>
              <Image maw={40} mx="auto" radius="md" src="https://kingsleague.pro/wp-content/uploads/2022/11/1k.svg" alt="Random image" />
          </div>
          <div className='match'>
              <Image maw={40} mx="auto" radius="md" src="https://kingsleague.pro/wp-content/uploads/2022/11/porcinos-fc.svg" alt="Random image" />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span>VS</span>
            </div>
              <Image maw={40} mx="auto" radius="md" src="https://kingsleague.pro/wp-content/uploads/2022/12/los-troncos.png" alt="Random image" />
          </div>
        </div>
      </div>
      <div style={{ flex: '1' }}>55</div>
    </div>
  );
}
