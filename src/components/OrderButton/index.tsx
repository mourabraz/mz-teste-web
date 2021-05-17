import React from 'react';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';

import { Container } from './styles';

interface OrderButtonProps {
  label?: string;
  title?: string;
  order: 'asc' | 'desc';
  iconColor?: string;
  onOrderChange: (order: 'asc' | 'desc') => void;
  disabled?: boolean;
}
export const OrderButton: React.FC<OrderButtonProps> = ({
  label = '',
  title = '',
  order,
  iconColor = '#444',
  disabled = false,
  onOrderChange,
}) => {
  const handleClick = () => {
    if (!disabled) {
      onOrderChange(order === 'asc' ? 'desc' : 'asc');
    }
  };

  return (
    <Container title={title} disabled={disabled}>
      <button type="button" onClick={handleClick}>
        {label ? <span>{label}</span> : null}
        {order === 'asc' ? (
          <FiArrowDown size={20} color={iconColor} />
        ) : (
          <FiArrowUp size={20} color={iconColor} />
        )}
      </button>
    </Container>
  );
};
