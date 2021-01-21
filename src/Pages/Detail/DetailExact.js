import React, { Component } from 'react';

class Detailexact extends Component {
  render() {
    return (
      <div className="DetailExact">
        <h3 className="info">상품필수 정보</h3>
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
      </div>
    );
  }
}

export default Detailexact;