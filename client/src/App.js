import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';

// Redux
import { useSelector } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import { I18nPropvider } from './i18nProvider';

import './App.css';

const mapState = (state) => ({
  lang: state.language.locale
});

const App = ({props}) => {
  const { lang } = useSelector(mapState);

  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);



  return (
        <I18nPropvider locale={lang}>
        <Router>
          <Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route component={Routes} />
            </Switch>
          </Fragment>
        </Router>
        </I18nPropvider>
  );
};



export default App
