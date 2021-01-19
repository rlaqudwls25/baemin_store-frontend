import React, { Component } from "react";
import { Link } from 'react-router-dom';
import CartHeader from '../Components/CartHeader/CartHeader';
import CartItem from  '../Components/CartItem/CartItem';
import CartFooter from '../Components/CartFooter/CartFooter';
import { CARTLIST } from  './CartData';
import "./Cart.scss";


export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartList: CARTLIST,
    }
  }

  render() {
    const { cartList } = this.state;
    return (
      <div className="cart">
        <CartHeader />
        <section className="cart-items-container">
          <div className="cart-title">
            <div className="cart-title-left">
              <input type="checkbox" />
              <div className="cart-title-name">
                상품/옵션 정보
              </div>
            </div>
            <div className="cart-title-right">
              <div className="cart-title-counter">수량</div>
              <p className="cart-title-price">상품금액</p>
            </div>
          </div>
          {cartList.length === 0
            ? <p>장바구니에 담겨있는 상품이 없습니다.</p>
            : cartList.map((cartItem) => {
              const { img, name, count, price } = cartItem;
              return (
                <CartItem 
                  image={img}
                  name={name}
                  count={count}
                  price={price}  
                />
              )
            })
          }
          <div className="cart-additional-info">
            <Link to="/category">← 쇼핑 계속하기</Link>
            <div className="package-price">
              <p>기본 배송비 2,500원</p>
              <p>(택배 선결제)</p>
            </div>
          </div>
        </section>
        <CartFooter />
      </div>
    )
  }
}
