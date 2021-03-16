import { Layout } from 'antd';
import React from 'react';
import HeaderContent from '../components/Header/index';
import SiderContent from '../components/Sider/index';
import MainLayout from './MainLayout';

const { Content } = Layout;

const BasicLayout = () => {
  return (
    <Layout>
      <HeaderContent />
      <Layout>
        <SiderContent />
        <Layout>
          <Content>
            <MainLayout />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
};

export default BasicLayout;