import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  min-width: 200px;
  max-width: 400px;
  min-height: 115px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  padding: 24px 16px;
  border: solid 1px red;
  border-radius: 8px;
  background-color: #ffbaba;
  color: #a70000;

  button {
    position: absolute;
    top: 4px;
    right: 4px;

    border: none;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: #a70000;
  }
`;
