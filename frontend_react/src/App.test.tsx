import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './SentenceAnalyser';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/React/i);
  expect(linkElement).toBeInTheDocument();
});
