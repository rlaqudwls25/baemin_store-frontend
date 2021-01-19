import React, { Component } from 'react';
import './CartHeader.scss';

export default class CartHeader extends Component {
  render() {
    return (
      <header className="cart-stage">
        <h2>장바구니</h2>
        <ol>
          <li>01 장바구니<span>▶︎</span></li>
          <li>02 주문서 작성/결제<span>▶︎</span></li>
          <li>03 주문완료</li>
        </ol>
      </header>
    )
  }
}
