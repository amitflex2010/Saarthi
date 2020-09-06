import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import translate from '../../i18nProvider/translates';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>{translate('hello')}</h1>
          <p className='lead'>
            {translate('placeholder-text')}
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              {translate('sign-up')}
            </Link>
            <Link to='/login' className='btn btn-light'>
            {translate('login')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
