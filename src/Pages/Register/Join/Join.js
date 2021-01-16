import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import JoinStage from '../Components/JoinStage/JoinStage';
import SelectBirth from '../Components/SelectBirth/SelectBirth';
import { SIGNUP_API } from  '../../../Data/Config';
import './Join.scss';

class Join extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      pw: "",
      pwAgain: "",
      name: "",
      email: "",
      phone: "",
      call: "",
      address: "",
      birth: "",
      isValidId: false,
      isValidPw: false,
      isValidPwAgain: false,
      isValidName: false,
      isValidEmail: false,
      isValidPhone: false,
    }
  }

  updateValue = (e) => {
    const { name, value } = e.target;
    const { updateValidation } = this;
    if ((name === 'phone' || name === 'call') && isNaN(value)) {
      return;
    }
    this.setState({
      [name]: value,
    }, () => updateValidation())
  }

  updateValidation = () => {
    const { id, pw, pwAgain, name, email, phone } = this.state;
    const regexPw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;
    const regexEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    this.setState({
      isValidId: id.length >= 4 && id.length <=20,
      isValidPw: regexPw.test(pw),
      isValidPwAgain: pwAgain === pw,
      isValidName: name !== "",
      isValidEmail: regexEmail.test(email),
      isValidPhone: phone !== "",
    })
  }

  updateBirth = (y, m, d) => {
    this.setState({ birth: new Date(y, m, d) })
  }

  completeEmail = (e) => {
    const domain = e.target.value;
    const { email } = this.state;
    let newEmail = email;
    if (domain === 'self') {
      newEmail = newEmail.substring(0, newEmail.indexOf('@'))
    }
    else {
      newEmail = newEmail.includes('@') 
        ? newEmail.substring(0, newEmail.indexOf('@')+1) + domain
        : newEmail + '@' + domain
    }
    this.setState({ email: newEmail })
  }

  checkRequest = () => {
    const validateTitle = {
      isValidId: '아이디',
      isValidPw: '비밀번호',
      isValidPwAgain: '비밀번호 확인',
      isValidName: '이름',
      isValidEmail: '이메일',
      isValidPhone: '휴대폰번호',
    }
    for (let key in validateTitle) {
      if (this.state[key] === false) {
        alert(`${validateTitle[key]} 정보를 확인해주세요`);
        return;
      }
    }
  }

  checkResponse = (message) => {
    if (message === 'NOT VALID ACCOUNT') {
      alert('아이디는 4-20자리 사이입니다. ');
      return;
    }
    if (message === 'PASSWORD SHOULD BE OVER 8 AND UNDER 17') {
      alert('비밀번호는 8-16자리 사이입니다.');
      return;
    }
    if (message === 'PASSWORD SHOULD BE ONLY ALPHABET AND DIGITS') {
      alert('비밀번호는 영문, 숫자를 반드시 포함해야 합니다.');
      return;
    }
    if (message === 'PASSWORD INCLUDE AT LEAST 1 CHARACTER') {  
      alert('비밀번호는 특수문자(@$!%*#?&)를 반드시 포함해야 합니다.');
      return;
    }
    if (message === 'NOT VALUD NAME') {
      alert('이름을 입력해주세요.');
      return;
    }
    if (message === 'NOT VALID EMAIL') {
      alert('유효하지 않은 이메일 형식입니다.');
      return;
    }
    if (message === 'NOT VALID PHONE') {
      alert('휴대폰번호 11자리를 입력해주세요.');
      return;
    }
    if (message === 'INFORMATION REGISTERED ALREADY!') {
      alert('이미 등록된 사용자입니다.');
      return;
    }
    if (message === 'KEY ERROR FOUND!' || message === 'VALUE ERROR FOUND!') {
      console.log("Request 에러: ", message);
      return;
    }
    if (message === 'SUCCESS TO MAKE ACCOUNT') {
      this.props.history.push('/register/exit_join');
    }
  }

  submitJoinInfo = (e, condition) => {
    e.preventDefault();
    const { id, pw, name, email, phone } = this.state;
    const { checkRequest, checkResponse } = this;
    checkRequest();
    fetch(SIGNUP_API, {
      method: "POST",
      body: JSON.stringify({
        account: id,
        password: pw,
        name: name,
        email: email,
        phone: phone,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        const { MESSAGE } = result;
        checkResponse(MESSAGE);
      })
  }

  render() {
    const { id, pw, pwAgain, name, email, phone, call,
          isValidId, isValidPw, isValidPwAgain, isValidEmail } = this.state;
    const { updateValue, updateBirth, completeEmail, submitJoinInfo } = this;

    return (
      <div className="join">
        <JoinStage />
        <form className="join-form" onSubmit={(e) => submitJoinInfo(e)}>
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
                  <div className={`input-wrap ${id && 'msg'}`}>
                    <input type="text" name="id" value={id} onChange={updateValue} />
                    <p className={isValidId && 'pass'}>
                      {isValidId
                        ? '사용가능한 아이디 형식입니다.'
                        : '최소 4글자 이상 입력해주세요.'}
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  <span className="important">비밀번호</span>
                </th>
                <td>
                  <div className={`input-wrap ${pw && 'msg'}`}>
                    <input type="password" name="pw" value={pw} onChange={updateValue} />
                    <p className={isValidPw && 'pass'}>
                      {isValidPw
                        ? '사용가능한 비밀번호입니다.'
                        : '비밀번호는 8-15글자의 영문/숫자/특수문자 조합입니다.'}
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  <span className="important">비밀번호 확인</span>
                </th>
                <td>
                  <div className={`input-wrap ${pwAgain && 'msg'}`}>
                    <input type="password" name="pwAgain" value={pwAgain} onChange={updateValue} />
                    <p className={isValidPwAgain && 'pass'}>
                      {isValidPwAgain
                        ? '비밀번호가 일치합니다.'
                        : '비밀번호가 일치하지 않습니다.'}
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  <span className="important">이름</span>
                </th>
                <td>
                  <div className="input-wrap">
                    <input type="text" name="name" value={name} onChange={updateValue} />
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  <span className="important">이메일</span>
                </th>
                <td>
                  <div className={`input-wrap ${email && 'msg'}`}>
                    <input type="text" name="email" value={email} onChange={updateValue} />
                    <select 
                      name="emailDomain" 
                      onChange={completeEmail}>
                      <option value="self">직접입력</option>
                      <option value="naver.com">naver.com</option>
                      <option value="hanmail.net">hanmail.net</option>
                      <option value="daum.net">daum.net</option>
                      <option value="nate.com">nate.com</option>
                      <option value="hotmail.com">hotmail.com</option>
                      <option value="gmail.com">gmail.com</option>
                      <option value="icloud.com">icloud.com</option>
                    </select>
                    <p className={isValidEmail && 'pass'}>
                      {isValidEmail
                        ? '사용가능한 이메일 형식입니다.'
                        : '올바르지 않은 이메일 형식입니다.'}
                    </p>
                    <div className="input-check-wrap">
                      <input type="checkbox" id="email-checkbox" />
                      <label for="email-checkbox">(선택) 마케팅 및 이벤트 정보 메일 수신에 동의합니다.</label>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  <span className="important">휴대폰번호</span>
                </th>
                <td>
                  <div className="input-wrap">
                    <input 
                      type="text" 
                      name="phone" 
                      value={phone}
                      onChange={updateValue} 
                      placeholder="- 없이 입력하세요."
                    />
                    <div className="input-check-wrap">
                      <input type="checkbox" id="phone-checkbox" />
                      <label for="phone-checkbox">(선택) 마케팅 및 이벤트 정보 메일 수신에 동의합니다.</label>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  <span>전화번호</span>
                </th>
                <td>
                  <div className="input-wrap">
                    <input 
                      type="text" 
                      name="call" 
                      value={call}
                      onChange={updateValue} 
                      placeholder="- 없이 입력하세요." />
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  <span>주소</span>
                </th>
                <td>
                  <div className="input-wrap">
                    <input type="text" name="address" readOnly="readonly" placeholder="우편번호를 검색해주세요." />
                    <button type="button" className="search-address-btn">우편번호검색</button>
                    <div className="more-address">
                      <input type="text" name="more-address" readOnly="readonly" />
                      <input type="text" name="more-address" readOnly="readonly" />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <SelectBirth updateBirth={updateBirth} />
          <div className="btn-container">
            <Link to="/">취소</Link>
            <button type="submit" className="submit-btn">회원가입</button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(Join);