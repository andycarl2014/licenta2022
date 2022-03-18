import React from 'react';
import Analize from '../../components/Analize';
import { Layout } from 'antd';
const { Sider, Content } = Layout;
function ProfileAnalize() {
  return (
    <Layout>
      <Content>
        <Analize />
      </Content>
      <Sider>Istoric</Sider>
    </Layout>
  );
}

export default ProfileAnalize;
