import React from 'react';
import { Link } from 'react-router-dom';
import smarketLogo from '../assets/smarkets-logo.svg';

const Header = ({ eventNum }) => (
  <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            width="100"
            height="23.06"
            src={smarketLogo}
            alt="Smarkets Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="ml-auto">
          <h5 style={{ color: 'white' }}>
            Number of Top Events:
            {' '}
            {eventNum.length}
            {' '}
          </h5>
        </div>
      </div>
    </nav>
  </>
);

export default Header;
