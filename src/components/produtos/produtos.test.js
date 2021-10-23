import React from "react";
import { render } from '@testing-library/react';
import Produtos from './produtos';

describe('Tests do componente produtos', () => {
    it('deve renderizar o componente sem erros', () => {
        const { getAllByText } = render(
            <Produtos
                visivel={true}
                adicionarProduto={() => false} />
        );
        const botoes = getAllByText(/comprar/i);
        expect(botoes).toBeTruthy();
    });
});