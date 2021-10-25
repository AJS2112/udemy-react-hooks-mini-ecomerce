import React from "react";
import { render } from '@testing-library/react';
import ListarEstados from "./listar-estados";

describe('Testes do componente listar estados', () => {
    it('deve gerar uma listagem de estados', () => {
        const { getByTestId } = render(<ListarEstados />);
        expect(getByTestId('AM')).toHaveTextContent('Amazonas');
        expect(getByTestId('SP')).toHaveTextContent('São Paulo');
    });
});