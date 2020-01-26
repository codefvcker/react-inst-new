import React from 'react';
import Header from './features/Header'

function App({children}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default App;
