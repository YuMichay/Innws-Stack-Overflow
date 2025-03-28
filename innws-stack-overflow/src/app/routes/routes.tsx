import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { Header, SideBar } from '../../widgets';
import PrivateRoute from './PrivateRoute';

const HomePage = React.lazy(() => import('../../pages/home/HomePage'));
const LoginPage = React.lazy(() => import('../../pages/login/LoginPage'));
const RegisterPage = React.lazy(() => import('../../pages/register/RegisterPage'));
const PostPage = React.lazy(() => import('../../pages/post/PostPage'));

const RoutesWrapper: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={
        <div className='app__container'>
          <Header />
          <SideBar />
          <div className='main'>
            <Outlet />
          </div>
        </div>
      }>
        <Route path='/' element={<HomePage />} />
        <Route element={<PrivateRoute />}>
          <Route path='snippets/:id' element={<PostPage />} />
        </Route>
      </Route>
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  )
}

export default RoutesWrapper;