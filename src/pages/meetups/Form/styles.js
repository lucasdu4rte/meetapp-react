import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

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
`;

export const Container = styled.div`
  margin-left: 15%;
  margin-right: 15%;
`;

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 30px;
  margin-bottom: 30px;
  .title {
    color: #fff;
  }
`;

export const PrimaryButton = styled(Link)`
  padding: 10px 10px 10px 10px;
  background: #f94d6a;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.5s;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: ${darken(0.1, '#f94d6a')};
  }
`;

export const ButtonsLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonsRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const BackButton = styled(Link)`
  padding: 10px 10px 10px 0px;
  background: transparent;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: color 0.5s;
  cursor: pointer;

  &:hover {
    color: ${darken(0.1, '#fff')};
  }
`;

export const SaveButton = styled.button`
  margin-right: 5px;
  padding: 10px 10px 10px 10px;
  background: #3498db;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.5s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${darken(0.1, '#3498db')};
  }

  .icon {
    margin-right: 5px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  span {
    color: #ecf0f1;
    margin-bottom: 10px;
  }
  button {
    margin-top: 15px;
  }
`;

export const StyledInput = styled(Input)`
  background: rgba(0, 0, 0, 0.2);
  border: 0;
  border-radius: 4px;
  height: ${props => (props.multiline ? '120px' : '44px')};
  padding: ${props => (props.multiline ? '15px 15px' : '0px 15px')};
  color: #fff;
  margin: 0 0 10px;
  resize: none;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.05px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;
