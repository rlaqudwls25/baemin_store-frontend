import React, { Component } from 'react';
import './Recommend.scss';

export default class Recommend extends Component {
  render() {
    return (
      <article className="recommend-item">
        <a href="/">
          <img alt="recommend-item-img" src="/Images/default.png" />
          <div>
            <p className="recommend-item-title">그래, 결심했어!</p>
            <p className="recommend-item-desc">레터링시트지</p>
          </div>  
        </a>
      </article>
    )
  }
}
