import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IsometricMenu from './pages/IstometricMenu/IsometricMenu';
import Main from './pages/Main/Main';
import InputField from './pages/InputFieldAnimation/InputField';
import BackgroundEffect from './pages/BackgroundEffect/BackgroundEffect';
import GlowingButton from './pages/GlowingButton/GlowingButton';
import LiquidLoader from './pages/LiquidLoader/LiquidLoader';
import AnimatedProgress from './pages/AnimatedProgress/AnimatedProgress';
import ShapeButton from './pages/ShapeButton/ShapeButton';
import RainyCloudy from './pages/RainyCloudy/RainyCloudy';
import TextAnimation from './pages/TextAnimation/TextAnimation';

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
        <Route path="/LiquidLoader" element={<LiquidLoader />} />
        <Route path="/AnimatedProgress" element={<AnimatedProgress />} />
        <Route path="/ShapeButton" element={<ShapeButton />} />
        <Route path="/RainyCloudy" element={<RainyCloudy />} />
        <Route path="/TextAnimation" element={<TextAnimation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
