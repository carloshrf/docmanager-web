import styled, { css } from 'styled-components';

interface InputProps {
  hasValue: boolean;
}

export const Container = styled.div<InputProps>`
  position: relative;
  width: 100%;

  margin-bottom: 10px;
  padding: 16px 0 0;

  display: flex;
  align-items: center;

  svg {
    margin-top: 10px;
    margin-right: 10px;
  }

  label {
    display: flex;
    flex: 1;
  }

  span {
    font-family: Poppins;
    height: 50px;
    position: absolute;
    top: 15px;
    color: var(--color-label);

    display: flex;
    align-items: flex-end;

    transform-origin: 0% 0%;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;

    padding-bottom: 5px;

    transition: .1s ease-in-out;
  }

  input {
    height: 50px;
    font-size: 16px;
    width: 100%;

    background: transparent;

    outline: 0;
    border: 0;
    padding-top: 15px;

    border-radius: 0;
    border-bottom: 1px solid #000;
    border-top: 4px solid transparent;

    resize: none;
    transition: border-color .3s;

    &:focus {
      border-bottom-color: #5994FF;
    }
    &:focus + span {
      transform: scale(.8) translateY(-15px);
      color: #5994FF;
    }
    ${({ hasValue }) => hasValue && css`
      & + span {
        transform: scale(.8) translateY(-15px);
        color: #5994FF;
      }
    `}
  }
`;

export const ErrorMessage = styled.p`
  font-size: 12px !important;
  width: 100%;
  text-align: center;
  color: red;
`;
