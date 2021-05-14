import styled from 'styled-components';

interface ContainerProps {
  placeholderPosition?: 'left' | 'center' | 'right';
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
  }

  svg {
    margin-left: 8px;
  }
`;
