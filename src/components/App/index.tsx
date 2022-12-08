import React from 'react';
import LocationInput from '@components/LocationInput';
import Main from '@components/Main';
import AppWrapper from './styled';
import GoogleLoginBtn from '../GoogleLoginBtn';

function App() {
  return (
    <AppWrapper>
      <LocationInput />
      <Main />
      <GoogleLoginBtn />
    </AppWrapper>
  );
}

export default App;
