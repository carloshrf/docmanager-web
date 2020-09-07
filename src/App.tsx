import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';

import AppProvider from './hooks';
import ToastContainer from './components/ToastContainer';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>


    <GlobalStyle />
  </>
);

export default App;
