import { render, screen } from '@testing-library/react';
import MiniEcomerce from './mini-ecomerce';

test('renders learn react link', () => {
  render(<MiniEcomerce />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
