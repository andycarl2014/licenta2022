import React from 'react';
import Boli from '../../components/Boli';
import { Layout } from 'antd';
const { Sider, Content } = Layout;
function ProfileBoli() {
  return (
    <Layout>
      <Content>
        <Boli />
      </Content>
      <Sider>Istoric</Sider>
    </Layout>
  );
}

export default ProfileBoli;
