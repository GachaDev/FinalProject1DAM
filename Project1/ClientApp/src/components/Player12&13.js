import React, { Component, useState } from 'react';
import { Button } from '@mantine/core';
import { Text, Paper } from '@mantine/core';

const data=[
    {
        team:'Ultimate Móstoles',
        shield:'https://www.kingsleague.pro/wp-content/uploads/2022/11/ultimate-mostoles.svg',
        player: 'https://kingsleague.pro/wp-content/uploads/2023/05/ULT_5.png',
        namePlayer: 'Cristian Gómez',
        position:'MEDIO'
    }
]

function Buttonn() {
  return (
    <div style={{display:'flex', flexDirection:'row', gap:'20px'}}>
        <Button variant="light" color="orange" radius="lg" size="lg">
            Todos
        </Button>
        <Button variant="light" color="orange" radius="lg" size="lg">
            Equipos
        </Button>
        <Button variant="light" color="orange" radius="lg" size="lg">
            Jugador
        </Button>
    </div>
  );
}

function Paperr() {
return (
    <div style={{display:'flex',backgroundImage:'url(https://kingsleague.pro/wp-content/uploads/2022/12/mostoles-bg.jpg)',backgroundSize:'100%', width:'30%',flexDirection:'row'}}>
        <div>
            <img src='https://kingsleague.pro/wp-content/uploads/2023/05/ULT_5.png' style={{width:'100%'}}></img>
        </div>
        <div style={{display:'flex', flexDirection:'column'}}>
            <div style={{display:'flex', flexDirection:'row', width:'20%', gap:'30%', alignItems:'center',marginTop:'3%',height:'30%'}}>
               <img src='https://www.kingsleague.pro/wp-content/uploads/2022/11/ultimate-mostoles.svg' style={{width:'60%'}}></img>
                <div style={{minWidth:'max-content'}}>
                    <h5 style={{color:'white'}}>Ultimate Móstoles</h5>
                </div>
                <button style={{backgroundColor:'black', color:'orange', fontFamily:'monospace'}}>13</button>
            </div>
            <div style={{display:'flex',height:'30%', width:'100%', color:'white',marginTop:'10px'}}>
                <h3 style={{fontSize:'30px', fontWeight:'bold'}}>Cristian Gómez</h3>
            </div>
            <div style={{marginTop:'10px',height:'30%', width:'40%'}}>
                <p style={{backgroundColor:'black', color:'white', textAlign:'center',fontFamily: "Archivo Narrow"}}>MEDIO</p>
            </div>
        </div>
    </div>
  );
} 

export default function Player1213(){
    return(
        <div style={{display: 'flex', flexDirection:'column' , margin:'5%', gap:'20px'}}>
            <h1>Jugadores 12 y 13</h1>
            <div>
                <Buttonn/>
            </div>
            <div style={{display:'flex', flexDirection:'row', gap:'60px'}}>
                <Paperr/>
                <Paperr/>
                <Paperr/>
            </div>
        </div>
    );
}