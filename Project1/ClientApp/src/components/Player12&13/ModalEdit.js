import { NativeSelect, Modal, Button } from '@mantine/core';
import { Input } from '@mantine/core';

export default function ModalEdit({name, setName, pos, setPos, imagen, setImagen, selectedTeam, setSelectedTeam, tipo, setTipo, opened, close, handleInsertPlayer, teams}) {
    return (
      <>
        <Modal opened={opened} onClose={close} title="Editar jugador">
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
            Guardar cambios
          </Button>
        </Modal>
      </>
    );
}