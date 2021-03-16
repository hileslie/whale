import { Layout, Menu, Breadcrumb } from 'antd';
import React from 'react';
import HeaderContent from '../components/Header/index';
import SiderContent from '../components/Sider/index';

const { Content } = Layout;

const BasicLayout = () => {
  return (
    <Layout>
      <HeaderContent />
      <Layout>
        <SiderContent />
        <Layout>
          <Content>
            <h1>
              Hi Whale~
            </h1>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
};

export default BasicLayout;