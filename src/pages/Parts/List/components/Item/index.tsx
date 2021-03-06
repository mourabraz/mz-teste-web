import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowRightCircle } from 'react-icons/fi';

import { Part } from '../../../../../interfaces/part';

import { Container } from './styles';

interface ItemProps {
  item: Part;
}

export const Item: React.FC<ItemProps> = ({ item: { name, type, price } }) => {
  const history = useHistory();

  const handleClickDetails = () => {
    history.push('/show', { part: { name, type, price } });
  };

  return (
    <Container>
      <p>{name}</p>
      <p>{type}</p>
      <p className="text-right">{price}</p>
      <button type="button" onClick={handleClickDetails}>
        <FiArrowRightCircle size={20} color="#c22f3e" />
      </button>
    </Container>
  );
};
