import { Modal, Button } from '@mantine/core';
import { Input } from '@mantine/core';

export default function ModalEditNoticia({frase, setFrase, imagen, setImagen, fecha, setFecha, openedModal, closeModal, editNotice}) {
    return (
        <>
            <Modal opened={openedModal} onClose={closeModal} title="Actualizar noticia">
            <Input.Wrapper label="Frase" required maw={320} mx="auto">
                <Input
                value={frase}
                onChange={(event) => {setFrase(event.target.value)}}
                placeholder="Frase"
                />
            </Input.Wrapper>
            <Input.Wrapper label="Imagen" mt={10} required maw={320} mx="auto">
                <Input
                value={imagen}
                onChange={(event) => {setImagen(event.target.value)}}
                placeholder="Imagen"
                />
            </Input.Wrapper>
            <Input.Wrapper mb={10} label="Fecha" mt={10} required maw={320} mx="auto">
                <Input
                value={fecha}
                onChange={(event) => {setFecha(event.target.value)}}
                placeholder="Fecha"
                />
            </Input.Wrapper>
            <Button onClick={editNotice} style={{display: 'flex', margin: '0 auto'}} color="orange" size="xs" uppercase>
                Actualizar
            </Button>
            </Modal>
        </>
    );
}