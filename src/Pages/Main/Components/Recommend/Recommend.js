import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Recommend.scss';

export default class Recommend extends Component {
  render() {
    const { recommendId, link, img, title, desc } = this.props;
    return (
      <article className="recommend-item" key={recommendId}>
        <Link href={link}>
          <img alt="recommend-item-img" src={img} />
          <div>
            <p className="recommend-item-title">{title}</p>
            <p className="recommend-item-desc">{desc}</p>
          </div>  
        </Link>
      </article>
    )
  }
}
