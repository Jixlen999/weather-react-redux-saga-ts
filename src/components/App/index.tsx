import React from 'react';
import LocationInput from '@components/LocationInput';
import Main from '@components/Main';
import AppWrapper from './styled';
import LoginWrapper from '../LoginWrapper';

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
