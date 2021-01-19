import React, { Component } from 'react';
import './CartItem.scss';

export default class CartItem extends Component {
  render() {
    const { image, name, count, price } = this.props;
    return (
      <article className="cart-item">
        <div className="cart-item-left">
          <input type="checkbox" />
          <img src={image} alt="장바구니 상품" />
          <div className="cart-item-name">
            <button>쿠폰적용</button>
            <h4>{name}</h4>
          </div>
        </div>
        <div className="cart-item-right">
          <div className="cart-item-counter">
            <p className="cart-item-count">{count}개</p>
            <button>옵션/수량변경</button>
          </div>
          <p className="cart-item-price">{price}원</p>
        </div>
      </article>
    )
  }
}
