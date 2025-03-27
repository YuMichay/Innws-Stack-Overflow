import React from 'react';

export const HomePage = React.lazy(() => import('../../pages/home/HomePage'));
export const LoginPage = React.lazy(() => import('../../pages/login/LoginPage'));
export const RegisterPage = React.lazy(() => import('../../pages/register/RegisterPage'));
export const PostPage = React.lazy(() => import('../../pages/post/PostPage'));