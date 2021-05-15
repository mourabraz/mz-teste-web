import React from 'react';
import { FiX } from 'react-icons/fi';

import { Container } from './styles';

export const Error: React.FC = () => {
  return (
    <Container>
      <button type="button">
        <FiX size={14} color="white" />
      </button>

      <p>Error message as an example!</p>
    </Container>
  );
};
