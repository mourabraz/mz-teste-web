import React, { useCallback } from 'react';
import { FiX } from 'react-icons/fi';

import { useError } from '../../../../../hooks/error';

import { Container, Header, Content, MessagesBox } from './styles';

export const Error: React.FC = () => {
  const { visible, title, messages, clear } = useError();

  const handleClickToClose = useCallback(() => {
    clear();
  }, [clear]);

  return (
    <>
      {visible ? (
        <Container>
          <Header>
            <p>{title}</p>

            <button type="button" title="Close">
              <FiX size={14} color="white" onClick={handleClickToClose} />
            </button>
          </Header>

          <Content>
            {messages.length ? (
              <MessagesBox>
                {messages.map(i => (
                  <p>{i}</p>
                ))}
              </MessagesBox>
            ) : null}
          </Content>
        </Container>
      ) : null}
    </>
  );
};
