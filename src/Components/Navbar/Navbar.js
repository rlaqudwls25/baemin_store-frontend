import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HEADERLINK, FOOTERLINK } from './NavbarData'
import './Navbar.scss'

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navigation">
        <header>
          <div className="nav-header-wrap">
            <ul>
              {HEADERLINK.map(linkInfo => 
                <li key={linkInfo.key} class={`nav-${linkInfo.key}`}>
                  <Link to={linkInfo.link}>
                    {linkInfo.content}
                    {linkInfo.key === 'cart' && <span className="cart-count">0</span>}
                  </Link>
                </li>  
              )}
            </ul>
          </div>
        </header>
        <section>
          <div className="nav-section-wrap">
            <a href="/">
              <img alt="logo-nav" src="./Images/logo-nav.png" /> 
            </a>
          </div>
        </section>
        <footer>
          <ul>
            {FOOTERLINK.map(linkInfo => 
              <li key={linkInfo.key}>
                <Link to={linkInfo.link}>{linkInfo.content}</Link>
              </li>  
            )}
          </ul>
        </footer>
      </nav>
    )
  }
}
