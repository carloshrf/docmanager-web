import React, { InputHTMLAttributes } from 'react';

import { InputField, Span, Label, InputContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({label, type='text', value, ...rest}) => {
  const hasValue = Boolean(!!value);

  return (
    <InputContainer>
      <Label>
        <InputField type={type} hasValue={hasValue} {...rest}/>
        <Span>{label}</Span>
      </Label>
    </InputContainer>
  );
}

export default Input;
