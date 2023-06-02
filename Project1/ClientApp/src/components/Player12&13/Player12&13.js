import React, { useState, useEffect } from 'react';
import { NativeSelect, Modal, Button } from '@mantine/core';
import { UseAdmin } from '../../Zustand/UseAdmin';
import { useDisclosure } from '@mantine/hooks';
import { Input } from '@mantine/core';

//El componente 'Paperr' recibe un objeto data como prop y muestra la información del jugador, incluyendo su imagen y detalles del equipo.
//En el componente Paperr, hay varios elementos HTML con estilos en línea para dar formato
function Paperr({ data}) {
  return (
    <div style={{ display:'flex'}}>
      <div style={{ display: 'flex', background:'linear-gradient(236.07deg,#f7ab35 .09%,#e8521e 102.47%)', backgroundSize: '100%', width: '100%', flexDirection: 'row' }}>
        <div style={{width:'100%'}}>
          <img src={data.imagen} style={{ width: '100%', height: 'auto', maxWidth: '150px', maxHeight: '200px', objectFit: 'cover' }} alt={'Player'}></img>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width:'200%' }}>
          <div style={{ display: 'flex', flexDirection: 'row', width: '20%', gap: '30%', alignItems: 'center', marginTop: '3%', height: '30%' }}>
            <img src={data.equipoLogo} style={{ width: '50%', height: 'auto', maxWidth: '150px', maxHeight: '200px', objectFit: 'cover' }} alt={'Escudo'}></img>
            <div style={{ minWidth: 'max-content' }}>
              <h5 style={{ color: 'white' }}>{data.equipo}</h5>
            </div>
            <div>
              <span style={{ backgroundColor: 'black', color: 'orange', fontFamily: 'monospace', fontSize:'20px',padding:'3px'}}>{data.tipo}</span>
            </div>
          </div>
          <div style={{ display: 'flex', height: '30%', width: '100%', color: 'white', marginTop: '10px' }}>
            <h3 style={{ fontSize: '30px', fontWeight: 'bold' }}>{data.nombre}</h3>
          </div>
          <div style={{ marginTop: '10px', height: '30%', width: '40%' }}>
            <p style={{ backgroundColor: 'black', color: 'white', textAlign: 'center',fontWeight:'bold'}}>{data.posicion}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

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
  const [tipo, setTipo] = useState('');
  const { Admin } = UseAdmin();

  //Utilizamos useEffect para coger los datos de la base de datos
  useEffect(() => {
    fetch('https://localhost:7233/api/TJugadors')
      .then(response => response.json())
      .then(newData => {
        setData(newData);
      })
      .catch(error => console.error('Error al obtener los datos de la API:', error));
    fetch('https://localhost:7233/api/TTeams')
      .then(response => response.json())
      .then(data => {
        setTeams(data);
        setSelectedTeam(data[0].name); // Establecer el primer equipo como valor inicial
      })
      .catch(error => console.error('Error al obtener los datos de la API:', error));
  }, []);  

  const handleInsertPlayer = async (event) => {
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
      fetch('https://localhost:7233/api/TJugadors')
      .then(response => response.json())
      .then(newData => {
        setData(newData);
      })
      .catch(error => console.error('Error al obtener los datos de la API:', error));
    })
    .catch((error) => {
      console.error('Error:', error);
      // Mostrar mensaje de error en el formulario
    });
    close()
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '5%', gap: '20px' }}>
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
      <div style={{ display: 'grid', gridTemplateColumns:'repeat(3,1fr)',gap:'20px' }}>
        {data.map((player, index) => (
          (value === 'Todos' || value === 'Jugador ' + player.tipo || value === player.tipo) ? (
            <Paperr key={index} data={player} />
          ) : null
        ))}
      </div>
      <Modal opened={opened} onClose={close} title="Insertar jugador">
        <Input.Wrapper label="Nombre" required maw={320} mx="auto">
          <Input
            value={name}
            onChange={(event) => {setName(event.target.value)}}
            placeholder="Nombre"
          />
        </Input.Wrapper>
        <NativeSelect
          maw={320}
          label='Posición'
          required
          mt={10}
          mx="auto"
          value={pos}
          onChange={(event) => setPos(event.currentTarget.value)}
          data={['Portero','Defensa', 'Medio', 'Delantero']}
        />
        <Input.Wrapper label="Imagen" mt={10} required maw={320} mx="auto">
          <Input
            value={imagen}
            onChange={(event) => {setImagen(event.target.value)}}
            placeholder="Imagen"
          />
        </Input.Wrapper>
        <NativeSelect
          maw={320}
          label='Tipo'
          required
          mt={10}
          mx="auto"
          value={tipo}
          onChange={(event) => setTipo(event.currentTarget.value)}
          data={['13','12', '11', 'Draft']}
        />
        <NativeSelect
          maw={320}
          label='Equipo'
          value={selectedTeam}
          required
          mt={10}
          mx="auto"
          onChange={(event) => setSelectedTeam(event.currentTarget.value)}
          data={[...teams.map(team => team.name)]}
          mb={10}
        />
        <Button onClick={handleInsertPlayer} style={{display: 'flex', margin: '0 auto'}} color="orange" size="xs" uppercase>
          Insertar jugador
        </Button>
      </Modal>
    </div>
  );
}
