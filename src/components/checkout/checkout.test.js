import React from "react";
import { render, fireEvent } from '@testing-library/react';
import Checkout from "./checkout";
import axiosMock from 'axios';

describe('Tests do componente checkout', () => {

    const dadosFinalizarCompra = {
        email: 'ajs21br@gmail.com',
        nomeCompleto: 'Antonio Gonzalez',
        cpf: '708.701.292-44',
        endereco: 'Rua 3712',
        cidade: 'Balneário Camboriú',
        estado: 'SC',
        cep: '45654-565',
        termosCondicoes: true,
        emailPromocional: 'S',
        dataNascimento: '2021-10-27T03:00:00.000Z',
        produtos: '{}', //'{"produtos":[{"nome":"Algoritmos e Estrutura de Dados","preco":"R$ 25,99","quantidade":1}]}',
        total: 'R$ 25,99'
    };

    it('deve finalizar a compra com sucesso', async () => {
        axiosMock.get.mockResolvedValueOnce({ data: ["Balneário Barra do Sul", "Balneário Camboriú"] });
        const { findByTestId, getByTestId, getByPlaceholderText } = render(
            <Checkout
                visivel={true}
                handleExibirProdutos={() => false}
                total={'25,99'}
                produtos={{}}
                handleLimparCarrinho={() => false}
            />
        );

        fireEvent.change(getByTestId('txt-email'), { target: { value: 'ajs21br@gmail.com' } });
        fireEvent.change(getByTestId('txt-nome-completo'), { target: { value: 'Antonio Gonzalez' } });
        fireEvent.change(getByPlaceholderText('Selecione a data'), { target: { value: '2021-10-27T03:00:00.000Z' } });
        fireEvent.change(getByTestId('txt-cpf'), { target: { value: '708.701.292-44' } });
        fireEvent.change(getByTestId('txt-endereco'), { target: { value: 'Rua 3712' } });
        fireEvent.change(getByTestId('estado'), { target: { value: 'SC' } });
        const cidade = await findByTestId('cidade');
        fireEvent.change(cidade, { target: { value: 'Balneário Camboriú' } });
        fireEvent.change(getByTestId('txt-cep'), { target: { value: '45654-565' } });
        fireEvent.click(getByTestId('check-termos-condicoes'));

        fireEvent.click(getByTestId('btn-finalizar-compra'));
        const modal = await findByTestId('modal-compra-sucesso');
        expect(modal).toHaveTextContent('Compra realizada com sucesso!');
        expect(axiosMock.get).toHaveBeenCalledTimes(1);
        expect(axiosMock.post).toHaveBeenCalledTimes(1);
        //expect(axiosMock.post.mock.calls[0][1]).toStrictEqual(dadosFinalizarCompra);


    });
});