import React, { Component } from 'react';
import Recommend from './Components/Recommend/Recommend'
import './Main.scss';

export default class Main extends Component {
  render() {
    return (
      <main className="main">
        <div className="main-slider">
          <img alt="슬라이더" src="./Images/default2.jpg" />
          <ul className="slider-dotbox">
            <li className="slider-dot focus"></li>
            <li className="slider-dot"></li>
            <li className="slider-dot"></li>
          </ul>
        </div>
        <div className="main-item-container">
          <section className="best-container">
            <h3>잘나가요</h3>
            <div className="best-wrap"></div>
          </section>
          <section className="new-container">
            <h3>새로 나왔어요</h3>
            <div className="new-wrap"></div>
          </section>
          <section className="recommend-container">
            <h3>선물하기 딱 좋아요!</h3>
            <div className="recommend-wrap">
              <Recommend />
              <Recommend />
            </div>
          </section>
          <section className="sale-container">
            <h3>지금은 할인 중</h3>
            <div className="sale-wrap"></div>
          </section>
        </div>
      </main>
    )
  }
}
