import React from 'react';
import { useLocation } from 'react-router-dom';

import { Part } from '../../../interfaces/part';

import { Container, InfoBox } from './styles';

export const Show: React.FC = () => {
  const {
    state: { part },
  } = useLocation<{ part: Part }>();

  return (
    <Container>
      <h1>Details Part</h1>

      <InfoBox>
        <p>
          <span>Name:</span>
          {part.name}
        </p>
        <p>
          <span>Type:</span>
          {part.type}
        </p>
        <p>
          <span>Price</span>
          {part.price}
        </p>
      </InfoBox>
    </Container>
  );
};
