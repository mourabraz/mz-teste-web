import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Content } from './styles';

export const Navbar: React.FC = () => {
  return (
    <Container>
      <Content>
        <nav>
          <NavLink to="/">
            <span>List Parts</span>
          </NavLink>
        </nav>
      </Content>
    </Container>
  );
};
