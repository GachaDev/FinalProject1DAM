import React, { Component, useState } from 'react';
import { Button } from '@mantine/core';
import { Text, Paper } from '@mantine/core';

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
            <div style={{display:'flex', flexDirection:'row', width:'20%', gap:'30%', alignItems:'center',marginTop:'3%'}}>
               <img src='https://www.kingsleague.pro/wp-content/uploads/2022/11/ultimate-mostoles.svg' style={{width:'60%'}}></img>
                <div style={{minWidth:'max-content'}}>
                    <h5>Ultimate Móstoles</h5>
                </div>
                
                <div>a</div>
            </div>
            <div>
                cristian gomez
            </div>
            <div>
                medio
            </div>
        </div>
        
        
    </div>
  );
}

export default function Player1213(){
    return(
        <div style={{display: 'flex', flexDirection:'column' , margin:'7%', gap:'20px'}}>
            <div>
                <Buttonn/>
            </div>
            
            <div>
                <Paperr/>
            </div>
        </div>
    );
}