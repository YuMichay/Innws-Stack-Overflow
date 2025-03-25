import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { createTheme, Stack, ThemeProvider } from '@mui/material';

import './styles/styles.scss';

import { QueryProvider } from './providers/QueryProvider';
import Header from '../widgets/header/Header';
import SideBar from '../widgets/sidebar/Sidebar';
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
          <Suspense>
            <Routes>
              <Route path='/' element={
                <>
                  <Header />
                  <Stack direction="row">
                    <SideBar />
                    <Outlet />
                  </Stack>
                </>
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