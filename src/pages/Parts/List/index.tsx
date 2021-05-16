import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import { Part, PartResponse } from '../../../interfaces/part';
import { useError } from '../../../hooks/error';

import { Input } from '../../../components/Input';
import { OrderButton } from '../../../components/OrderButton';
import { Loading } from '../../../components/Loading';
import { Combobox } from '../../../components/Combobox';
import { Item } from './components/Item';

import { Container, ToolBox, Items, InfoBox } from './styles';

const priceToNumber = (str: string): number => {
  let strToNumber = str;

  if (str.endsWith('$')) {
    strToNumber = str.slice(0, -1);
  }

  return Number(strToNumber);
};

const orderBy = {
  asc: (a: Part, b: Part) => {
    return a.value - b.value;
  },
  desc: (a: Part, b: Part) => {
    return b.value - a.value;
  },
};

export const List: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [loadingTypes, setLoadingTypes] = useState(true);
  const [typeParts, setTypeParts] = useState<string[]>([]);
  const [parts, setParts] = useState<Part[]>([]);
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [type, setType] = useState<string | null>(null);
  const [query, setQuery] = useState<string | null>(null);
  const error = useError();

  useEffect(() => {
    async function load() {
      try {
        setLoadingTypes(true);
        const responseJson = await fetch(
          `${process.env.REACT_APP_API_URL}/store/part-types`,
        );
        const result = (await responseJson.json()).sort();
        setTypeParts([...result]);
        setLoadingTypes(false);
      } catch (error) {
        console.error(error);
      }
    }
    load();
  }, []);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);

        const responseJson = await fetch(
          `${process.env.REACT_APP_API_URL}/store/parts?${
            type ? `type=${type}` : ''
          }&${query ? `query=${query}` : ''}`,
        );
        const response = await responseJson.json();

        const result = response
          .map((i: PartResponse) => ({
            ...i,
            value: priceToNumber(i.price),
          }))
          .sort(orderBy.asc);

        setParts([...result]);
        setOrder('asc');
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    load();
  }, [type, query]);

  const handleClickOrder = (toOrder: 'asc' | 'desc'): void => {
    setOrder(toOrder);
    setParts([...parts].sort(orderBy[toOrder]));
  };

  return (
    <Container>
      <h1>Store Parts</h1>

      <ToolBox>
        <Input
          icon={FiSearch}
          iconColor="#c22f3e"
          valueChange={setQuery}
          placeholder="search..."
        />
        <Combobox
          title={type || 'type'}
          list={typeParts}
          onSelected={setType}
          loading={loadingTypes}
          loadingColor="#c22f3e"
          iconColor="#c22f3e"
        />
        <OrderButton
          order={order}
          iconColor="#c22f3e"
          title="price order"
          label="price order"
          onOrderChange={handleClickOrder}
        />
      </ToolBox>

      {loading ? (
        <Loading size={50} color="#250178" />
      ) : (
        <>
          <InfoBox>
            <p>found {parts.length} parts</p>
          </InfoBox>
          <Items>
            {parts.map(i => (
              <Item key={i.name} item={i} />
            ))}
          </Items>
        </>
      )}
    </Container>
  );
};
