import CardPlayer from './CardPlayer';
import { useEffect } from 'react';
import { UseAdmin } from '../../../Zustand/UseAdmin';

export default function BestPlayers() {
  const { Cartel, setCartel } = UseAdmin();

  const fetchCartel = () => {
    fetch('https://localhost:7233/api/TCartels')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setCartel(data);
    })
    .catch(error => console.error('Error al obtener los datos de la API:', error));
  };
  useEffect(() => {
    fetchCartel();
    // eslint-disable-next-line
  }, []);

  const handleDeleteCartel = async (id) => {
    try {
      const response = await fetch(`https://localhost:7233/api/TCartels/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        fetchCartel();
      } else {
        console.error('Error al eliminar el Cartel:', response.status);
      }
    } catch (error) {
      console.error('Error al enviar la solicitud de eliminación:', error);
    }
  };
  

  return (
    <div style={{display: 'flex', flexDirection: 'row', gap: 20}}>
      {Cartel.map((v)=>(
        <CardPlayer backUrl={v.background} title={v.texto2} category={v.texto1} name={v.nombre} playerImg={v.imagen} handleDeleteCartel={handleDeleteCartel} idCartel={v.idCartel} />
      ))}
    </div>
  );
}