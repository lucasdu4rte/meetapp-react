import styled from 'styled-components';
import { Form, Input } from '@rocketseat/unform';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  height: 100%;

  background: #42275a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #42275a,
    #734b6d
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #42275a,
    #734b6d
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;
`;

export const Logo = styled.div`
  width: 72px;
  font-size: 76px;
  width: 100%;
  text-align: center;
  font-weight: 700;
  color: #f94d6a;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  span {
    color: #ecf0f1;
    margin-bottom: 3px;
  }
  button {
    margin-top: 15px;
  }
`;

export const StyledInput = styled(Input)`
  background: rgba(0, 0, 0, 0.2);
  border: 0;
  border-radius: 4px;
  height: 44px;
  padding: 0px 15px;
  color: #fff;
  margin: 0 0 10px;

  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const PrimaryButton = styled.button`
  margin: 5px 0 0;
  height: 44px;
  background: #f94d6a;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 18px;
  transition: background 0.2s;

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
