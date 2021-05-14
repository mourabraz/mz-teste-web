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
`;
