import CardPlayer from './CardPlayer';

export default function BestPlayers() {
  return (
    <div style={{display: 'flex', flexDirection: 'row', gap: 20}}>
      <CardPlayer backUrl={'https://kingsleague.pro/wp-content/uploads/2022/12/troncos-bg.jpg'} title={'MVP'} category={'Jornada 2'} name={'Verdú'} playerImg={'https://kingsleague.pro/wp-content/uploads/2023/05/TFC_10.png'} />
      <CardPlayer backUrl={'https://kingsleague.pro/wp-content/uploads/2022/12/1k-bg.jpg'} title={'5'} category={'Goles'} name={'Granero'} playerImg={'https://kingsleague.pro/wp-content/uploads/2023/05/1K_7.png'} />
      <CardPlayer backUrl={'https://kingsleague.pro/wp-content/uploads/2022/12/1k-bg.jpg'} title={'3'} category={'Asistencias'} name={'Ricardo'} playerImg={'https://kingsleague.pro/wp-content/uploads/2023/05/1K_01.png'} />
    </div>
  );
}