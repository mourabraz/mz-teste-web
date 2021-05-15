import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  padding: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;

  p {
    width: 100%;

    &.text-right {
      text-align: right;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 16px;
    border: none;
    background-color: transparent;

    &:hover {
      filter: brightness(0.5);
    }
  }

  &:hover {
    background-color: #f8f8f8;
  }
`;
