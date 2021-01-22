import React, { Component} from 'react';
import { Link } from "react-router-dom";
import './Item.scss';

export default class Item extends Component {
  // goToDetail = () => {
  //   console.log("클릭");
  //   this.props.history.push("/category/detail");
  // }
  render() {
    //fecth
      const {CategoryId, main_image, name, price, money_replace, rate} = this.props;
      
      
    //mock data
    //const {itemId, url, sale, item, price} = this.props;

    return (
      <div className="Item">
        <li className="item_list" key={CategoryId}>
          <div className="item_cont">
              <div className="item_photo_box" onClick={this.goToDetail}>
                  <Link to="/detail">
                  <img src={main_image} alt="아이템" className="img_list"/>
                  </Link>
                  </div>
                <div className="item_info">
                  <div className="item_info_sale">
                    <span 
                    className="item_info_sale">
                      {Number(rate) !== 0 && `${Number(rate) * 100}%`}
                    </span>
                  </div>
                  <div className="item_tit_box">
                    <Link to="/">
                      <strong>{name}</strong>
                    </Link>
                  </div>
                  <div className="item_money_box">
                      <span 
                      className="money_sale_line">
                      {Number(rate) !== 0 && `${Number(price)}원`}
                      </span>
                      <strong>
                      <span className="finally_money">{Number(price) - price * rate}원</span>
                      </strong>
                  </div>
                </div>
            </div>
        </li>
        
      </div>
    )
  }
}
