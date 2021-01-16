import React, { Component } from 'react';
import './SelectBirth.scss';

export default class SelectBirth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yearArr: [],
      monthArr: [],
      dateArr: [],
      year: 0,
      month: 0,
      date: 0,
    }
  }

  componentDidMount() {
    this.setDate();
  }

  setDate = () => {
    const nowYear = new Date().getFullYear();
    const yearArr = [null].concat(Array.from({length: 110}, (_, i) => nowYear - i));
    const monthArr = [null].concat(Array.from({length: 12}, (_, i) => 1+i));
    const dateArr = [null].concat(Array.from({length: 31}, (_, i) => 1+i));
    this.setState({ yearArr, monthArr, dateArr })
  }

  sendDateToJoin = (year, month, date) => {
    const zeroCheck = year * month * date;
    const { updateBirth } = this.props;
    if (zeroCheck) {
      updateBirth(year, month-1, date);
    }
  }

  changeDate = (e) => {
    const { name, value } = e.target;
    const { year, month, date } = this.state;
    const { sendDateToJoin } = this;
    this.setState({ 
      [name]: value 
    }, () => sendDateToJoin(year, month, date));
  }

  render() {
    const { yearArr, monthArr, dateArr } = this.state;
    const { changeDate } = this;
    return (
      <>
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
                <div className="select-wrap">
                  <select name="year" onChange={changeDate}>
                    {yearArr.map(year => <option value={year}>{year}년</option>)}
                  </select>
                  <select name="month" onChange={changeDate}>
                    {monthArr.map(month => <option value={month}>{month}월</option>)}
                  </select>
                  <select name="date" onChange={changeDate}>
                    {dateArr.map(date => <option value={date}>{date}일</option>)}
                  </select>
                </div>
                <p className="input-error"></p>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    )
  }
}
