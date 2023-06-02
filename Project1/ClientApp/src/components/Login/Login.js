import React, { useState, useEffect } from 'react';
import RegisterAccount from './RegisterAccount';
import LoginAccount from './LoginAccount';
import { UseAdmin } from '../../Zustand/UseAdmin';
import {
    Title,
    Container,
    Image
} from '@mantine/core';

export default function Login({ setIsLogged }) {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [openSound, setOpenSound] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { setAdmin } = UseAdmin();
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const response = await fetch(`https://localhost:7233/api/usuarios/${email}/${password}`);
        const data = await response.json();
        if (data.length === 0 || password === "" || email === "") {
            setLoading(false);
            if (password === "" || email === "") {
                setErrorMessage('Introduce el correo y la contraseña para poder iniciar sesión');
            } else {
                setErrorMessage('Correo o contraseña incorrectos');
            }
        } else {
            setAdmin(true);
            setLoading(false);
            setIsLogged(true);
        }
    };
    
    useEffect(() => {
        if (!openSound) {
            const audio = new Audio('https://cdn.discordapp.com/attachments/919641744704954461/1106633644933648487/SnapSave_mp3cut.net.mp3');
            audio.play();
            setOpenSound(true);
        }
        const timeoutId = setTimeout(() => {
          setShowLoginForm(true);
        }, 2050);
        return () => clearTimeout(timeoutId);
    }, [showLoginForm, openSound]);  

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
                <Title
                    align='center'
                    className='logo-animation'
                    sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900, color: 'white' })}
                >
                    Kings League
                </Title>
                {showLoginForm && !showRegisterForm && (
                    <LoginAccount setShowRegisterForm={setShowRegisterForm} handleSubmit={handleSubmit} setEmail={setEmail} setPassword={setPassword} errorMessage={errorMessage} setIsLogged={setIsLogged} loading={loading} />
                )}
                {showRegisterForm  && (
                    <RegisterAccount setShowRegisterForm={setShowRegisterForm}/>
                )}
            </Container>
        </div>
    );
}
