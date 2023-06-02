//El componente 'Paperr' recibe un objeto data como prop y muestra la información del jugador, incluyendo su imagen y detalles del equipo.
//En el componente Paperr, hay varios elementos HTML con estilos en línea para dar formato
import { Trash } from 'tabler-icons-react';

export default function Paperr({ data }) {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ display: 'flex', background: 'linear-gradient(236.07deg,#f7ab35 .09%,#e8521e 102.47%)', backgroundSize: '100%', width: '100%', flexDirection: 'row' }}>
        <div style={{ width: '100%' }}>
          <img src={data.imagen} style={{ width: '100%', height: 'auto', maxWidth: '150px', maxHeight: '200px', objectFit: 'cover' }} alt={'Player'}></img>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '200%', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center', marginTop: '3%' }}>
            <img src={data.equipoLogo} style={{ width: '30px' }} alt={'Escudo'}></img>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <h5 style={{ color: 'white', margin: '0' }}>{data.equipo}</h5>
            </div>
            <span style={{ borderRadius: '3px', backgroundColor: 'black', color: 'orange', fontFamily: 'monospace', fontSize: '20px', padding: '1.5px 5px' }}>{data.tipo}</span>
          </div>
          <div style={{ display: 'flex', color: 'white' }}>
            <h3 style={{ fontSize: '30px', fontWeight: 'bold' }}>{data.nombre}</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap:'20px' }}>
            <p style={{ backgroundColor: 'black', padding: '3px', borderRadius: '3px', color: 'white', textAlign: 'center', fontWeight: 'bold', margin: '0' }}>{data.posicion}</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Trash
                size={30}
                strokeWidth={2}
                color={'white'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}