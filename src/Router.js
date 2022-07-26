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
import ResponsiveSite from './pages/ResponsiveSite/ResponsiveSite';
import CardHover from './pages/CardHover/CardHover';
import FlipProductCard from './pages/FlipProductCard/FlipProductCard';
import IconHover from './pages/IconHover/IconHover';
import MagicLine from './pages/MagieLine/MagicLine';
import Border from './pages/BorderAnimation/Border';

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
        <Route path="/CardHover" element={<CardHover />} />
        <Route path="/ResponsiveSite" element={<ResponsiveSite />} />
        <Route path="/FlipProductCard" element={<FlipProductCard />} />
        <Route path="/IconHover" element={<IconHover />} />
        <Route path="/MagicLine" element={<MagicLine />} />
        <Route path="/Border" element={<Border />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
