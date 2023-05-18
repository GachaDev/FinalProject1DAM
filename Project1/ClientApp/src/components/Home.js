import Matches from './Matches/Matches';

export default function Home() {
  return (
    <div style={{ display: 'flex', margin: 40, gap: 20 }}>
      <div style={{ flex: '1' }}>
        <Matches/>
      </div>
      <div style={{ flex: '1' }}>55</div>
    </div>
  );
}
