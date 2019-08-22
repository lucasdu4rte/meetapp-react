import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding-left: 15%;
  padding-right: 15%;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 32px;
  width: 100%;
  text-align: center;
  font-weight: 700;
  color: #f94d6a;
`;

export const PrimaryButton = styled.button`
  padding: 10px 10px 10px 10px;
  background: #f94d6a;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.5s;

  &:hover {
    background: ${darken(0.1, '#f94d6a')};
  }
`;

export const LinkButton = styled(Link)`
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  margin-top: 15px;
  text-decoration: none;

  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`;

export const StyledLink = styled(Link)`
  color: inherit;
  cursor: pointer;
  text-decoration: none;
`;

export const RightHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .info {
    margin-right: 20px;
  }

  .user-name {
    color: #fff;
    text-align: right;
    margin-top: 5px;
    font-weight: bold;
    font-size: 16px;
  }

  .profile-link {
    color: #fff;
    text-align: right;
    opacity: 0.8;
    cursor: pointer;
    margin-top: 5px;
    text-decoration: none;
    transition: opacity 0.2s;
    &:hover {
      opacity: 1;
    }
  }
`;
