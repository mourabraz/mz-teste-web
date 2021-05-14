import React from 'react';

import { Part } from '../../../../../interfaces/part';

import { Container } from './styles';

interface ItemProps {
  item: Part;
}

export const Item: React.FC<ItemProps> = ({ item: { name, type, price } }) => {
  return (
    <Container>
      <p>{name}</p>
      <p>{type}</p>
      <p className="text-right">{price}</p>
    </Container>
  );
};
