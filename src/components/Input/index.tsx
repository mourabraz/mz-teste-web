import React, { InputHTMLAttributes, useRef, useState } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  time?: number;
  valueChange: (value: string) => void;
  icon?: React.ComponentType<IconBaseProps>;
  iconColor?: string;
  placeholderPosition?: 'left' | 'center' | 'right';
}

export const Input: React.FC<InputProps> = ({
  time = 600,
  valueChange,
  icon: Icon,
  iconColor = '#444',
  placeholderPosition = 'left',
  ...rest
}) => {
  const timer = useRef(0);
  const [inputValue, setInputValue] = useState('');

  const handleChangeInput = ({
    currentTarget,
  }: React.FormEvent<HTMLInputElement>) => {
    if (timer.current) window.clearTimeout(timer.current);

    setInputValue(currentTarget.value);

    timer.current = window.setTimeout(() => {
      valueChange(currentTarget.value);
    }, time);
  };

  return (
    <Container placeholderPosition={placeholderPosition}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChangeInput}
        {...rest}
      />
      {Icon && <Icon size={20} color={iconColor} />}
    </Container>
  );
};
