import React, {
  InputHTMLAttributes,
  useCallback,
  useRef,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';

import { Container, Header, List, ScrollList, ListItem } from './styles';

interface InputAutocompleteProps extends InputHTMLAttributes<HTMLInputElement> {
  items: string[];
  time?: number;
  valueChange: (value: string) => void;
  icon?: React.ComponentType<IconBaseProps>;
  placeholderPosition?: 'left' | 'center' | 'right';
}

export const InputAutoComplete: React.FC<InputAutocompleteProps> = ({
  items,
  time = 300,
  valueChange,
  icon: Icon,
  placeholderPosition = 'left',
  ...rest
}) => {
  const timer = useRef(0);
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSugestions] = useState<string[]>((): string[] => [
    ...items,
  ]);

  const handleChangeInput = useCallback(
    ({ currentTarget }: React.FormEvent<HTMLInputElement>) => {
      if (timer.current) window.clearTimeout(timer.current);

      setInputValue(currentTarget.value);

      if (!open) {
        setOpen(true);
      }

      if (!currentTarget.value) {
        setOpen(false);
      }

      timer.current = window.setTimeout(() => {
        setSugestions(
          items.filter(i =>
            i.toLowerCase().trim().includes(currentTarget.value.toLowerCase()),
          ),
        );
        valueChange(currentTarget.value);
      }, time);
    },
    [],
  );

  const handleClickListItem = useCallback(value => {
    setInputValue(value);
    setOpen(false);
  }, []);

  return (
    <Container>
      <Header
        placeholderPosition={placeholderPosition}
        // onMouseLeave={(): void => setOpen(false)}
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleChangeInput}
          // onBlur={(): void => setOpen(false)}
          {...rest}
        />
        {Icon && <Icon size={20} />}
      </Header>

      {open && suggestions.length ? (
        <List>
          <ScrollList>
            {suggestions.map(item => (
              <ListItem key={item} onClick={() => handleClickListItem(item)}>
                {item}
              </ListItem>
            ))}
          </ScrollList>
        </List>
      ) : null}
    </Container>
  );
};
