import CardPlayer from './CardPlayer';
import { useState,useEffect } from 'react';

export default function BestPlayers() {
  const [data, setData] = useState([])
  const fetchCards = () => {
    fetch('https://localhost:7233/api/TCartels')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setData(data);
    })
    .catch(error => console.error('Error al obtener los datos de la API:', error));
  };

  useEffect(()=>{
    fetchCards();
  },[])

  return (
    <div style={{display: 'flex', flexDirection: 'row', gap: 20}}>
      {data.map((v)=>(
        <CardPlayer backUrl={v.background} title={v.texto2} category={v.texto1} name={v.nombre} playerImg={v.imagen} />
      ))}
    </div>
  );
}