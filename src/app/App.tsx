import React from 'react';

import { QueryProvider } from './providers/QueryProvider';

const App: React.FC = () => {
  return (
    <QueryProvider>
      <>App</>
    </QueryProvider>
  )
}
export default App;