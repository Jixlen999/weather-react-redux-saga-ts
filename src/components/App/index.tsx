import React from 'react';
import LocationInput from '@components/LocationInput';
import Main from '@components/Main';
import LoginWrapper from '../LoginWrapper';

import AppWrapper from './styled';

function App() {
  return (
    <AppWrapper>
      <LoginWrapper />
      <LocationInput />
      <Main />
    </AppWrapper>
  );
}

export default App;
