import React, { Component, useState, useEffect } from 'react';
import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
    Image
} from '@mantine/core';

export default function Login({ setIsLogged }) {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`https://localhost:7233/api/usuarios/${email}/${password}`);
        const data = await response.json();
        if (data.length === 0) {
            setErrorMessage('Correo o contraseña incorrectos');
        } else {
            setIsLogged(true);
        }
    };
      
          

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setShowLoginForm(true);
        }, 1200);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className='logIn'>
            <Container>
                <Image
                className='logo-animation'
                maw={140}
                mx='auto'
                src='https://kingsleague.pro/wp-content/uploads/2023/05/logo-kings.svg'
                alt='Random image'
                />
                {showLoginForm && (
                <>
                    <div className='formulario'>
                    <Title
                        align='center'
                        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
                    >
                        ¡Bienvenido!
                    </Title>
                    <Text color='black' size='sm' align='center' mt={5}>
                        ¿No tienes una cuenta todavía?{' '}
                        <Anchor size='sm' color='white' component='button'>
                        Crear cuenta
                        </Anchor>
                    </Text>
                    <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
                        <TextInput
                            label='Email'
                            placeholder='test@gmail.com'
                            required
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <PasswordInput
                            label='Contraseña'
                            placeholder='Tu contraseña'
                            required
                            mt='md'
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <Group position='apart' mt='lg'>
                            <Checkbox label='Recordar' checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                            <Anchor component='button' size='sm'>
                            ¿Has olvidado la contraseña?
                            </Anchor>
                        </Group>
                        <Button onClick={handleSubmit} color='dark' fullWidth mt='xl'>
                            Iniciar sesión
                        </Button>
                        {errorMessage && (
                            <Text color='red' size='sm' align='center' mt={5}>
                            {errorMessage}
                            </Text>
                        )}
                    </Paper>
                    </div>
                </>
                )}
            </Container>
        </div>
    );
}
