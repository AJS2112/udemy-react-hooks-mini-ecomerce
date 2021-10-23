import React from 'react';
import { render } from '@testing-library/react';
import Menu from './menu';

describe('Tests do componente menu', () => {
    it('deve renderizar o componente sem erros', () => {
        const { getByText } = render(<Menu />);
        const texto = getByText(/menu/i);
        expect(texto).toBeInTheDocument();
    });
});