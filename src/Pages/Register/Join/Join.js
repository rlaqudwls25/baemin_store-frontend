import React, { Component } from 'react';
import JoinStage from '../Components/JoinStage/JoinStage';
import { withRouter } from 'react-router-dom';
import './Join.scss'

export default class Join extends Component {
  render() {
    return (
      <div className="join">
        <JoinStage />
        <form className="join-form">
          <h3>기본정보</h3>
          <span className="important important-msg">표시는 반드시 입력하셔야 하는 항목입니다.</span>
          <table border="0" cellPadding="0" cellSpacing="0">
            <colgroup>
              <col width="25%" />
              <col width="75%" />
            </colgroup>
            <tbody>
              <tr>
                <th>
                  <span className="important">아이디</span>
                </th>
                <td>
                  <div className="input-wrap">
                    <input type="text"></input>
                  </div>
                  <p className="input-error">아이디 메세지</p>
                </td>
              </tr>
              <tr>
                <th>
                  <span className="important">비밀번호</span>
                </th>
                <td>
                  <div className="input-wrap">
                    <input type="password"></input>
                  </div>
                  <p className="input-error"></p>
                </td>
              </tr>
              <tr>
                <th>
                  <span className="important">비밀번호 확인</span>
                </th>
                <td>
                  <div className="input-wrap">
                    <input type="password"></input>
                  </div>
                  <p className="input-error"></p>
                </td>
              </tr>
              <tr>
                <th>
                  <span className="important">이름</span>
                </th>
                <td>
                  <div className="input-wrap">
                    <input type="text"></input>
                  </div>
                  <p className="input-error"></p>
                </td>
              </tr>
              <tr>
                <th>
                  <span className="important">이메일</span>
                </th>
                <td>
                  <div className="input-wrap">
                    <input type="text"></input>
                    <select></select>
                  </div>
                  <p className="input-error"></p>
                </td>
              </tr>
              <tr>
                <th>
                  <span className="important">휴대폰번호</span>
                </th>
                <td>
                  <div className="input-wrap">
                    <input type="text"></input>
                  </div>
                  <p className="input-error"></p>
                </td>
              </tr>
              <tr>
                <th>
                  <span className="important">전화번호</span>
                </th>
                <td>
                  <div className="input-wrap">
                    <input type="text"></input>
                  </div>
                  <p className="input-error"></p>
                </td>
              </tr>
              <tr>
                <th>
                  <span>주소</span>
                </th>
                <td>
                  <div className="input-wrap">
                    <input type="text"></input>
                    <select></select>
                    <input type="text"></input>
                    <input type="text"></input>
                  </div>
                  <p className="input-error"></p>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="birth-title">생일 축하합니다!!</p>
          <table border="0" cellPadding="0" cellSpacing="0">
            <colgroup>
              <col width="25%" />
              <col width="75%" />
            </colgroup>
            <tbody>
              <tr>
                <th>
                  <span>생일</span>
                </th>
                <td>
                  <div className="input-wrap">
                    <select></select>
                    <select></select>
                    <select></select>
                  </div>
                  <p className="input-error"></p>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="btn-container">
            <button type="button">뒤로가기</button>
            <button type="submit">회원가입</button>
          </div>
        </form>
      </div>
    )
  }
}
