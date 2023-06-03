//El componente 'Paperr' recibe un objeto data como prop y muestra la información del jugador, incluyendo su imagen y detalles del equipo.
//En el componente Paperr, hay varios elementos HTML con estilos en línea para dar formato
import React, { useState } from 'react';
import { Trash, Edit } from 'tabler-icons-react';
import { ActionIcon } from '@mantine/core';
import { UseAdmin } from '../../Zustand/UseAdmin';
import { useDisclosure } from '@mantine/hooks';
import ModalEdit from './ModalEdit';

export default function Paperr({ data, handleDeletePlayer, teams, fetchPlayerData }) {
  const { Admin } = UseAdmin();
  const [pos, setPos] = useState(data.posicion);
  const [name, setName] = useState(data.nombre);
  const [imagen, setImagen] = useState(data.imagen);
  const [selectedTeam, setSelectedTeam] = useState(data.equipo);
  const [tipo, setTipo] = useState(data.tipo);
  const [opened, { open, close }] = useDisclosure(false);

  const handleEditPlayer = async () => {
    const updatedPlayer = {
      id: data.id,
      nombre: name,
      posicion: pos,
      imagen: imagen,
      equipo: selectedTeam,
      tipo: tipo,
      equipoLogo: ""
    };

    try {
      const response = await fetch(`https://localhost:7233/api/TJugadors/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedPlayer)
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData.message); // Mensaje de éxito de actualización del jugador
        fetchPlayerData(); // Actualizar la lista de jugadores después de editar uno
      } else {
        console.log('Error al editar el jugador');
      }
    } catch (error) {
      console.log(error);
    }

    close();
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ display: 'flex', background: 'linear-gradient(236.07deg,#f7ab35 .09%,#e8521e 102.47%)', backgroundSize: '100%', width: '100%', flexDirection: 'row', borderRadius: '6px' }}>
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
            {Admin ? <div style={{ display: 'flex', alignItems: 'center' }}>
              <ActionIcon variant="transparent" size="lg" className={'socialIcon'}>
                <Edit
                  size={30}
                  onClick={open}
                  strokeWidth={2}
                  color={'white'}
                />
              </ActionIcon>
              <ActionIcon variant="transparent" size="lg" className={'socialIcon'}>
                <Trash
                  size={30}
                  onClick={() => {handleDeletePlayer(data.id)}}
                  strokeWidth={2}
                  color={'white'}
                />
              </ActionIcon>
            </div> : null}
            <ModalEdit name={name} setName={setName} pos={pos} setPos={setPos} imagen={imagen} setImagen={setImagen} selectedTeam={selectedTeam} setSelectedTeam={setSelectedTeam} tipo={tipo} setTipo={setTipo} opened={opened} close={close} handleInsertPlayer={handleEditPlayer} teams={teams} />
          </div>
        </div>
      </div>
    </div>
  );
}