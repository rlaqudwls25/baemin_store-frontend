import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HEADERMENUS, FOOTERMENUS } from './NavbarData'
import './Navbar.scss'

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusdMenu: '',
    }
  }

  updateFocus = (key) => {
    this.setState({ focusdMenu: key })
  }

  render() {
    const { focusdMenu } = this.state;
    const { updateFocus } = this;

    return (
      <nav className="navigation">
        <header>
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
        <section>
          <div className="nav-section-wrap">
            <a href="/">
              <img alt="logo-nav" src="./Images/logo-nav.png" /> 
            </a>
          </div>
        </section>
        <footer>
          <ul>
            {FOOTERMENUS.map((menu) => {
              const { key, content, link} = menu;
              return(
                <li 
                  key={key} 
                  className={focusdMenu === key && 'focus'}
                  onClick={() => updateFocus(key)}
                >
                  <Link to={link}>{content}</Link>
                </li>  
              )}
            )}
          </ul>
        </footer>
      </nav>
    )
  }
}

