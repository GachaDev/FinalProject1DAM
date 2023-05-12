import React, { Component, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import LoggedInComponent from './components/LoggedInComponent';
import Login from './components/Login/Login';

export default function App() {
  const displayName = App.name;
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div>
      {isLogged ? <LoggedInComponent /> : <Login logIn={setIsLogged} />}
    </div>
  );
}
