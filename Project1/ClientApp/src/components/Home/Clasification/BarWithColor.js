export default function BarWithColor({text}) {
    let barColor = '';
    
    if (text >= 2 && text <= 4) {
      barColor = 'orange';
    } else if (text >= 5 && text <= 10) {
      barColor = 'red';
    } else if (text === 1) {
      barColor = 'green';
    }else if (text > 10){
      barColor = 'white'
    }
  
    return (
      <div>
        {barColor && <div style={{ backgroundColor: barColor, height: '30px', width: '5px' }} />}
      </div>
    );
  };