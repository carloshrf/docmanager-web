import styled from 'styled-components';

import signinBackground from '../../assets/signin-background.png';
import signinContentBackground from '../../assets/signin-content-background.png';
import signinBackgroundSide from '../../assets/signin-background-side.png';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  background-image: url(${signinBackground});
  background-size: cover;
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

  p {
    font-family: Poppins;
    font-size: 30px;
    margin-bottom: 20px;
  }

  button {
    border-radius: 0;
    padding: 10px;
    color: #FFF;
    font-size: 18px;
    font-weight: 100;
    letter-spacing: 2.5px;
    margin: 40px 0 20px;
    background: rgb(0,254,255);
    background: linear-gradient(90deg, rgba(0,254,255,1) 0%, rgba(0,69,255,1) 100%);
    position: relative;
    transition: transform .3s ease-in-out;

    z-index: 1;

    &::before {
      position: absolute;
      content: "";
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgb(0,69,255);
      background: linear-gradient(90deg, rgba(0,69,255,1) 0%, rgba(0,254,255,1) 100%);
      z-index: -1;
      transition: opacity 0.3s linear;
      opacity: 0;
    }

    &:hover {
      transform: scale(1.01);
    }

    &:hover::before{
      opacity: 1;
    }
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
  background-color: green;
  background-size: cover;
`;
