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

export default function LoginAccount({setShowRegisterForm, handleSubmit, setEmail, setPassword, errorMessage, setIsLogged}) {  
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
                <Button onClick={handleSubmit} color='dark' fullWidth mt='xl'>
                    Iniciar sesión
                </Button>
                <Anchor onClick={() => {setIsLogged(true)}} size='sm' color='blue' align='center' component='button'>
                    Entrar como invitado
                </Anchor>
                {errorMessage && (
                    <Text color='red' size='sm' align='center' mt={"md"}>
                    {errorMessage}
                    </Text>
                )}
            </Paper>
        </div>
    );
}