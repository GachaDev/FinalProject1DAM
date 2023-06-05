import React, { useState, useEffect } from 'react';
import { Modal, Button, NativeSelect } from '@mantine/core';
import { Input } from '@mantine/core';

export default function ModalInsertCartel({id, setId, texto1, setTexto1, texto2, setTexto2, opened, close, handleInsertCartel}) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://localhost:7233/api/TJugadors')
        .then(response => response.json())
        .then(newData => {
            setData(newData);
        })
        .catch(error => console.error('Error al obtener los datos de la API:', error));
    }, [data, setId]);

    const changeJugador = (name) => {
        data.map((j) => {
          if (j.nombre === name) {
            setId(j.id);
            return null;
          }
          return null;
        });
    };
      

    return (
        <>
            <Modal opened={opened} onClose={close} title="Insertar cartel">
            <NativeSelect
                maw={320}
                label='Jugador'
                required
                mt={10}
                mx="auto"
                onChange={(event) => {changeJugador(event.currentTarget.value)}}
                data={[...data.map(j => j.nombre)]}
            />
            <Input.Wrapper label="Titulo" required maw={320} mx="auto">
                <Input
                value={texto1}
                onChange={(event) => {setTexto1(event.target.value)}}
                placeholder="Titulo"
                />
            </Input.Wrapper>
            <Input.Wrapper label="Categoria" mb={10} mt={10} required maw={320} mx="auto">
                <Input
                value={texto2}
                onChange={(event) => {setTexto2(event.target.value)}}
                placeholder="Categoria"
                /> 
            </Input.Wrapper>
            <Button onClick={handleInsertCartel} style={{display: 'flex', margin: '0 auto'}} color="orange" size="xs" uppercase>
                Insertar cartel
            </Button>
            </Modal>
        </>
    );
}