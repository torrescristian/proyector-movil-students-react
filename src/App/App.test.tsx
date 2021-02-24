import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '.';

test('renders learn react link', () => {
  render(<App />);
  const linkElementReproducir = screen.getByText(/Reproducir/i);
  const linkElementCompartir = screen.getByText(/Compartir/i);
  expect(linkElementReproducir).toBeInTheDocument();
  expect(linkElementCompartir).toBeInTheDocument();
});
