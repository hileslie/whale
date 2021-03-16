import React from 'react';
import ReactDom from 'react-dom';
import BlankLayout from './layouts/BlankLayout';
import 'antd/dist/antd.less';
import './global.less';

const App = () => {
  return <BlankLayout />;
}

ReactDom.render(<App />, document.getElementById('whale-app'));
