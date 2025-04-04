import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { Header, SideBar } from '../../widgets';
import PrivateRoute from './PrivateRoute';

const HomePage = React.lazy(() => import('../../pages/home/HomePage'));
const LoginPage = React.lazy(() => import('../../pages/login/LoginPage'));
const RegisterPage = React.lazy(() => import('../../pages/register/RegisterPage'));
const PostPage = React.lazy(() => import('../../pages/post/PostPage'));
const AccountPage = React.lazy(() => import('../../pages/account/AccountPage'));
const CreatePostPage = React.lazy(() => import('../../pages/createPost/CreatePostPage'));
const MyPostsPage = React.lazy(() => import('../../pages/myPosts/MyPostsPage'));
const EditPostPage = React.lazy(() => import('../../pages/editPost/EditPostPage'));
const UsersPage = React.lazy(() => import('../../pages/users/UsersPage'));
const UserPage = React.lazy(() => import('../../pages/user/UserPage'));
const QuestionsPage = React.lazy(() => import('../../pages/questions/QuestionsPage'));
const QuestionPage = React.lazy(() => import('../../pages/question/QuestionPage'));
const CreateQuestionPage = React.lazy(() => import('../../pages/createQuestion/CreateQuestionPage'));
const EditQuestionPage = React.lazy(() => import('../../pages/editQuestion/EditQuestionPage'));

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
          <Route path='/snippets/:id' element={<PostPage />} />
          <Route path='/me' element={<AccountPage />} />
          <Route path='/snippet'>
            <Route path='/snippet/create' element={<CreatePostPage />} />
            <Route path='/snippet/edit' element={<EditPostPage />} />
          </Route>
          <Route path='/snippets/me' element={<MyPostsPage />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path="/users/:id" element={<UserPage />} />
          <Route path='/questions' element={<QuestionsPage />} />
          <Route path='/questions/:id' element={<QuestionPage />} />
          <Route path='/questions/create' element={<CreateQuestionPage />} />
          <Route path='/questions/edit' element={<EditQuestionPage />} />
        </Route>
      </Route>
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  )
}

export default RoutesWrapper;