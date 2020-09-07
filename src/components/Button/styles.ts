import styled from 'styled-components';

export const Container = styled.button`
  border: 0;
  width: 100%;
  border-radius: 10px;
  padding: 10px;

  color: #FFF;
  background: linear-gradient(90deg, rgba(0,254,255,1) 0%, rgba(0,69,255,1) 100%);
  position: relative;
  transition: transform .3s ease-in-out;

  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    border-radius: 10px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
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
`;
