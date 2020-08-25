import styled from 'styled-components';

import signinBackground from '../../assets/signin-background.png';
import signinContentBackground from '../../assets/signin-content-background.png';
import backgroundImage from '../../assets/signin-background-side.png';

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

  /* background: blue; */
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
`;

export const Background = styled.div`
  width: 65%;
  height: 100%;

  background-image: url(${backgroundImage});

  background-size: cover;
`;
