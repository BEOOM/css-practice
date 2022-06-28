import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Main = () => {
  const navigate = useNavigate();
  return (
    <Page>
      <Container>
        <CardWrapper>
          <Card onClick={() => navigate('/IsometricMenu')}>
            <P>IsometricMenu Hover Effect</P>
            <Img src="./CoverImage/IsometricHover.png" />
          </Card>
          <Card onClick={() => navigate('/InputField')}>
            <P>InputField Text Animation</P>
            <Img src="./CoverImage/InputField.png" />
          </Card>
          <Card onClick={() => navigate('/BackgroundEffect')}>
            <P>Background Effect</P>
            <Img src="./CoverImage/BackgroundEffect.png" />
          </Card>
          <Card onClick={() => navigate('/GlowingButton')}>
            <P>Glowing Button Hover Effect</P>
            <Img src="./CoverImage/GlowingButton.png" />
          </Card>
          <Card onClick={() => navigate('/LiquidLoader')}>
            <P>Liquid Loading effect</P>
            <Img src="./CoverImage/LiquidLoader.png" />
          </Card>
          <Card onClick={() => navigate('/AnimatedProgress')}>
            <P>Animated Circular Progress Bar</P>
            <Img src="./CoverImage/AnimatedProgress.png" />
          </Card>
          <Card onClick={() => navigate('/ShapeButton')}>
            <P>Custom Shape Button</P>
            <Img src="./CoverImage/ShapeButton.png" />
          </Card>
        </CardWrapper>
      </Container>
    </Page>
  );
};

export default Main;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 80px;
  align-items: center;
  justify-content: space-evenly;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  border: none;
`;

const Page = styled.body`
  width: 100%;
  height: 100%;
  background: #434750;
`;
const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
`;
const Card = styled.div`
  border: 1px solid white;
  width: 300px;
  height: 300px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
`;

const P = styled.p`
  font-size: 20px;
  color: white;
`;
