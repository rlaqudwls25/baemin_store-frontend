import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss'

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navigation">
        <header>
          <div className="nav-header-wrap">
            <ul>
              <li key="login">
                <Link to="/">로그인</Link>
              </li>
              <li key="register">
                <Link to="/">회원가입</Link>
              </li>
              <li key="mypage">
                <Link to="/">마이페이지</Link>
              </li>
              <li key="cart" class="nav-cart">
                <Link to="/">
                  장바구니<span className="cart-count">0</span>
                </Link>
              </li>
            </ul>
          </div>
        </header>
        <section>
          <div className="nav-section-wrap">
            <a href="/">
              <img alt="logo-nav" src="./Images/logo-nav.png" /> 
            </a>
          </div>
        </section>
        <footer>
          <ul>
            <li key="category-all"><Link to="/">전체</Link></li>
            <li key="category-stationary"><Link to="/">문구</Link></li>
            <li key="category-living"><Link to="/">리빙</Link></li>
            <li key="category-book"><Link to="/">책</Link></li>
            <li key="category-bmfriends"><Link to="/">배달이친구들</Link></li>
            <li key="category-giftset"><Link to="/">선물세트</Link></li>
          </ul>
        </footer>
      </nav>
    )
  }
}
