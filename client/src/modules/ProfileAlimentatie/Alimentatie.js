import React from 'react';
import Alimentatie from '../../components/Alimentatie';
import { Layout } from 'antd';
const { Sider, Content } = Layout;
function ProfileAlimentatie() {
  return (
    <Layout>
      <Content>
        <Alimentatie />
      </Content>
      <Sider>Istoric</Sider>
    </Layout>
  );
}

export default ProfileAlimentatie;
