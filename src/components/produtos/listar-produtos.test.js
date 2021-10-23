import React from "react";
import { render } from '@testing-library/react';
import ListarProdutos from "./listar-produtos";

describe('Tests do componente Listar Produtos', () => {

    it('deve exibir os nomes dos produtos nos cards', () => {
        const { getByTestId } = render(
            <ListarProdutos
                adicionarProduto={() => false}
                exibirMensagem={() => false} />
        );
        expect(getByTestId('card1')).toHaveTextContent('Aprenda C#');
        expect(getByTestId('card2')).toHaveTextContent('JavaScript em 24 horas');

    });

    it('deve exibir as descricoes dos produtos nos cards', () => {
        const { getByTestId } = render(
            <ListarProdutos
                adicionarProduto={() => false}
                exibirMensagem={() => false} />
        );
        expect(getByTestId('card1')).toHaveTextContent('Descricao do produto aqui...');
        expect(getByTestId('card2')).toHaveTextContent('Descricao do produto aqui...');
    });

    it('deve exibir os precos dos produtos nos botoes de comprar', () => {
        const { getByTestId } = render(
            <ListarProdutos
                adicionarProduto={() => false}
                exibirMensagem={() => false} />
        );
        expect(getByTestId('card1')).toHaveTextContent('Comprar (R$ 59,99)');
        expect(getByTestId('card2')).toHaveTextContent('Comprar (R$ 19,99)');

    });

});
