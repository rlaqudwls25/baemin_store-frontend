import React, { Component} from 'react';
import { Link } from "react-router-dom";
import './Item.scss';

export default class Item extends Component {
  render() {

    const {itemId, url, sale, title, price} = this.props;

    return (
      <div className="Item">
        <li className="item_list" key={itemId}>
          <div className="item_cont">
              <div className="item_photo_box">
                  <Link to="/main">
                  <img src={url} alt="아이템" className="img_list"/>
                  </Link>
              </div>
                <div className="item_info">
                  <div className="item_info_sale">
                    <span className="item_info_pert">{sale}</span>
                  </div>
                  <div className="item_tit_box">
                    <Link to="/">
                    <strong>{title}</strong>
                    </Link>
                  </div>
                  <div className="item_money_box">
                      <span className="money_sale_line">{price}</span>
                      <strong>
                      <span className="finally_money">13,000원</span>
                      </strong>
                  </div>
                </div>
            </div>
        </li>
      </div>
    )
  }
}
