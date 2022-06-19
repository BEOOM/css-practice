import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IsometricMenu from './pages/IstometricMenu/IsometricMenu';
import Main from './pages/Main/Main';
import InputField from './pages/InputFieldAnimation/InputField';

const Router = () => {
  //
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/isometricmenu" element={<IsometricMenu />} />
        <Route path="/inputfield" element={<InputField />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
