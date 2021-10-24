import React from 'react';
import { render } from '@testing-library/react';
import Menu from './menu';

describe('Tests do componente menu', () => {
    it('deve renderizar o componente sem erros', () => {
        const { getByText } = render(
            <Menu
                produtos={[]}
                handleExibirProdutos={() => false}
                handleExibirCheckout={() => false} />
        );
        const texto = getByText(/mini ecomerce/i);
        expect(texto).toBeInTheDocument();
    });
});