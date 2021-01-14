import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import JoinStage from '../Components/JoinStage/JoinStage';
import SelectBirth from './SelectBirth/SelectBirth';
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
    }
  }

  updateValue = (e) => {
    const { name, value } = e.target;
    if ((name === 'phone' || name === 'call') && isNaN(value)) {
      return;
    }
    this.setState({
      [name]: value,
    })
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

  submitJoinInfo = (e, condition) => {
    const { id, pw, name, email, phone } = this.state;
    e.preventDefault();
    for (let key in condition) {
      if (condition[key] === false) {
        alert(`${key} 정보를 확인해주세요`);
        return;
      }
    }
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
        const message = result;
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
        if (message === '비밀 번호는 1개 이상의 특수문자(@$!%*#?&)를 포함해야합니다.') {  // 백엔드 수정예정
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
      })
  }

  render() {
    const { id, pw, pwAgain, name, email, phone, call } = this.state;
    const { updateValue, completeEmail, submitJoinInfo } = this;
    const condition = {
      아이디: id.length >= 4 && id.length <=20,
      비밀번호: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/.test(pw),
      '비밀번호 확인': pwAgain === pw,
      이름: name !== "",
      이메일: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(email),
      휴대폰번호: phone !== "",
    }

    return (
      <div className="join">
        <JoinStage />
        <form className="join-form" onSubmit={(e) => submitJoinInfo(e, condition)}>
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
                    <p className={condition.아이디 && 'pass'}>
                      {condition.아이디
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
                    <p className={condition.비밀번호 && 'pass'}>
                      {condition.비밀번호
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
                    <p className={condition['비밀번호 확인'] && 'pass'}>
                      {condition['비밀번호 확인']
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
                    <p className={condition.이메일 && 'pass'}>
                      {condition.이메일
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
          <SelectBirth />
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