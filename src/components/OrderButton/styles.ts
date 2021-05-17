import styled, { css } from 'styled-components';

interface ContainerProps {
  disabled: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: 8px;

  border-radius: 8px;
  border: 1px solid #ccc;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: none;
    background-color: transparent;

    span {
      width: 100%;
      text-align: center;
    }

    ${props =>
      props.disabled
        ? css`
            cursor: not-allowed;
          `
        : null}
  }

  ${props =>
    props.disabled
      ? css`
          opacity: 0.5;
        `
      : null}
`;
