/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import ApiCalendar from 'react-google-calendar-api';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from '@src/constants/googleConfig';
import { storeEvents, clearEvents } from '@src/store/actions/eventsActions';
import Btn from './styled';

function GoogleLoginBtn() {
  const dispatch = useDispatch();

  const apiCalendar = new ApiCalendar(config);

  const loginClick = () => {
    apiCalendar.handleAuthClick();
  };

  const logoutClick = () => {
    apiCalendar.handleSignoutClick();
    dispatch(clearEvents());
  };

  const showEvents = () => {
    if (!gapi.client.getToken()) {
      toast.warning('You need to sign in before fetching events!');
    } else {
      apiCalendar.listUpcomingEvents(10).then(({ result }: any) => {
        result.items.forEach((el: any) => {
          dispatch(storeEvents(el));
        });
      });
    }
  };

  return (
    <div>
      <Btn onClick={loginClick}>sign in</Btn>
      <Btn onClick={logoutClick}>sigh out</Btn>
      <Btn onClick={showEvents}>Show Upcoming Events</Btn>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default GoogleLoginBtn;
