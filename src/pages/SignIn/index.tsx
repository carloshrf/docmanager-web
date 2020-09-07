import React, { useState, useEffect, useCallback, useRef } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import Loading from '../../components/Loading';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { FiLock, FiMail } from 'react-icons/fi';

import { Container, Main, Content, Background } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });

  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast, removeToast } = useToast();

  const fakeRequest = useCallback(() => {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  }, []);

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string()
          .min(6, 'Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn({
        email: data.email,
        password: data.password,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }

      addToast();
    }
  }, [signIn, addToast]);

  useEffect(() => {
    fakeRequest().then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <Container>
      {
        !!isLoading
        ? <Loading />
        : <Main>
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
      }
    </Container>
  );
}

export default SignIn;
