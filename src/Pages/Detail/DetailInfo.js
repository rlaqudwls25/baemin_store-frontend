import React, { Component } from 'react';

class DetailInfo extends Component {
  render() {
    return (
      <div className="DetailInfo">
        <div className="item_goods_sec">
            <div className="item_goods_tab">
              <ul>
                <li className="on"><a href="/">상품 상세정보</a></li>
                <li><a href="/">배송안내</a></li>
                <li><a href="/">교환 및 반품안내</a></li>
                <li><a href="/">상품후기</a></li>
                <li><a href="/">상품문의</a></li>
              </ul>
            </div>
          </div>
      </div>
    );
  }
}

export default DetailInfo;