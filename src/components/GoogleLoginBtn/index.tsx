/* eslint-disable react/button-has-type */
import React from 'react';
// import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';
import Btn from './styled';

function GoogleLoginBtn() {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });
  return (
    <Btn onClick={() => login()}>
      <FcGoogle /> Sign in with Google 🚀{' '}
    </Btn>
  );
}

export default GoogleLoginBtn;
