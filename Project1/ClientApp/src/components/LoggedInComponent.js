import React, { Component, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import AppRoutes from '../AppRoutes';

export default function LoggedInComponent() {
  return (
    <Layout>
      <Routes>
        {AppRoutes.map((route, index) => {
          const { element, ...rest } = route;
          return <Route key={index} {...rest} element={element} />;
        })}
      </Routes>
    </Layout>
  );
}
