import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { SIGNIN_API } from "../../Data/Config";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginId: "",
      loginPw: "",
      isLoginActive: false,
      orderName: "",
      orderNumber: "",
      isOrderActive: false,
    };
  }

  updateValue = (event) => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value,
      },
      () => this.checkBtnState()
    );
  };

  checkBtnState = () => {
    const { loginId, loginPw, orderName, orderNumber } = this.state;
    const isIdPwActive = loginId && loginPw;
    const isNameNumActive = orderName && orderNumber;
    this.setState({
      isLoginActive: isIdPwActive,
      isOrderActive: isNameNumActive,
    });
  };

  handleLogin = (event) => {
    event.preventDefault();
    const { loginId, loginPw } = this.state;
    const checkId = loginId.length >= 4 && loginId.length <= 20;
    const checkPw = loginPw.length >= 8 && loginPw.length <= 15;
    if (!checkId) {
      alert("아이디는 4-20글자의 값입니다.");
      return;
    }
    if (!checkPw) {
      alert("비밀번호는 8-15글자의 영문/숫자/특수문자로 입력하세요.");
      return;
    }
    if (checkId && checkPw) {
      fetch(SIGNIN_API, {
        method: "POST",
        body: JSON.stringify({
          account: loginId,
          password: loginPw,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("결과: ", result);
          const { MESSAGE, TOKEN } = result;
          if (MESSAGE === "ACCOUNT NOT FOUND") {
            alert("존재하지 않는 계정입니다.");
            return;
          }
          if (MESSAGE === "INVALID ACCOUNT") {
            alert("아이디와 비밀번호를 다시 확인해주세요.");
            return;
          }
          if (TOKEN) {
            localStorage.setItem("token", TOKEN);
            console.log(TOKEN);
            this.props.history.push("/");
          }
        });
    }
  };

  handleOrder = () => {
    const { orderName, orderNumber } = this.state;
    const checkName = orderName;
    const checkNum = orderNumber.length >= 5;
    if (!checkName) {
      alert("주문자명을 입력하십시오.");
    }
    if (!checkNum) {
      alert("주문번호는 5자리 이상이어야 합니다.");
    }
    if (checkName && checkNum) {
      alert("조회하기 성공");
      this.props.history.push("/");
    }
  };

  render() {
    const {
      loginId,
      loginPw,
      isLoginActive,
      orderName,
      orderNumber,
      isOrderActive,
    } = this.state;
    const { updateValue, handleLogin, handleOrder } = this;
    return (
      <section>
        <form className="login">
          <h3>회원 로그인</h3>
          <input
            type="text"
            name="loginId"
            placeholder="아이디"
            value={loginId}
            onChange={updateValue}
          />
          <input
            type="password"
            name="loginPw"
            placeholder="비밀번호"
            value={loginPw}
            onChange={updateValue}
          />
          <span>
            <input type="checkbox" className="login-check" />
            <label>아이디 저장</label>
          </span>
          <button
            type="submit"
            className={`login-btn ${isLoginActive && "active"}`}
            onClick={handleLogin}
          >
            로그인
          </button>
          <a href="/" className="login-sns">
            페이스북으로 로그인
          </a>
          <div className="login-search">
            <ul>
              <li key="link-register">
                <Link to="/register/enter_join" className="link-register">
                  회원가입
                </Link>
              </li>
              <li key="link-search-id">
                <button className="link-search-id">아이디 찾기</button>
              </li>
              <li key="link-search-pw">
                <button className="link-search-pw">비밀번호 찾기</button>
              </li>
            </ul>
          </div>
        </form>
        <form className="login-order">
          <h3>비회원 주문조회 하기</h3>
          <input
            type="text"
            name="orderName"
            placeholder="주문자명"
            value={orderName}
            onChange={updateValue}
          />
          <input
            type="text"
            name="orderNumber"
            placeholder="주문번호"
            value={orderNumber}
            onChange={updateValue}
          />
          <button
            type="submit"
            className={`login-btn ${isOrderActive && "active"}`}
            onClick={handleOrder}
          >
            조회하기
          </button>
        </form>
      </section>
    );
  }
}

export default withRouter(Login);
