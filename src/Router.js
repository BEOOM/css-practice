import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IsometricMenu from './pages/IstometricMenu/IsometricMenu';
import Main from './pages/Main/Main';
import InputField from './pages/InputFieldAnimation/InputField';
import BackgroundEffect from './pages/BackgroundEffect/BackgroundEffect';
import GlowingButton from './pages/GlowingButton/GlowingButton';

const Router = () => {
  //
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/isometricmenu" element={<IsometricMenu />} />
        <Route path="/inputfield" element={<InputField />} />
        <Route path="/BackgroundEffect" element={<BackgroundEffect />} />
        <Route path="/GlowingButton" element={<GlowingButton />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
