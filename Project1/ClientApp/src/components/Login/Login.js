import React, { Component, useState, useEffect } from 'react';
import RegisterAccount from './RegisterAccount';
import LoginAccount from './LoginAccount';
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
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`https://localhost:7233/api/usuarios/${email}/${password}`);
        const data = await response.json();
        if (data.length === 0 || password === "" || email === "") {
            if (password === "" || email === "") {
                setErrorMessage('Introduce el correo y la contraseña para poder iniciar sesión');
            } else {
                setErrorMessage('Correo o contraseña incorrectos');
            }
        } else {
            setIsLogged(true);
        }
    };
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setShowLoginForm(true);
        }, 1200);
        return () => clearTimeout(timeoutId);
    }, [showLoginForm]);  

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
                {showLoginForm && !showRegisterForm && (
                    <LoginAccount setShowRegisterForm={setShowRegisterForm} handleSubmit={handleSubmit} setEmail={setEmail} setPassword={setPassword} errorMessage={errorMessage} />
                )}
                {showRegisterForm  && (
                    <RegisterAccount setShowRegisterForm={setShowRegisterForm}/>
                )}
            </Container>
        </div>
    );
}
