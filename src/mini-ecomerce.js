import React, { useState } from 'react';
import './mini-ecomerce.css';
import Menu from './components/menu/menu';
import Produtos from './components/produtos/produtos';
import Checkout from './components/checkout/checkout';

function MiniEcomerce() {
  const [carrinho, setCarrinho] = useState({ produtos: [] });
  const [exibirProdutos, setExibirProdutos] = useState(true);
  const [exibirCheckout, setExibirCheckout] = useState(false);
  const [total, setTotal] = useState('0,00');

  return (
    <div>
      <Menu />
      <Produtos />
      <Checkout />
    </div>
  );
}

export default MiniEcomerce;
