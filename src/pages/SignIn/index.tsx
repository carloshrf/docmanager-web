import React, { useState } from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { FiKey, FiLock, FiMail } from 'react-icons/fi';

import { Container, Main, Content, Background } from './styles';

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
          <form>
            <Input
              value={inputValues.email}
              icon={FiMail}
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
              icon={FiLock}
              name="password"
              type="password"
              onChange={(e) =>
                setInputValues({
                  ...inputValues,
                  password: e.target.value
                })
              }
            />

            <Button type="submit">
              Entrar
            </Button>
            </form>
            <a href="cadastrar">
              <FiKey />
              Esqueci minha senha
            </a>
        </Content>
        <Background>
        </Background>
      </Main>
    </Container>
  );
}

export default SignIn;
