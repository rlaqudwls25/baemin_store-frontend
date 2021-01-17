import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchModal from './Components/SearchModal/SearchModal'
import { HEADERMENUS, FOOTERMENUS } from './NavbarData';
import { SearchSVG } from '../../Data/Config';
import './Navbar.scss'

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchOn: false,
      focusdMenu: -1,
    }
  }

  closeModal = () => {
    this.setState({ isSearchOn: false })
  }

  updateFocus = (id) => {
    this.setState({ focusdMenu: id })
  }

  render() {
    const { isSearchOn, focusdMenu } = this.state;
    const { closeModal, updateFocus } = this;
    
    return (
      <nav className="navigation">
        {isSearchOn && <SearchModal closeModal={closeModal} />}
        <header className="nav-header">
          <div className="nav-header-wrap">
            <ul>
              {HEADERMENUS.map((menu) => {
                const { key, content, link} = menu;
                return(
                  <li key={key} class={`nav-${key}`}>
                    <Link to={link}>
                      {content}
                      {key === 'cart' && <span className="cart-count">0</span>}
                    </Link>
                  </li>  
                )}
              )}
            </ul>
          </div>
        </header>
        <section className="nav-body">
          <div className="nav-section-wrap">
            <a href="/">
              <img alt="logo-nav" src="./Images/logo-nav.png" /> 
            </a>
            <div className="search-bar">
              <input type="text" placeholder="검색" onClick={() => this.setState({ isSearchOn: true })} />
              <svg aria-hidden="true" data-icon="search" role="img" viewBox="0 0 512 512" class="search-icon">
                {SearchSVG}
              </svg>
            </div>
          </div>
        </section>
        <footer className="nav-footer">
          <ul>
            {FOOTERMENUS.map((menu) => {
              const { id, key, content, link} = menu;
              return(
                <li 
                  key={key} 
                  className={focusdMenu === id && 'focus'}
                  onClick={() => updateFocus(id)}
                >
                  <Link to={`/category/${id}`}>{content}</Link>
                </li>  
              )}
            )}
          </ul>
        </footer>
      </nav>
    )
  }
}

