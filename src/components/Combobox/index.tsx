import React, { useState, useEffect, useCallback } from 'react';
import { FiChevronUp, FiChevronDown, FiCheck } from 'react-icons/fi';

import { Loading } from '../Loading';

import { Container, Header, List, ScrollList, ListItem } from './styles';

interface IComboboxProps {
  title: string;
  list: string[];
  loading: boolean;
  loadingColor?: string;
  iconColor?: string;
  onSelected(value: string): void;
  disabled?: boolean;
}

export const Combobox: React.FC<IComboboxProps> = ({
  title,
  list,
  loading,
  loadingColor,
  iconColor = '#444',
  onSelected,
  disabled = false,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string>();
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    setItems(list);
  }, [list]);

  const toggle = useCallback((): void => {
    if (!disabled) {
      setOpen(state => !state);
    }
  }, [disabled]);

  const selectItem = useCallback(
    (s: string): void => {
      setSelected(s);
      onSelected(s);
    },

    [onSelected],
  );

  const handleClickToSelect = useCallback(
    (s): void => {
      if (selected && selected === s) selectItem('');
      else selectItem(s);
    },
    [selected, selectItem],
  );

  return (
    <Container>
      <Header
        type="button"
        onClick={toggle}
        isEmpty={!selected}
        disabled={disabled}
      >
        {loading ? (
          <span>
            <Loading color={loadingColor} />
          </span>
        ) : (
          <p>{title}</p>
        )}

        {open ? (
          <FiChevronUp size="20" color={iconColor} />
        ) : (
          <FiChevronDown size="20" color={iconColor} />
        )}
      </Header>

      {open && (
        <List>
          <ScrollList onMouseLeave={(): void => setOpen(false)}>
            {items.length &&
              items.map(item => (
                <ListItem key={item} onClick={() => handleClickToSelect(item)}>
                  {item}
                  {item === selected && <FiCheck size={14} />}
                </ListItem>
              ))}
          </ScrollList>
        </List>
      )}
    </Container>
  );
};
