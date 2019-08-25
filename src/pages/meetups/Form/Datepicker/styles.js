import styled from 'styled-components';

export const Container = styled.div`
  .flatpickr-input {
    margin-bottom: 10px;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.2);
    color: #fff;
    border: none;
    width: 100%;

    height: 44px;
    padding: 0px 15px;

    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0.05px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;
