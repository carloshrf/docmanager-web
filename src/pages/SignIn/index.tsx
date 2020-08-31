import React, { useState, useCallback } from 'react';

import { Form } from '@unform/web';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { FiLock, FiMail } from 'react-icons/fi';

import { Container, Main, Content, Background } from './styles';

const SignIn: React.FC = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string()
          .min(6, 'Senha mínima de 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

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
