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
    let yearArr = [null];
    const nowYear = new Date().getFullYear();
    for (let y = nowYear ; y > 1910 ; y-- ) {
      yearArr.push(y);
    }
    let monthArr = [null];
    for (let m = 1 ; m <= 12 ; m++) {
      monthArr.push(m);
    }
    let dateArr = [null];
    for (let d = 1 ; d <= 31 ; d++) {
      dateArr.push(d);
    }
    this.setState({ yearArr, monthArr, dateArr })
  }

  updateSelect = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    const { yearArr, monthArr, dateArr } = this.state;
    const { updateSelect } = this;
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
                  <select name="year" onChange={updateSelect}>
                    {yearArr.map(year => <option value={year}>{year}년</option>)}
                  </select>
                  <select name="month" onChange={updateSelect}>
                    {monthArr.map(month => <option value={month}>{month}월</option>)}
                  </select>
                  <select name="date" onChange={updateSelect}>
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
