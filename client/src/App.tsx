import React from 'react';
import ReactDom from 'react-dom';
import BasicLayout from './layouts/BasicLayout';
import 'antd/dist/antd.less';
import './global.less';

const App = () => {
  return <BasicLayout />;
}

ReactDom.render(<App />, document.getElementById('whale-app'));
