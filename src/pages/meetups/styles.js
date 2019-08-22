import styled from 'styled-components';
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

export const PrimaryButton = styled.button`
  padding: 10px 10px 10px 10px;
  background: #f94d6a;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.5s;
  cursor: pointer;

  &:hover {
    background: ${darken(0.1, '#f94d6a')};
  }
`;

export const List = styled.div``;

export const ListItem = styled(Link)`
  text-decoration: none;
  background: rgba(0, 0, 0, 0.3);
  transition: background 0.5s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 15px 25px;

  :hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.5);
  }

  .title {
    color: #fff;
    font-weight: bold;
  }
`;

export const ListItemExtra = styled.div`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);

  .icon {
    margin-left: 35px;
    color: rgba(255, 255, 255, 0.9);
    font-weight: bold;
  }
`;

export const ButtonsLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonsRight = styled.div`
  display: flex;
  justify-content: center;
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

export const CancelButton = styled.button`
  padding: 10px 10px 10px 10px;
  background: #e74c3c;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.5s;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background: ${darken(0.1, '#e74c3c')};
  }

  .icon {
    margin-right: 5px;
  }
`;

export const EditButton = styled.button`
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

  &:hover {
    background: ${darken(0.1, '#3498db')};
  }

  .icon {
    margin-right: 5px;
  }
`;

export const PictureSection = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;

  img {
    border-radius: 6px;
    width: 100%;
  }
`;

export const DescriptionSection = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  color: #fff;
  text-align: justify;
  line-height: 30px;
`;

export const DetailsSection = styled.div`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  word-spacing: 3px;

  .date {
    margin-right: 20px;
  }
  .local {
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
