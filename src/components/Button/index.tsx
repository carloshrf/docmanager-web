import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({children, ...rest}) => {

  return (
    <Container type="button" style={{width: '100%', borderRadius: 'none'}} {...rest}>
      {children}
    </Container>
  );
}

export default Button;
