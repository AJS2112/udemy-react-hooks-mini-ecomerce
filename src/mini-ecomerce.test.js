import { render, screen } from '@testing-library/react';
import MiniEcomerce from './mini-ecomerce';

describe('Test do componente mini-ecomerce', () => {

  it('deve renderizar o componente sem erros', () => {
    render(<MiniEcomerce />);
    const linkElement = screen.getByText(/checkout/i);
    expect(linkElement).toBeInTheDocument();
  });

});
