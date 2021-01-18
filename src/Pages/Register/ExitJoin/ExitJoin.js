import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import JoinStage from '../Components/JoinStage/JoinStage';
import './ExitJoin.scss';

export default class ExitJoin extends Component {
  render() {
    return (
      <div className="exit-join">
        <JoinStage />
        <div className="container">
          <div className="msg-container">
            <img alt="register-check" src="/Images/register-check.png" />
            <p className="main-msg">회원가입이 <strong>완료</strong> 되었습니다.</p>
            <p className="sub-msg">
              <strong className="sub-msg-name">김태형 </strong>
              님의 회원가입을 축하드립니다.<br />
              알차고 실속있는 서비스로 찾아뵙겠습니다.
            </p>
          </div>
          <div className="btn-container">
            <button type="button" className="to-home-btn">
              <Link to="/">홈으로</Link>
            </button>
            <button type="button" className="to-login-btn">
              <Link to="/login">로그인</Link>
            </button>
          </div>
        </div>
      </div>
    )
  }
}
