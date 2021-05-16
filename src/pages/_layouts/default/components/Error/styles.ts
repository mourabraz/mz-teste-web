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
  justify-content: flex-start;
  z-index: 2;
  padding: 8px;
  border: solid 1px red;
  border-radius: 8px;
  background-color: #ffbaba;
  color: #a70000;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-bottom: 16px;

  p {
    font-weight: bold;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: #a70000;
  }
`;

export const Content = styled.div``;

export const MessagesBox = styled.div``;
