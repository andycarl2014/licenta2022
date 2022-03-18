import React from 'react';
import Medicamente from '../../components/Medicamente';
import { Layout } from 'antd';
const { Sider, Content } = Layout;
function ProfileMedicamente() {
  return (
    <Layout>
      <Content>
        <Medicamente />
      </Content>
      <Sider>Istoric</Sider>
    </Layout>
  );
}

export default ProfileMedicamente;
