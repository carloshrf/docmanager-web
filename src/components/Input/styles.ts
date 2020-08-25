import styled, { css } from 'styled-components';

interface InputProps {
  hasValue: boolean;
}

export const InputContainer = styled.div`
  position: relative;
`

export const Span = styled.span`
  font-family: Poppins;
  height: 57px;
  position: absolute;
  top: 0;
  /* left: 5px; */

  display: flex;
  align-items: flex-end;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  padding-bottom: 5px;

  transition: .1s ease-in-out;
`;

export const Label = styled.label`
`;


export const InputField = styled.input<InputProps>`
  display: block;
  width: 100%;
  height: 57px;
  font-size: 16px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 1px solid #000;
  border-radius: 0;

  padding: 16px 0 0px;
  margin-bottom: 30px;

  resize: none;
  transition: border-color .3s;

  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type="color"]) + span {
    transform: scale(.6) translateY(-13px);
  }
  ${({ hasValue }) => hasValue && css`
      & + span {
        transform: scale(.6) translateY(-13px);
      }
    `}
`;
