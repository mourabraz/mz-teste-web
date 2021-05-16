import React from 'react';
import { render, screen } from '@testing-library/react';

import { List } from '../../../../pages/Parts/List';

describe('Parts List', () => {
  it('should render an input text with placeholder "search"', () => {
    render(<List />);

    const input = screen.getByPlaceholderText(/search/i);

    expect(input).toHaveAttribute('type', 'text');
  });

  it('should render a button with text "type"', () => {
    render(<List />);

    const loadings = screen.getAllByTestId('loading');

    const button = loadings[0].closest('button');

    expect(button).toHaveAttribute('type', 'button');
  });

  it('should render a button with text "price order"', () => {
    render(<List />);

    const button = screen.getByText(/price order/i).closest('button');

    expect(button).toHaveAttribute('type', 'button');
  });
});
