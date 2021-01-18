import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class DetailInfo extends Component {
  render() {
    return (
      <div className="DetailInfo">
        <div className="item_goods_sec">
            <div className="item_goods_tab">
              <ul>
                <li className="on"><Link to="">상품 상세정보</Link></li>
                <li><Link to="">배송안내</Link></li>
                <li><Link to="">교환 및 반품안내</Link></li>
                <li><Link to="">상품후기</Link></li>
                <li><Link to="">상품문의</Link></li>
              </ul>
            </div>
          </div>
      </div>
    );
  }
}

export default DetailInfo;