import { useState } from 'react';
import { Title, Image, ActionIcon } from '@mantine/core';
import { ChevronLeft, ChevronRight } from 'tabler-icons-react';
export default function Home() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '3' }}>
        <div className='containerCalendar'>
          <Title order={4} className='titleCalendar'>Próximos partidos</Title>
          <div className='jornadaInfo'>
            <ActionIcon variant="transparent"><ChevronLeft size="1rem" /></ActionIcon>
            <div>
              <span className='titleJornada'>Jornada 3</span>
              <span className='dateJornada' style={{textAlign: 'center', fontSize: 12}}>21 de Mayo de 2023</span>
            </div>
            <ActionIcon variant="transparent"><ChevronRight size="1rem" /></ActionIcon>
          </div>
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
              <span>17:00</span>
            </div>
              <Image maw={40} mx="auto" radius="md" src="https://kingsleague.pro/wp-content/uploads/2022/11/jijantes-fc.svg" alt="Random image" />
          </div>
          <div className='match'>
              <Image maw={40} mx="auto" radius="md" src="https://kingsleague.pro/wp-content/uploads/2022/11/ultimate-mostoles.svg" alt="Random image" />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span>18:00</span>
            </div>
              <Image maw={40} mx="auto" radius="md" src="https://kingsleague.pro/wp-content/uploads/2022/11/aniquiladores.svg" alt="Random image" />
          </div>
          <div className='match'>
              <Image maw={40} mx="auto" radius="md" src="https://kingsleague.pro/wp-content/uploads/2022/11/kunisports.svg" alt="Random image" />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span>19:00</span>
            </div>
              <Image maw={40} mx="auto" radius="md" src="https://kingsleague.pro/wp-content/uploads/2022/11/rayo-barcelona.svg" alt="Random image" />
          </div>
          <div className='match'>
              <Image maw={40} mx="auto" radius="md" src="https://kingsleague.pro/wp-content/uploads/2022/11/pio.svg" alt="Random image" />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span>20:00</span>
            </div>
              <Image maw={40} mx="auto" radius="md" src="https://kingsleague.pro/wp-content/uploads/2022/11/1k.svg" alt="Random image" />
          </div>
          <div className='match'>
              <Image maw={40} mx="auto" radius="md" src="https://kingsleague.pro/wp-content/uploads/2022/11/porcinos-fc.svg" alt="Random image" />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span>21:00</span>
            </div>
              <Image maw={40} mx="auto" radius="md" src="https://kingsleague.pro/wp-content/uploads/2022/12/los-troncos.png" alt="Random image" />
          </div>
        </div>
      </div>
      <div style={{ flex: '1' }}>55</div>
    </div>
  );
}
