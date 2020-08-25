import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { InputField, Span, Label, InputContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({label, icon: Icon, value, ...rest}) => {
  const hasValue = Boolean(!!value);

  return (
    <InputContainer>
    {Icon && <Icon />}
      <Label>
        <InputField type="text" hasValue={hasValue} {...rest}/>
        <Span>{label}</Span>
      </Label>
    </InputContainer>
  );
}

export default Input;
