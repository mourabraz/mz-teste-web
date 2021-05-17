import styled, { css } from 'styled-components';

interface HeaderProps {
  isEmpty: boolean;
  disabled: boolean;
}

/* interface ContainerProps {} */

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 8px;

  border-radius: 8px;
  border: 1px solid #ccc;

  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

export const Header = styled.button<HeaderProps>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border: none;
  background-color: transparent;
  cursor: pointer;

  p {
    flex: 1;
    background: transparent;
    font-style: ${props => (props.isEmpty ? 'italic' : 'normal')};
    color: ${props => (props.isEmpty ? '#aaa' : 'inherit')};
  }

  > span {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > svg {
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

export const List = styled.div`
  position: absolute;
  top: 42px;
  z-index: 10;
  width: 100%;
  max-height: 215px;
  border: 1px solid #dfdfdf;
  border-top: none;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  box-shadow: 0 2px 5px -1px #e8e8e8;
  background-color: white;
  font-weight: 700;
  text-align: left;
  -webkit-overflow-scrolling: touch;
`;

export const ScrollList = styled.div`
  overflow-y: scroll;
  max-height: 215px;
  padding: 8px 0;
`;

export const ListItem = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
  background: transparent;
  text-align: left;
  overflow: hidden;
  width: 100%;
  padding: 8px 10px;
  font-size: 1.4rem;
  line-height: 1.4rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;

  &:hover {
    background-color: #dfdfdf;
  }
`;
