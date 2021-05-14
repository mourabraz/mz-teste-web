import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyle from './styles/global';

import { List as ListParts } from './pages/Parts/List';
import { Show as ShowPart } from './pages/Parts/Show';
import { Default } from './pages/_layouts/default';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Default>
          <Route path="/" exact component={ListParts} />
          <Route path="/show" component={ShowPart} />
        </Default>
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
