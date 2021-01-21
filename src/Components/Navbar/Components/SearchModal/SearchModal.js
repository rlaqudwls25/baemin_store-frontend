import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SearchSVG } from '../../../../Data/Config';
import './SearchModal.scss';

export default class SearchModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    }
  }
  
  updateSearchValue = (e) => {
    this.setState({ searchValue: e.target.value })
  }

  render() {
    const { searchValue } = this.state;
    const { closeModal } = this.props;
    const { updateSearchValue } = this;

    return (
      <div className="search-modal">
        <section className="modal-top">
          <header className="modal-top-header">
            <Link to="/" className="modal-logo" onClick={closeModal}>
              <img alt="logo-modal" src="/Images/logo-nav.png" />
            </Link>
            <form className="modal-form">
              <input 
                type="text" 
                placeholder="검색" 
                value={searchValue}
                onChange={updateSearchValue} />
              <svg aria-hidden="true" data-icon="search" role="img" viewBox="0 0 512 512" class="search-icon">
                {SearchSVG}
              </svg>
            </form>
            <button className="modal-end-btn" onClick={closeModal}>X</button>
          </header>
          <footer className="modal-top-footer">
            <div className="tag-container">
              <h3>추천 태그</h3>
              <ul>
                <li className="tag"><Link to="/">#요즘 가장핫한</Link></li>
                <li className="tag"><Link to="/">#신상신상</Link></li>
                <li className="tag"><Link to="/">#여행가고 싶을 때</Link></li>
                <li className="tag"><Link to="/">#생일선물</Link></li>
                <li className="tag"><Link to="/">#지금 세일중!</Link></li>
                <li className="tag"><Link to="/">#더 이상 생각이안나..</Link></li>
              </ul>
            </div>
          </footer>
        </section>
        <section className="modal-bottom" onClick={closeModal}></section>
      </div>
    )
  }
}
