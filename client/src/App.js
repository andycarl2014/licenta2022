import React, { useState } from 'react';
import 'antd/dist/antd.min.css';
import News from './modules/News/News';
import NavbarGuest from './layout/header';
import Login from './modules/Login/Login';
import Register from './modules/Register/Register';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './modules/Home/Home';
import Profile from './modules/Profile/Profile';
import { Layout } from 'antd';
import { isAuthenticated } from './auth/auth0';

const { Header, Content } = Layout;

function App() {
  const [auth, setAuth] = useState(false);

  isAuthenticated()
    .then((value) => setAuth(value))
    .catch((err) => console.log(err));
  return (
    <Layout>
      <Header>
        <NavbarGuest />
      </Header>
      <Content>
        <Routes>
          <Route
            exact
            path='/register'
            element={!auth ? <Register /> : <Profile />}
          />
          <Route
            exact
            path='/login'
            element={!auth ? <Login /> : <Profile />}
          />
          <Route exact path='/news' element={<News />} />
          <Route
            exact
            path='/profile'
            element={auth ? <Profile /> : <Login />}
          />
          <Route path='/' element={<Home />} />
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;
