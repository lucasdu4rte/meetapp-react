import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'store/modules/auth/actions';
import {
  Container,
  Logo,
  PrimaryButton,
  RightHeader,
  StyledLink,
} from './styles';

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <section>
        <StyledLink to="/meus-meetups">
          <Logo>M</Logo>
        </StyledLink>
      </section>
      <section>
        <RightHeader>
          <div className="info">
            <div className="user-name">{user.name}</div>
            <div className="profile-link">
              <StyledLink to="/perfil">Meu perfil</StyledLink>
            </div>
          </div>
          <PrimaryButton type="button" onClick={handleSignOut}>
            Sair
          </PrimaryButton>
        </RightHeader>
      </section>
    </Container>
  );
};

export default NavBar;
