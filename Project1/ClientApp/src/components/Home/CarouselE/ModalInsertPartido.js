import React, { useState, useEffect } from 'react';
import { Modal, Button, NativeSelect } from '@mantine/core';
import { Input } from '@mantine/core';

export default function ModalInsertPartido({idJornada, setIdJornada, hora, setHora, golesLocal, setGolesLocal, golesVisitante, setGolesVisitante, equipoLocal, setEquipoLocal, equipoVisitante, setEquipoVisitante, opened, close, handleInsertPartido}) {
    const [data, setData] = useState([]);
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('https://localhost:7233/api/TJornadas')
        .then(response => response.json())
        .then(newData => {
            setData(newData);
        })
        .catch(error => console.error('Error al obtener los datos de la API:', error));
        fetch('https://localhost:7233/api/tTeams')
        .then(response => response.json())
        .then(newData => {
            setTeams(newData);
        })
        .catch(error => console.error('Error al obtener los datos de la API:', error));
    }, []);
      

    return (
        <>
            <Modal opened={opened} onClose={close} title="Insertar partido">
            <NativeSelect
                maw={320}
                label='Jornada'
                required
                mt={10}
                mx="auto"
                value={idJornada}
                onChange={(event) => {setIdJornada(event.currentTarget.value)}}
                data={data.map((j) => j.id.toString())}
            />
            <Input.Wrapper label="Hora" required maw={320} mx="auto">
                <Input
                value={hora}
                onChange={(event) => {setHora(event.target.value)}}
                placeholder="Hora"
                />
            </Input.Wrapper>
            <Input.Wrapper label="Goles Local" mb={10} mt={10} required maw={320} mx="auto">
                <Input
                value={golesLocal}
                type='number'
                onChange={(event) => {setGolesLocal(event.target.value)}}
                placeholder="Goles"
                /> 
            </Input.Wrapper>
            <Input.Wrapper label="Goles Visitante" mt={10} required maw={320} mx="auto">
                <Input
                value={golesVisitante}
                type='number'
                onChange={(event) => {setGolesVisitante(event.target.value)}}
                placeholder="Goles"
                /> 
            </Input.Wrapper>
            <NativeSelect
                maw={320}
                label='Equipo Local'
                required
                mt={10}
                mx="auto"
                value={equipoLocal}
                onChange={(event) => {setEquipoLocal(event.target.value)}}
                data={[...teams.map(j => j.name)]}
            />
            <NativeSelect
                maw={320}
                label='Equipo Visitante'
                required
                mt={10}
                mb={10}
                mx="auto"
                value={equipoVisitante}
                onChange={(event) => {setEquipoVisitante(event.target.value)}}
                data={[...teams.map(j => j.name)]}
            />
            <Button onClick={handleInsertPartido} style={{display: 'flex', margin: '0 auto'}} color="orange" size="xs" uppercase>
                Insertar partido
            </Button>
            </Modal>
        </>
    );
}