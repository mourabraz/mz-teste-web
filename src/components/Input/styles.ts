import styled, { css } from 'styled-components';

interface ContainerProps {
  placeholderPosition?: 'left' | 'center' | 'right';
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

  input {
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #aaa;
      text-align: ${props => props.placeholderPosition};
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  svg {
    margin-left: 8px;
  }

  ${props =>
    props.disabled
      ? css`
          opacity: 0.5;
          cursor: not-allowed;
        `
      : null}
`;
