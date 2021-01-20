import React, { Component} from 'react';
import { Link } from "react-router-dom";
import './Item.scss';

export default class Item extends Component {
  
  goToDetail = () => {
    this.stats.history.push("/category/detail");
  }



  render() {
    
    //fecth
    // const {main_image, sale, name, price, money_replace} = this.props;

    //mock data
    const {itemId, url, sale, item, price} = this.props;


    return (
      <div className="Item" onClick={this.goToDetail}>
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
                      <strong>{item}</strong>
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
