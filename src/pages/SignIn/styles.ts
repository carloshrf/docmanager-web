import styled, { keyframes } from 'styled-components';

import signinBackground from '../../assets/signin-background.png';
import signinContentBackground from '../../assets/signin-content-background.png';
import signinBackgroundSide from '../../assets/signin-background-side.png';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  background-image: url(${signinBackground});
  background-size: cover;
  overflow: hidden;
`;

export const Main = styled.div`
  height: 550px;
  width: 1000px;

  border-radius: 10px;
  box-shadow: 0 0 10px -1px black;

  display: flex;
  overflow: hidden;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Content = styled.div`
  width: 45%;
  height: 100%;
  box-sizing:border-box;

  padding: 60px 50px;

  background-color: #FFF;
  background-image: url(${signinContentBackground});

  background-size: cover;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  animation: ${appearFromLeft} 1s;

  p {
    font-family: Poppins;
    font-size: 30px;
    margin-bottom: 20px;
  }

  button {
    font-size: 18px;
    font-weight: 100;
    letter-spacing: 2.5px;
    margin: 40px 0 20px;
  }

  p {
    font-size: 16px;
    text-align: center;
    flex: 1;
    width: 100%;
    margin: 0 auto;

    & a {
      text-decoration: none;
      color: #3D4490;
    }
  }
`;

export const Background = styled.div`
  width: 65%;
  height: 100%;

  background-image: url(${signinBackgroundSide});
  background-size: cover;
`;
