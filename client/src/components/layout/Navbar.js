import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { changeLanguage } from '../../actions/language'
import translate from '../../i18nProvider/translates';

const Navbar = ({ auth: { isAuthenticated, loading }, logout, changeLanguage }) => {

  function handleChange(e) {
    changeLanguage(e.target.value);
  }
  const authLinks = (
    <ul>
      <li>
        <Link to='/profiles'>{translate('developers')}</Link>
      </li>
      <li>
        <Link to='/posts'>Posts</Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' />{' '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/profiles'> {translate('developers')}</Link>
      </li>
      <li>
        <Link to='/register'>{translate('sign-up')}</Link>
      </li>
      <li>
        <Link to='/login'>{translate('login')}</Link>
      </li>
      
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code' /> {translate('devconnector')}
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}
         <select onChange={handleChange}>
           <option value="en-us">English</option>
           <option value="fr-ca">Français</option>
           <option value="de-de">Deutsche</option>
           <option value="hn-in">हिन्दी</option>
        </select>
        </Fragment>
      )}
      
    </nav>
  );
};



Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout, changeLanguage }
)(Navbar);
