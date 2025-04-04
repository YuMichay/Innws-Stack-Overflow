import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import './styles/styles.scss';

import { QueryProvider } from './providers/QueryProvider';
import { AuthProvider } from './providers/AuthProvider';
import RoutesWrapper from './routes/routes';
import { Spinner } from '../shared';
import { theme } from '../shared/config/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryProvider>
        <AuthProvider>
          <Router>
            <Suspense fallback={<Spinner />}>
              <RoutesWrapper />
            </Suspense>
          </Router>
        </AuthProvider>
      </QueryProvider>
    </ThemeProvider>
  )
}
export default App;