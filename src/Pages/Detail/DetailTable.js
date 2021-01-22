import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DetailTable.scss';

class DetailTable extends Component {
  render() {
    return (
      <div>
      <h3 className="info">상품후기</h3>
      <table className="review_table">
      <tbody>
        <tr>
          <td>
            <span>dd</span>
          </td>
          <td>
            <Link to="/">배민 일력</Link>
          </td>
          <td>qudwls****</td>
          <td>2020.12.27</td>
        </tr>
        <tr>
          <td>
            <span>dd</span>
          </td>
          <td>
            <Link to="/">배민 일력</Link>
          </td>
          <td>qudwls****</td>
          <td>2020.12.27</td>
        </tr>
        <tr>
          <td>
            <span>dd</span>
          </td>
          <td>
            <Link to="/">배민 일력</Link>
          </td>
          <td>qudwls****</td>
          <td>2020.12.27</td>
        </tr>
        <tr>
          <td>
            <span>dd</span>
          </td>
          <td>
            <Link to="/">배민 일력</Link>
          </td>
          <td>qudwls****</td>
          <td>2020.12.27</td>
        </tr>
        <tr>
          <td>
            <span>dd</span>
          </td>
          <td>
            <Link to="/">배민 일력</Link>
          </td>
          <td>qudwls****</td>
          <td>2020.12.27</td>
        </tr>
        <tr>
          <td>
            <span>dd</span>
          </td>
          <td>
            <Link to="/">배민 일력</Link>
          </td>
          <td>qudwls****</td>
          <td>2020.12.27</td>
        </tr>
      </tbody>
    </table>
    </div>
    );
  }
}

export default DetailTable;