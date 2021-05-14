import styled from 'styled-components';

interface IHeaderProps {
  placeholderPosition?: 'left' | 'center' | 'right';
}

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 8px;

  border-radius: 8px;
  border: 1px solid #ccc;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div<IHeaderProps>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

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

export const List = styled.div`
  position: absolute;
  top: 42px;
  z-index: 10;
  /* overflow-y: scroll; */
  width: 100%;
  max-height: 215px;
  border: 1px solid rgb(223, 223, 223);
  border-top: none;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  box-shadow: 0 2px 5px -1px rgb(232, 232, 232);
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
    background-color: yellow;
  }
`;
