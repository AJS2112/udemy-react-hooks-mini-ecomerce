import React from "react";
import placeholder from '../../images/royal-trudel-640x427.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { render } from "@testing-library/react";
import { propTypes } from "react-bootstrap/esm/Image";


function ListarProdutos(props) {
    const produtos = [
        { nome: 'Aprenda C#', preco: 'R$ 59,99' },
        { nome: 'JavaScript em 24 horas', preco: 'R$ 19,99' },
        { nome: 'React em 7 dias', preco: 'R$ 29,99' },
        { nome: 'Algoritmos e Estrutura de Dados', preco: 'R$ 25,99' },
        { nome: 'Start Up', preco: 'R$ 29,99' },
        { nome: 'Testes Unitarios com Jasmine ', preco: 'R$ 14,99' },
        { nome: 'API RESTful com C#', preco: 'R$ 15,99' },
        { nome: 'Typescript na pratica', preco: 'R$ 9,99' }
    ];

    function handleComprar(event, produto) {
        event.preventDefault();
        //adicionar o produto
        props.adicionarProduto(produto);
        //exibir mensagem 
        props.exibirMensagem(produto);
    }

    function render() {
        let key = 1;
        const cards = produtos.map(produto =>
            <Card
                key={key}
                data-testid={'card' + key++}
                style={{ width: '18rem', margin: '10px', float: 'left' }} >
                <Card.Img variant="top" src={placeholder} />
                <Card.Body className="text-center">
                    <Card.Title style={{ height: '40px' }}>
                        {produto.nome}
                    </Card.Title>
                </Card.Body>
                <Card.Text>
                    Descricao do produto aqui...
                </Card.Text>
                <Button
                    variant="success"
                    style={{ width: '100%' }}
                    onClick={(event) => handleComprar(event, produto)}>
                    Comprar ({produto.preco})
                </Button>
            </Card>
        );
        return cards;
    }

    return render();
}

ListarProdutos.propTypes = {
    adicionarProduto: PropTypes.func.isRequired,
    exibirMensagem: PropTypes.func.isRequired
}

export default ListarProdutos;