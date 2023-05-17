import React, { Component, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import LoggedInComponent from './components/LoggedInComponent';
import Login from './components/Login/Login';
import { CSSTransition } from 'react-transition-group';
import './fade.css';


export default function App() {
  const displayName = App.name;
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div>
      <CSSTransition
        in={isLogged}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <LoggedInComponent />
      </CSSTransition>
      <CSSTransition
        in={!isLogged}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <Login setIsLogged={setIsLogged} />
      </CSSTransition>
    </div>
  );
}
