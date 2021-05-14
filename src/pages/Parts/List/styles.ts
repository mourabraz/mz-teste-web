import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;
`;

export const ToolBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div + div {
    margin-left: 8px;
  }
`;

export const Items = styled.div`
  margin: 32px 0;

  div + div {
    margin-top: 8px;
  }
`;
