import styled from 'styled-components';

export const Container = styled.div`
  /* height: 200px; */
  /* width: 100%; */
  margin-bottom: 15px;
  border-radius: 6px;

  /* background: rgba(0, 0, 0, 0.3); */

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    transition: opacity 0.5s;
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.9);
    }

    input {
      display: none;
    }
  }
`;
