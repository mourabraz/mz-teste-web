import React from 'react';
import { FiSearch, FiArrowDown, FiArrowUp } from 'react-icons/fi';

import { Input } from '../../../components/Input';
import { InputAutoComplete } from '../../../components/InputAutocomplete';
import { Item } from './components/Item';

import { Container, ToolBox, Items } from './styles';

const list = [
  { name: 'part1', type: 'type1', price: 100 },
  { name: 'part2', type: 'type2', price: 200 },
  { name: 'part3', type: 'type3', price: 300 },
];

export const List: React.FC = () => {
  return (
    <Container>
      <h1>Store Parts</h1>

      <ToolBox>
        <Input
          icon={FiSearch}
          valueChange={v => console}
          placeholder="search..."
        />
        <InputAutoComplete
          valueChange={v => console}
          items={['Mouse', 'Mousepad', 'Keyboard', 'Monitor']}
          placeholder="type"
          placeholderPosition="center"
        />
        <Input
          icon={FiArrowDown}
          valueChange={v => console}
          placeholder="price order"
        />
      </ToolBox>

      <Items>
        {list.map(i => (
          <Item key={i.name} item={i} />
        ))}
      </Items>
    </Container>
  );
};
