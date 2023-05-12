import React, { Component, useState } from 'react';
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

export default function Login(setIsLogged) {
    return (
        <div className='logIn'>
            <Container>
                <Image maw={140} mx="auto" src="https://kingsleague.pro/wp-content/uploads/2023/05/logo-kings.svg" alt="Random image" />
                <Title
                    align="center"
                    sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
                >
                    ¡Bienvenido!
                </Title>
                <Text color='black' size="sm" align="center" mt={5}>
                    ¿No tienes una cuenta todavía?{' '}
                    <Anchor size="sm" color='white' component="button">
                        Crear cuenta
                    </Anchor>
                </Text>

                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <TextInput label="Email" placeholder="test@gmail.com" required />
                    <PasswordInput label="Contraseña" placeholder="Tu contraseña" required mt="md" />
                    <Group position="apart" mt="lg">
                        <Checkbox label="Recordar" />
                        <Anchor component="button" size="sm">
                            ¿Has olvidado la contraseña?
                        </Anchor>
                    </Group>
                    <Button color="dark" fullWidth mt="xl">
                        Iniciar sesión
                    </Button>
                </Paper>
            </Container>
        </div>
    );
}
