import React, { Component } from 'react';


class DetailInfo extends Component {
  render() {


    return (
      <div className="DetailInfo">
        <div className="item_goods_sec">
            <div className="item_goods_tab">
              <ul>
                <li className="on">
                  <button className="link" type="button"
                  
                >상품 상세정보</button></li>
                <li><button className="link" type="button">배송안내</button></li>
                <li><button className="link" type="button">교환 및 반품안내</button></li>
                <li><button className="link" type="button">상품후기</button></li>
                <li><button className="link" type="button">상품문의</button></li>
              </ul>
            </div>
          </div>
      </div>
    );
  }
}

export default DetailInfo;