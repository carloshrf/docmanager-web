import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  strong {
    font-size: 24px;
    font-weight: 600;
  }
`;

const appearFromLeft = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: ${appearFromLeft} 2s linear infinite;
  margin-bottom: 20px;
`;
