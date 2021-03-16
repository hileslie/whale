import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import AllNotes from '../pages/AllNotes/index';
import Notebook from '../pages/Notebook/index';

const MainLayout = () => {
  return (
    <HashRouter>
      <Redirect path="/dashboard" to="/dashboard/allnotes" />
      <Route path="/dashboard/allnotes" exact component={AllNotes} />
      <Route path="/dashboard/notebook/:id" component={Notebook} />
      {/* <Redirect to="dashboard/allnotes" /> */}
    </HashRouter>
  )
}

export default MainLayout;
