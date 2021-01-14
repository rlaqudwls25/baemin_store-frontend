import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
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

  handleLogin = () => {
    const { loginId, loginPw } = this.state;
    const checkId = loginId.includes("@");
    const checkPw = loginPw.length >= 4;
    if (!checkId) {
      alert("아이디는 @를 포함해야 합니다.");
      return;
    }
    if (!checkPw) {
      alert("비밀번호는 4자리 이상이어야 합니다.");
      return;
    }
    if (checkId && checkPw) {
      alert("로그인 서버 연결예정");
      // fetch(SIGNIN, {
      //   method: "POST",
      //   body: JSON.stringify({
      //     account: loginId,
      //     password: loginPw,
      //   }),
      // })
      //   .then((response) => response.json())
      //   .then((result) => {
      //     console.log("결과: ", result);
      //     if (result.token) {
      //       localStorage.setItem("token", result.token);
      //       this.props.history.push("/");
      //     }
      //     else if (result.message === 'INCORRECT') {
      //       alert('아이디 또는 비밀번호 값이 올바르지 않습니다.')
      //     }
      //     else if (result.message === 'UNAUTHORIZED') {
      //       alert('고객님은 배민문방구 회원이 아닙니다.')
      //     }
      //   });
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
