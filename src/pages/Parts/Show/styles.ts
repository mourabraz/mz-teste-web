import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;
  background-color: white;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 8px;
  }
`;

export const InfoBox = styled.div`
  padding: 32px;
  border: solid 1px #aaa;
  border-radius: 8px;

  p {
    font-weight: bold;

    span {
      display: block;
      font-weight: normal;
    }

    & + p {
      margin-top: 16px;
    }
  }
`;
