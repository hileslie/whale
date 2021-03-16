import { Layout, Menu } from 'antd';
import React from 'react';
import { CopyOutlined, SnippetsOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;
const { Sider } = Layout;

const allnotesPath = '/dashboard/allnotes';
const notebookPath = '/dashboard/notebook';

const notebookSubMenus = [
  {
    id: 1,
    name: '周记',
  },
  {
    id: 2,
    name: '分享',
  }
]

const defaultSelectedKeys = window.location.hash.replace('#', '');
const defaultOpenKeys = defaultSelectedKeys.indexOf(notebookPath) > -1 ? notebookPath : '';
console.log('zc-defaultSelectedKeys', defaultSelectedKeys)
const SiderContent = () => {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={[defaultSelectedKeys]}
        defaultOpenKeys={[defaultOpenKeys]}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key={allnotesPath} icon={<CopyOutlined/>}>
          <Link to={allnotesPath}>全部笔记</Link>
        </Menu.Item>
        <SubMenu key={notebookPath} icon={<SnippetsOutlined />} title="笔记本">
          {
            notebookSubMenus.map(item => {
              return (
                <Menu.Item key={notebookPath + '/' + item.id}>
                  <Link to={notebookPath + '/' + item.id}>{item.name}</Link>
                </Menu.Item>
              )
            })
          }
        </SubMenu>
      </Menu>
    </Sider>
  )
}

export default SiderContent;
