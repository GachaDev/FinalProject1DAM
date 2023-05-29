import React, { useState } from 'react';
import {
    TextInput,
    PasswordInput,
    Anchor,
    Paper,
    Text,
    Button
} from '@mantine/core';

export default function RegisterAccount({setShowRegisterForm}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
  
    const createAccount = async (event) => {
        event.preventDefault();
        const data = {
            mail: email,
            password: password,
            name: username
        };
        
        fetch('https://localhost:7233/api/usuarios/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response)
        .then(data => {
            console.log('Respuesta:', data);
            setShowRegisterForm(false);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div className='formulario'>
            <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
                <TextInput
                    label='Email'
                    placeholder='test@gmail.com'
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <TextInput
                    label='Usuario'
                    placeholder='pepito2003'
                    required
                    mt='md'
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <PasswordInput
                    label='Contraseña'
                    placeholder='Tu contraseña'
                    required
                    mt='md'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <Text color='black' size='sm' align='center' mt={"md"}>
                    ¿Tienes una cuenta?{' '}
                    <Anchor onClick={() => setShowRegisterForm(false)} size='sm' color='blue' component='button'>
                    Iniciar sesión
                    </Anchor>
                </Text>
                <Button color='dark' onClick={createAccount} fullWidth mt='xl'>
                    Crear cuenta
                </Button>
            </Paper>
        </div>
    );
}
