import React, { Component} from 'react';
import DetailInfo from './DetailInfo';
import './Detail.scss'

class Detail extends Component {
  constructor(props){
    super(props);
    this.state = {
      count : 1,
      price: 13000
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


  render() {
    const { price, count } = this.state;

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
                        value={count}
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
                <button type="button" className="btn_add_wish"></button>
                <button type="button" className="btn_add_cart">장바구니</button>
                <button type="button" className="btn_add_order">바로구매</button>
              </div>
            </div>
          </div>
          </div>
          <DetailInfo />
          <div className="detail_cont">
            <h3>상품상세정보</h3>
            <div className="detail_explain_box">
              <img src="./Images/detail.png" alt="상품 설명사진" />
              <h3>상품필수 정보</h3>
              <div className="detail_table">
                <table className="table_type">
                  <tbody>
                    <tr>
                      <th>품명</th>
                      <td>미니언즈X배달의민족. 혼밥식기세트</td>
                    </tr>
                    <tr>
                      <th>재질</th>
                      <td>도자기</td>
                    </tr>
                    <tr>
                      <th>구성품</th>
                      <td>밥그릇, 국그릇, 앞접시, 머그컵</td>
                    </tr>
                    <tr>
                      <th>크기</th>
                      <td>상세페이지 참고</td>
                    </tr>
                    <tr>
                      <th>동일모델의 출시년월</th>
                      <td>2019년 11월</td>
                    </tr>
                    <tr>
                      <th>제조사</th>
                      <td>(주)우아한형제들</td>
                    </tr>
                    <tr>
                      <th>제조국</th>
                      <td>한국</td>
                    </tr>
                    <tr>
                      <th>식품위생법에 따른 수입신고 </th>
                      <td>해당없음</td>
                    </tr>
                    <tr>
                      <th>품질보증기준</th>
                      <td>관련 법 및 소비자 분쟁해결 규정에 따름</td>
                    </tr>
                    <tr>
                      <th>A/S 책임자와 전화번호</th>
                      <td>배민문방구 고객센터 1670-9902</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="detail_info">
              <DetailInfo />
                <h3>배송안내</h3>
                <div className="admin_msg">
                  <p>배송사:cj대한통운</p>
                  <p>배송비: 2,500원(3만원 이상 구매 시 무료배송)</p>
                  <p>도서, 산간 일부지역은 배송비가 추가될 수 있습니다.</p>
                  <p>배송기간: 오후 2시 이전 결제완료시 당일 출고 (영업일 기준)</p>
                  <p>단, 상품의 재고 상황, 배송량, 배송 지역에 따라 배송일이 추가로 소요될 수 있는 점 양해 부탁드립니다.</p>
                </div>
              <DetailInfo />
              <div className="admin_msg">
                <h3>교환 및 반품안내</h3>
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
              <div>
                <h3>상품후기</h3>
                <table className="review_table">
                  <tbody>
                    <tr>
                      <td>
                        <span>dd</span>
                      </td>
                      <td>
                        <a href="/">배민 일력</a>
                      </td>
                      <td>qudwls****</td>
                      <td>2020.12.27</td>
                    </tr>
                    <tr>
                      <td>
                        <span>dd</span>
                      </td>
                      <td>
                        <a href="/">배민 일력</a>
                      </td>
                      <td>qudwls****</td>
                      <td>2020.12.27</td>
                    </tr>
                    <tr>
                      <td>
                        <span>dd</span>
                      </td>
                      <td>
                        <a href="/">배민 일력</a>
                      </td>
                      <td>qudwls****</td>
                      <td>2020.12.27</td>
                    </tr>
                    <tr>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <a href="/">배민 일력</a>
                      </td>
                      <td>qudwls****</td>
                      <td>2020.12.27</td>
                    </tr>
                    <tr>
                      <td>
                        <span>dd</span>
                      </td>
                      <td>
                        <a href="/">배민 일력</a>
                      </td>
                      <td>qudwls****</td>
                      <td>2020.12.27</td>
                    </tr>
                    <tr>
                      <td>
                        <span>dd</span>
                      </td>
                      <td>
                        <a href="/">배민 일력</a>
                      </td>
                      <td>qudwls****</td>
                      <td>2020.12.27</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <DetailInfo />
              <div>
                <h3>상품문의</h3>
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