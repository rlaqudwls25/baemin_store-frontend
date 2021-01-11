import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <section className="footer-logo">
            <img alt="logo-footer" src="./Images/logo-footer.png" />
          </section>
          <section className="footer-context">
            <ul>
              <li key="공지사항"><Link href="/">공지사항</Link></li>
              <li key="1:1문의"><Link href="/">1:1문의</Link></li>
              <li key="이용약관"><Link href="/">이용약관</Link></li>
              <li key="개인정보처리방침"><Link href="/">개인정보처리방침</Link></li>
              <li key="판매처 안내"><Link href="/">판매처 안내</Link></li>
            </ul>
            <div className="footer-info-list info-list1">
              <dl>
                <dt>상호 :</dt>
                <dd>(주)우아한형제들</dd>
              </dl>
              <dl>
                <dt>대표 :</dt>
                <dd>김범준</dd>
              </dl>
              <dl>
                <dt>사업자등록번호 :</dt>
                <dd>120-87-65763</dd>
              </dl>
              <dl>
                <dt>통신판매업신고번호 :</dt>
                <dd>2012-서울송파-0515</dd>
              </dl>
              <dl>
                <a href="/">[사업자정보확인]</a>
              </dl>
            </div>
            <div className="footer-info-list info-list2">
              <dl>
                <dt>대표번호 :</dt>
                <dd>1670-9902</dd>
              </dl>
              <dl>
                <dt>배민문방구 고객센터(1670-9902) 운영시간 :</dt>
                <dd>월-금 13:00~18:00(주말/공휴일 휴무)</dd>
              </dl>
            </div>
            <div className="footer-info-list info-list3">
              <dl>
                <dt>팩스번호 :</dt>
                <dd>050-605-0041</dd>
              </dl>
              <dl>
                <dt>메일 :</dt>
                <dd>baemin_store@woowahan.com</dd>
              </dl>
              <dl>
                <dt>배민문방구 인스타그램 :</dt>
                <dd>@baemin_store</dd>
              </dl>
            </div>
            <div className="footer-info-list info-list4">
              <dl>
                <dt>주소 :</dt>
                <dd>서울특별시 송파구 위례성대로 2 장은빌딩</dd>
              </dl>
              <dl>
                <dt>호스팅제공 :</dt>
                <dd>엔에이치엔고도(주)</dd>
              </dl>
            </div>
            <p className="copyright">© Woowa Brothers Corp. All right Reserved</p>
          </section>
        </div>
      </footer>
    )
  }
}
