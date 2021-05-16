import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

import { Container } from './styles';

export const Error: React.FC = () => {
  const [open, setOPen] = useState(true);

  return (
    <>
      {open ? (
        <Container>
          <button type="button" title="Close">
            <FiX size={14} color="white" onClick={() => setOPen(false)} />
          </button>

          <p>Error message as an example!</p>
        </Container>
      ) : null}
    </>
  );
};
