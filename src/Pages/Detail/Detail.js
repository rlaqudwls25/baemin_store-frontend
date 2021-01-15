import React, { Component } from 'react';
import './Detail.scss'

class Detail extends Component {
  constructor(props){
    super(props);
    this.state = {
        count: 1
    };
  }
  
  countUp = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1
    })
  }

  countDown = () => {
    const { count } = this.state;
    this.setState({
      count: count -1
    })

    if(this.state.count === 0){
      alert("0이하로 못내려갑니다.");
    } 
  }

  render() {
    return (
      <div className="Detail">
        <section className="content">
          <div className="item_photo_info_sec">
            <div className="item_photo_view_box">
              <a href="/">
                <img src="https://store.baemin.com/data/goods/20/11/47/327/327_main_077.png" alt="상품 사진"></img>
              </a>
            </div>
          <div className="item_info_box">
            <div className="item_detail_tit">
              <h3>2021 다이어리. 오늘에 집중</h3>
            </div>
            <div className="item_detail_list">
              <div className="item_price">
                  <div className="price_name">판매가격</div>
                  <div className="price">3,500원</div>
              </div>
              <div className="item_delivery">
                <div className="delivery_info">배송정보</div>
                <div className="delivery_price">2,500원  (3만원 이상 구매시 무료)
                <div className="delivery_time">오후 2시 당일배송마감</div>
                </div>
              </div>
            </div>
            <div className="item_list_choice">
              <table>
                <tbody>
                  <tr>
                    <td className="cart_prdt_name">
                      <div className="delivery_name">
                        <span>2021 일력 오늘에 집중</span>
                      </div>
                    </td>
                    <td>
                      <span className="count">
                        <input 
                        type="text" 
                        value={this.state.count, this.state.count}
                        />
                        <span>
                        <button 
                        className="up_goods_cnt"
                        onClick={this.countUp}
                        />
                        <button 
                        className="down_goods_cnt"
                        onClick={this.countDown}
                        />
                        </span>
                      </span>
                    </td>
                    <td className="item_choice_price">
                      <strong>13,860</strong>원
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="item_total_box">
              <span>총 합계금액</span>
              <div>
                <strong>13,860원</strong>
              </div>
            </div>
            <div className="btn_choice_box">
              <div className="btn_box">
                <button type="button" className="btn_add_wish"></button>
                <button type="button" className="btn_add_cart">장바구니</button>
                <button type="button" className="btn_add_order">바로구매</button>
              </div>
            </div>
          </div>
          </div>
        </section>

        
      </div>
    );
  }
}

export default Detail;