import React, { useState } from 'react';

import { Form } from '@unform/web';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { FiLock, FiMail } from 'react-icons/fi';

import { Container, Main, Content, Background } from './styles';

const SignIn: React.FC = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });

  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Main>
        <Content>
          <h1>Entrar</h1>
          <Form onSubmit={handleSubmit}>
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
          </Form>
          <p>
            <a href="cadastrar">
              Esqueci minha senha
            </a>
          </p>
        </Content>
        <Background>
        </Background>
      </Main>
    </Container>
  );
}

export default SignIn;
