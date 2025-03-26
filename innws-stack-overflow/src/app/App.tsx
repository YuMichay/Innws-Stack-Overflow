import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { CircularProgress, createTheme, Stack, ThemeProvider } from '@mui/material';

import './styles/styles.scss';

import { QueryProvider } from './providers/QueryProvider';
import { Header, SideBar } from '../widgets/index';
import { HomePage, LoginPage, RegisterPage } from './routes/routes';

const theme = createTheme({
  components: {
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: "#D3D3D3",
        },
      },
    },
  },
  typography: {
    fontFamily: '"Tektur", sans-serif',
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#00FF00',
    },
    secondary: {
      main: '#D3D3D3',
    },
    action: {
      active: '#00FF00',
      hover: '#FF3D77',
    },
    error: {
      main: '#FF5733',
    },
  },
})

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryProvider>
        <Router>
          <Suspense fallback={
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{
                height: "100vh",
                width: "100%",
              }}
            >
              <CircularProgress />
            </Stack>
          }>
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
              </Route>
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/login' element={<LoginPage />} />
            </Routes>
          </Suspense>
        </Router>
      </QueryProvider>
    </ThemeProvider>
  )
}
export default App;