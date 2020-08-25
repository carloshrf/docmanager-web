import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({label, icon: Icon, value, ...rest}) => {
  const hasValue = Boolean(!!value);

  return (
    <Container hasValue={hasValue}>
    {Icon && <Icon size={17}/>}
      <label>
        <input type="text" {...rest}/>
        <span>{label}</span>
      </label>
    </Container>
  );
}

export default Input;
