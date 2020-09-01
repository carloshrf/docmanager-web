import React, { useState, useCallback, useRef } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { FiLock, FiMail } from 'react-icons/fi';

import { Container, Main, Content, Background } from './styles';

const SignIn: React.FC = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

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
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Main>
        <Content>
          <h1>Entrar</h1>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              value={inputValues.email}
              icon={FiMail}
              label="E-mail"
              name="email"
              type="text"
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
