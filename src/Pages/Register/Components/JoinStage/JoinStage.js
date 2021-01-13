import React, { Component } from 'react';
import './JoinStage.scss';

export default class JoinStage extends Component {
  render() {
    return (
      <header className="join-stage">
        <ol>
          <li>01 약관동의<span>▶︎</span></li>
          <li>02 정보입력<span>▶︎</span></li>
          <li>03 가입완료</li>
        </ol>
      </header>
    )
  }
}
