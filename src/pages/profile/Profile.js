import React from 'react';
import * as Yup from 'yup';
import { Icon } from 'react-icons-kit';
import { arrowLeft2 } from 'react-icons-kit/icomoon/arrowLeft2';
import { checkmark } from 'react-icons-kit/icomoon/checkmark';
import { useDispatch, useSelector } from 'react-redux';

import NavBar from 'components/NavBar';
import Spinner from 'components/Spinner';

import { updateProfileRequest } from 'store/modules/user/actions';
import {
  Wrapper,
  Container,
  PageHeader,
  ButtonsLeft,
  ButtonsRight,
  SaveButton,
  BackButton,
  StyledForm,
  StyledInput,
} from './styles';
import AvatarInput from './AvatarInput';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Seu nome deve conter mais de 3 caracteres.')
    .required('Por favor, digite seu nome.'),
  email: Yup.string()
    .email('Digite um email válido.')
    .required('Por favor, digite seu nome.'),
  oldPassword: Yup.string().when('password', (password, field) =>
    password
      ? field.required('A senha antiga é obrigatória para atualizar.')
      : field
  ),
  password: Yup.string(),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password
      ? field
          .required('A confirmação de senha é obrigatória.')
          .oneOf(
            [Yup.ref('password')],
            'A senha confirmada é diferente da nova senha'
          )
      : field
  ),
});

const Profile = () => {
  const profile = useSelector(state => state.user.profile);
  const loading = useSelector(state => state.user.loading);
  const dispatch = useDispatch();

  function handleSubmit({
    name,
    email,
    oldPassword,
    password,
    confirmPassword,
  }) {
    dispatch(
      updateProfileRequest(name, email, oldPassword, password, confirmPassword)
    );
  }

  return (
    <Wrapper>
      <NavBar />
      <Container>
        <PageHeader>
          <ButtonsLeft>
            <BackButton to="/meus-meetups">
              <Icon icon={arrowLeft2} />
            </BackButton>
            <h2 className="title">Meu perfil</h2>
          </ButtonsLeft>
        </PageHeader>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <StyledForm
            schema={schema}
            initialData={profile}
            onSubmit={handleSubmit}
          >
            <AvatarInput name="avatar_id" />

            <StyledInput
              name="name"
              autoComplete="off"
              placeholder="Digite seu nome"
            />

            <StyledInput
              type="email"
              name="email"
              placeholder="Digite seu email"
            />

            <hr className="separator-section" />
            <h4 className="title-section">Alterar senha</h4>
            <StyledInput
              type="password"
              name="oldPassword"
              placeholder="Digite a senha atual"
            />

            <StyledInput
              type="password"
              name="password"
              placeholder="Digite a nova senha"
            />

            <StyledInput
              type="password"
              name="confirmPassword"
              placeholder="Confirmar nova senha"
            />

            <ButtonsRight>
              <SaveButton type="submit">
                {loading ? (
                  <Spinner
                    style={{
                      margin: '0 5px 0 0',
                      color: '#fff',
                      width: '15px',
                      height: '15px',
                    }}
                  />
                ) : (
                  <Icon className="icon" icon={checkmark} size={12} />
                )}{' '}
                Salvar perfil
              </SaveButton>
            </ButtonsRight>
          </StyledForm>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Profile;
