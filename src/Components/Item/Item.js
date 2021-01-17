import React, { Component} from 'react';
import { Link } from "react-router-dom";
import './Item.scss';

export default class Item extends Component {
  render() {

    const {itemId, main_image, sale, name, price, money_replace} = this.props;

    return (
      <div className="Item">
        <li className="item_list" key={itemId}>
          <div className="item_cont">
              <div className="item_photo_box">
                <Link to="/main">
                  <img src={main_image} alt="아이템" className="img_list"/>
                </Link>
              </div>
                <div className="item_info">
                  <div className="item_info_sale">
                    <span className="item_info_pert">{sale}</span>
                  </div>
                  <div className="item_tit_box">
                    <Link to="/">
                      <strong>{name}</strong>
                    </Link>
                  </div>
                  <div className="item_money_box">
                      <span className="money_sale_line">{money_replace}</span>
                      <strong>
                      <span className="finally_money">{Math.round(price)}</span>
                      </strong>
                  </div>
                </div>
            </div>
        </li>
      </div>
    )
  }
}
