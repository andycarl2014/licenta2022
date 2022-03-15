import React from 'react';
import 'antd/dist/antd.min.css';
import News from './modules/News/News';
import NavbarGuest from './layout/header';
import Login from './modules/Login/Login';
import Register from './modules/Register/Register';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './modules/Home/Home';
import Profile from './modules/Profile/Profile';
import { Layout } from 'antd';
const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Header>
          <NavbarGuest />
        </Header>
        <Content>
          <Routes>
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/news' element={<News />} />
            <Route exact path='/profile' element={<Profile />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
