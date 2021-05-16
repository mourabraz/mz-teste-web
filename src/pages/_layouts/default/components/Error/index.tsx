import React, { useCallback, useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';

import { useError } from '../../../../../hooks/error';

import { Container, Header, Content, MessagesBox } from './styles';

export const Error: React.FC = () => {
  const {
    visible,
    setVisible,
    title,
    setTitle,
    messages,
    setMessages,
    child,
    setChild,
    clear,
  } = useError();

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleClickToClose = useCallback(() => {
    clear();
  }, []);

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
            {child}
          </Content>
        </Container>
      ) : null}
    </>
  );
};
