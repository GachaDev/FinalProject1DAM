import React, { useState } from 'react';
import { TextInput, PasswordInput, Anchor, Paper, Text, Button, Loader } from '@mantine/core';

export default function RegisterAccount({ setShowRegisterForm }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const createAccount = async (event) => {
    event.preventDefault();
    setLoading(true);
  
    const data = {
      mail: email,
      password: password,
      name: username,
    };
  
    fetch('https://localhost:7233/api/usuarios/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      if (!response.ok) {
        setErrorMessage('Error al crear la cuenta');
        throw new Error('Error al crear la cuenta');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Respuesta:', data);
      if (data.message === "Usuario creado con éxito") {
        setShowRegisterForm(false);
      } else {
        setErrorMessage(data.message);
        throw new Error('Error al crear la cuenta');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      // Mostrar mensaje de error en el formulario
    })
    .finally(() => {
      setLoading(false);
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
        <Text color='black' size='sm' align='center' mt='md'>
          ¿Tienes una cuenta?{' '}
          <Anchor onClick={() => setShowRegisterForm(false)} size='sm' color='blue' component='button'>
            Iniciar sesión
          </Anchor>
        </Text>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
            {loading ? (
              <Loader size='md' color='orange' />
            ) : (
              <Button color='dark' onClick={createAccount} fullWidth>
                Crear cuenta
              </Button>
            )}
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
