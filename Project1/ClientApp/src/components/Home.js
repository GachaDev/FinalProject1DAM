import Matches from './Matches/Matches';


export default function Home() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '3' }}>
        <Matches/>
      </div>
      <div style={{ flex: '1' }}>55</div>
    </div>
  );
}
