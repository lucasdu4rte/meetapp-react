import React from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { signUpRequest } from 'store/modules/auth/actions';
import Spinner from 'components/Spinner';
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
  name: Yup.string().required('Por favor, digite seu nome completo.'),
  email: Yup.string()
    .email('Há algo errado aqui, verifique o email digitado.')
    .required('Por favor, digite seu email.'),
  password: Yup.string()
    .min(4)
    .required('Por favor, digite sua senha.'),
});

const Signup = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Wrapper>
      <Container>
        <Logo>M</Logo>
        <StyledForm schema={schema} onSubmit={handleSubmit}>
          <StyledInput name="name" placeholder="Nome completo" />
          <StyledInput name="email" placeholder="Email" />
          <StyledInput name="password" type="password" placeholder="Senha" />

          <PrimaryButton disabled={loading} type="submit">
            {loading && <Spinner style={{ margin: '0 5px', color: '#fff' }} />}
            Cadastrar
          </PrimaryButton>
          <LinkButton to="/">Já tenho conta</LinkButton>
        </StyledForm>
      </Container>
    </Wrapper>
  );
};

export default Signup;
