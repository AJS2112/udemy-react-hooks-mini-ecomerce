import React, { useState } from "react";
import { Form, Row, Col, Button, Jumbotron, Modal } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

registerLocale('pt', pt);

function Checkout(props) {

    return (
        <Jumbotron fluid style={{ margin: '10px' }}>
            <h3 className="text-center">Finalizar compra</h3>

            <Form noValidate style={{ margin: '10px' }}>
                <Form.Group as={Row} controlId="email">
                    <Form.Label column sm={3}>Email</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="email" placeholder="Digite o seu email" name="email" data-testid="txt-email" />
                        <Form.Control.Feedback type="invalid">Digite um email válido.</Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="nomeCompleto">
                    <Form.Label column sm={3}>Nome completo</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" placeholder="Digite o seu nome completo" name="nomeCompleto" data-testid="txt-nome-completo" />
                        <Form.Control.Feedback type="invalid">Digite o seu nome completo (mínimo 5 caracteres).</Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="dataNascimento">
                    <Form.Label column sm={3}>Data nascimento</Form.Label>
                    <Col sm={9}>
                        <DatePicker locale="pt" peekNextMonth showMonthDropdown showYearDropdown dropdownMode="select" dateFormat="dd/MM/yyyy" placeholderText="Selecione a data" withPortal />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="cpf">
                    <Form.Label column sm={3}>CPF</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" placeholder="Digite o seu CPF" name="cpf" data-testid="txt-cpf" />
                        <Form.Control.Feedback type="invalid">Digite um CPF válido </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="endereco">
                    <Form.Label column sm={3}>Endereço</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" placeholder="Digite o seu endereco completo" name="endereco" data-testid="txt-endereco" />
                        <Form.Control.Feedback type="invalid">Digite um endereço válido</Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="estado">
                    <Form.Label column sm={3}>Estado</Form.Label>
                    <Col sm={9}>
                        <Form.Control as="select" name="estado" data-testid="estado">
                            {/* listagem dos estados */}
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">Selecione um estado</Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="cidade">
                    <Form.Label column sm={3}>Cidade</Form.Label>
                    <Col sm={9}>
                        <Form.Control as="select" name="cidade" data-testid="cidade">
                            <option value="">Selecione uma cidade</option>
                            {/* listagem dos estados */}
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">Selecione uma cidade</Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="cep">
                    <Form.Label column sm={3}>CEP</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" placeholder="Digite o seu CEP" name="cep" data-testid="txt-cep" />
                        <Form.Control.Feedback type="invalid">Digite o seu CEP</Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="emailPromocional">
                    <Form.Label column sm={12}>Deseja receber emails com promocoes</Form.Label>
                    <Form.Check inline name="emailPromocional" type="radio" id="promocaoSim" value="S" label="Sim" style={{ marginLeft: '15px' }} />
                    <Form.Check inline name="emailPromocional" type="radio" id="promocaoNao" value="N" label="Nao" style={{ marginLeft: '15px' }} />
                </Form.Group>

                <Form.Group as={Row} controlId="termosCondicoes">
                    <Form.Check inline name="termosCondicoes" label="Concordo com os termos e condicoes" style={{ marginLeft: '15px' }} data-testid="check-termos-condicoes" />
                </Form.Group>

                <Form.Group as={Row} controlId="finalizarCompra">
                    <Col className="text-center" sm={12}>
                        <Button type="submit" variant="success" data-testid="btn-finalizar-compra">Finalizar compra</Button>
                    </Col>
                </Form.Group>
            </Form>


        </Jumbotron>
    );
}

export default Checkout;