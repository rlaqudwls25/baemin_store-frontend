import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DetailInfo from './DetailInfo';
import DetailTable from './DetailTable';
import DetailExact from './DetailExact';
import './Detail.scss'
import './DetailInfo.scss'

class Detail extends Component {
  constructor(props){
    super(props);
    this.state = {
      count : 1,
      price: 3500
      
    };
  }

  countUp = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    }
    )
  }

  countDown = () => {
    const { count } = this.state;
    this.setState({
      count: count === 1 ? count: count-1,
    })
  }

  scrollBtn = (e) => {
    const btnArr = document.querySelectorAll(".link");
    for(let i= 0; i<btnArr.length; i++) {
      e.preventDefault();
      document.querySelector('.info' + (i+1)).scrollIntoView(true);
    }
  }

  render() {
    const { price, count } = this.state;
    console.log("btn", this.scrollBtn);

    return (
      <div className="Detail">
        <section className="content">
          <div className="item_photo_info_sec">
            <div className="item_photo_view_box">
              <Link to="/">
                <img src="./Images/listitem.png" alt="상품 사진"></img>
              </Link>
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
                        value={count}
                        />
                        <span>
                        <button 
                        id="up"
                        className="up_goods_cnt"
                        onClick={this.countUp}
                        />
                        <button
                        id="down" 
                        className="down_goods_cnt"                   
                        onClick={this.countDown}
                        />
                        </span>
                      </span>
                    </td>
                    <td className="item_choice_price">
                      <strong>{count * price}</strong>원
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="item_total_box">
              <span>총 합계금액</span>
              <div>
              <strong>{count * price}</strong>원
              </div>
            </div>
            <div className="btn_choice_box">
              <div className="btn_box">
                <button type="button" className="btn_add_wish" />
                <button type="button" className="btn_add_cart">장바구니</button>
                <button type="button" className="btn_add_order">바로구매</button>
              </div>
            </div>
          </div>
          </div>
          <DetailInfo
          onClick={this.scrollBtn}
          />
          <div className="detail_cont">
            <h3 className="info">상품상세정보</h3>
            <div className="detail_explain_box">
              <img src="./Images/detail.png" alt="상품 설명사진" />
              <DetailExact />
              <div className="detail_info">
              </div>
              <DetailInfo />
                <h3 className="info">배송안내</h3>
                <div className="admin_msg">
                  <p>배송사:cj대한통운</p>
                  <p>배송비: 2,500원(3만원 이상 구매 시 무료배송)</p>
                  <p>도서, 산간 일부지역은 배송비가 추가될 수 있습니다.</p>
                  <p>배송기간: 오후 2시 이전 결제완료시 당일 출고 (영업일 기준)</p>
                  <p>단, 상품의 재고 상황, 배송량, 배송 지역에 따라 배송일이 추가로 소요될 수 있는 점 양해 부탁드립니다.</p>
                </div>
              <DetailInfo />
              <div className="admin_msg">
                <h3 className="info">교환 및 반품안내</h3>
                <p>주문 취소 및 배송지 변경은 "결제완료" 단계에서만 가능합니다.</p>
                <p>마이페이지에서 취소 또는 변경하실 수 있습니다.</p>
                <p>"상품준비중" 단계에서는 주문 취소 및 배송지 변경이 불가합니다.</p>
                <p></p>
                <p>교환 및 반품은 배송완료 후 7일 이내에 가능합니다.</p>
                <p>-단, 재화 등의 내용이 표시, 광고 내용과 다르거나 계약내용을 다르게 이행한 경우에는 재화 등을 공급받은 날부터 3개월 이내, 그 사실을 안 날 또는 알 수 있었던 날로부터 30일 이내에 교환</p>
              </div>
              <div className="admin_msg">
                <h3>환불안내</h3>
                <p>주문취소 및 반품 시 환불은 주문 시 이용하신 결제수단으로 2~7 영업일 이내 환불됩니다.</p>
              </div>
              <div className="admin_msg">
                <h3>AS안내</h3>
                <p>제품에 문제가 있으신 경우, 배민문방구 고객센터로 접수해주시면 안내 도와드리겠습니다.</p>
                <p>배민문방구에서 발생한 문제는 소비자분쟁해결 기준(공정거래위원회 고시)에 따라 피해를 보상받을 수 있습니다.</p>
              </div>
              <DetailInfo />
              <DetailTable />
              <DetailInfo />
              <div className="product_ask">
                <h3>상품문의</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
    }
  }
export default Detail;