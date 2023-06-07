import { Modal, Button } from '@mantine/core';
import { Input } from '@mantine/core';

export default function ModalInsertJornada({ fechaJ, setFechaJ, opened, close, handleInsertJornada}) {
    return (
        <>
            <Modal opened={opened} onClose={close} title="Insertar jornada">
            <Input.Wrapper label="Fecha" mb={10} mt={10} required maw={320} mx="auto">
                <Input
                value={fechaJ}
                onChange={(event) => {setFechaJ(event.target.value)}}
                placeholder="Fecha"
                /> 
            </Input.Wrapper>
            <Button onClick={handleInsertJornada} style={{display: 'flex', margin: '0 auto'}} color="orange" size="xs" uppercase>
                Insertar jornada
            </Button>
            </Modal>
        </>
    );
}