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

  > svg {
    align-self: center;
    margin: 100px 0;
  }
`;

export const ToolBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div + div {
    margin-left: 8px;
  }

  @media (max-width: 550px) {
    flex-direction: column;

    div + div {
      margin-left: 0;
      margin-top: 8px;
    }
  }
`;

export const Items = styled.div`
  margin-bottom: 32px;

  div + div {
    margin-top: 8px;
  }

  animation: fade-in 600ms ease-in-out;
`;

export const InfoBox = styled.div`
  margin-top: 32px;
  margin-left: 16px;
  display: flex;
  align-items: center;
  justify-content: start;

  p {
    font-size: 75%;
    font-style: italic;
    color: #666;
  }
`;
