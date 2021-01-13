import React, { Component } from 'react';
import JoinStage from '../Components/JoinStage/JoinStage';
import './ExitJoin.scss';

export default class ExitJoin extends Component {
  render() {
    return (
      <div className="exit-join">
        <JoinStage />
        <h1>축하합니다! 가입이 완료되었습니다!</h1>
      </div>
    )
  }
}
