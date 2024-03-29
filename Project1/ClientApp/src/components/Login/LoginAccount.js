import {
    TextInput,
    PasswordInput,
    Paper,
    Text,
    Button,
    Anchor,
    Loader
} from '@mantine/core';

export default function LoginAccount({setShowRegisterForm, handleSubmit, setEmail, setPassword, errorMessage, setIsLogged, loading}) {  
    return (
        <div className='formulario'>
            <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
                <TextInput
                    label='Email'
                    placeholder='test@gmail.com'
                    required
                    onChange={(event) => setEmail(event.target.value)}
                />
                <PasswordInput
                    label='Contraseña'
                    placeholder='Tu contraseña'
                    required
                    mt='md'
                    onChange={(event) => setPassword(event.target.value)}
                />
                <Text color='black' size='sm' align='center' mt={5}>
                    ¿No tienes una cuenta todavía?{' '}
                    <Anchor onClick={() => setShowRegisterForm(true)} size='sm' color='blue' component='button'>
                    Crear cuenta
                    </Anchor>
                </Text>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {loading ? (
                        <Loader size='md' color='orange' />
                    ) : (
                        <Button onClick={handleSubmit} color='dark' fullWidth mt='xl'>
                            Iniciar sesión
                        </Button>
                    )}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Anchor
                        onClick={() => { setIsLogged(true) }}
                        size='sm'
                        mt='xs'
                        color='blue'
                        component='button'
                    >
                        Entrar como invitado
                    </Anchor>
                </div>
                {errorMessage && (
                    <Text color='red' size='sm' align='center' mt={"md"}>
                    {errorMessage}
                    </Text>
                )}
            </Paper>
        </div>
    );
}