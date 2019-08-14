import React from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from 'store/modules/auth/actions';
import {
  Wrapper,
  Container,
  StyledForm,
  StyledInput,
  PrimaryButton,
  LinkButton,
  Logo,
} from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Há algo errado aqui, verifique o email digitado.')
    .required('Por favor, digite seu email.'),
  password: Yup.string()
    .min(4)
    .required('Por favor, digite sua senha.'),
});

const Signin = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Wrapper>
      <Container>
        <Logo>M</Logo>
        <StyledForm schema={schema} onSubmit={handleSubmit}>
          <StyledInput name="email" placeholder="Email" />
          <StyledInput name="password" type="password" placeholder="Senha" />

          <PrimaryButton spin={loading} type="submit">
            Entrar
          </PrimaryButton>
          <LinkButton to="/cadastre-se">Criar conta grátis</LinkButton>
        </StyledForm>
      </Container>
    </Wrapper>
  );
};

export default Signin;
