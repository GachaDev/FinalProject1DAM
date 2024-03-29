import React, { useState, useEffect } from 'react';
import { NativeSelect, Button } from '@mantine/core';
import { UseAdmin } from '../../Zustand/UseAdmin';
import { useDisclosure } from '@mantine/hooks';
import Paperr from './Paperr';
import ModalInsert from './ModalInsert';

//Componente principal para renderizar los demás componentes
export default function Player1213() {
  const [data, setData] = useState([]);
  const [teams, setTeams] = useState([]);
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState('Todos');
  const [pos, setPos] = useState('Portero');
  const [name, setName] = useState('');
  const [imagen, setImagen] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');
  const [tipo, setTipo] = useState('13');
  const { Admin } = UseAdmin();

  const fetchPlayerData = () => {
    fetch('https://localhost:7233/api/TJugadors')
      .then(response => response.json())
      .then(newData => {
        setData(newData);
      })
    .catch(error => console.error('Error al obtener los datos de la API:', error));
  };

  const handleDeletePlayer = async (id) => {
    try {
      const response = await fetch(`https://localhost:7233/api/TJugadors/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData.message); // Mensaje de éxito de eliminación del jugador
        fetchPlayerData(); // Actualizar la lista de jugadores después de eliminar uno
      } else {
        console.log('Error al eliminar el jugador');
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Utilizamos useEffect para coger los datos de la base de datos
  useEffect(() => {
    fetch('https://localhost:7233/api/TTeams')
    .then(response => response.json())
    .then(data => {
      setTeams(data);
      setSelectedTeam(data[0].name); // Establecer el primer equipo como valor inicial
    })
    .catch(error => console.error('Error al obtener los datos de la API:', error));
    fetchPlayerData();
  }, []);

  const handleInsertPlayer = async () => {
    const newPlayer = {
      nombre: name,
      posicion: pos,
      imagen: imagen,
      equipo: selectedTeam,
      tipo: tipo,
      equipoLogo: ""
    };
    console.log(newPlayer)
    fetch('https://localhost:7233/api/TJugadors/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlayer)
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error al crear la cuenta');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Respuesta:', data);
      fetchPlayerData();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    close()
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '2%', gap: '20px' }}>
      <h1 style={{fontFamily: "Archivo Narrow"}}>Jugadores</h1>
      <div style={{display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center'}}>
        <NativeSelect
          maw={'25%'}
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          data={['Todos', 'Draft', 'Jugador 11', 'Jugador 12', 'Jugador 13']}
        />
        {Admin ? <Button onClick={open} color="orange" radius="md" size="xs" uppercase>
          Insertar jugador
        </Button> : null}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'20px' }}>
        {data.map((player, index) => (
          (value === 'Todos' || value === 'Jugador ' + player.tipo || value === player.tipo) ? (
            <Paperr key={index} data={player} handleDeletePlayer={handleDeletePlayer} teams={teams} fetchPlayerData={fetchPlayerData} />
          ) : null
        ))}
      </div>
      <ModalInsert name={name} setName={setName} pos={pos} setPos={setPos} imagen={imagen} setImagen={setImagen} selectedTeam={selectedTeam} setSelectedTeam={setSelectedTeam} tipo={tipo} setTipo={setTipo} opened={opened} close={close} handleInsertPlayer={handleInsertPlayer} teams={teams} />
    </div>
  );
}