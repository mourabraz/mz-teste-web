import React from 'react';

import { Navbar } from './components/Navbar';
import { Error } from './components/Error';

import { Container } from './styles';

export const Default: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
      <Error />
    </>
  );
};
