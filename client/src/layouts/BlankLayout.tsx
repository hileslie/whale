import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import HomePage from '../pages/Home/index';
import BasicLayout from './BasicLayout';

const Layout = () => {
  return (
    <React.Fragment>
      <Route path="/" exact component={HomePage} />
      <Route path="/dashboard" component={BasicLayout} />
    </React.Fragment>
  )
}

const BlankLayout = () => {
  return (
    <HashRouter>
      <Layout />
    </HashRouter>
  )
}

export default BlankLayout;
