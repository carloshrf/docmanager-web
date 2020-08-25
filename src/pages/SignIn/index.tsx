import React, { useState } from 'react';

import { Container, Main, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });

  return (
    <Container>
      <Main>
        <Content>
          <p>Entrar</p>

          <Input
            value={inputValues.email}
            label="E-mail"
            name="email"
            type="email"
            onChange={(e) =>
              setInputValues({
                ...inputValues,
                email: e.target.value
              })
            }
          />

          <Input
            value={inputValues.password}
            label="Senha"
            type="password"
            onChange={(e) =>
              setInputValues({
                ...inputValues,
                password: e.target.value
              })
            }
          />

          <Button />
        </Content>
        <Background>
          Bem vindo!
        </Background>
      </Main>
    </Container>
  );
}

export default SignIn;
