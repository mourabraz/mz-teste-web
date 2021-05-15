import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 62px;
  background: linear-gradient(112.04deg, #130040 3.25%, #250178 99.18%);
  box-shadow: rgb(0 0 0 / 20%) 0px 4px 8px;
  top: 0px;
`;

export const Content = styled.div`
  max-width: 1110px;
  height: 100%;
  margin: auto;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    a {
      font-weight: bold;
      color: white;
      text-transform: uppercase;
      display: flex;
      justify-content: center;
      align-items: center;

      &.active {
        span {
          border-bottom: 1px solid #c22f3e;
        }
      }
    }
  }
`;
