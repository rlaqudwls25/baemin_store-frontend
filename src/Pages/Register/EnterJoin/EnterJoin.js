import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './EnterJoin.scss';

export default class EnterJoin extends Component {
  render() {
    return (
      <div className="enter-join">
        <div className="link-container">
          <section className="link-buttons">
            <div className="link-to-join">
              <Link to="/register/join">
                <strong>ㅋ</strong>
                <span>배민문방구로 회원가입</span>
              </Link>
            </div>
            <div className="link-to-facebook">
              <Link to="/">
                <strong>f</strong>
                <span>페이스북으로 회원가입</span>
              </Link>
            </div>
          </section>
          <p className="link-to-login">
            이미 배민문방구 회원이신가요?
            <Link to="/login">로그인</Link>
          </p>
        </div>
      </div>
    )
  }
}
