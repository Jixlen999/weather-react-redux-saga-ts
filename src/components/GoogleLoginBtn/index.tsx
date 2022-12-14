/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import ApiCalendar from 'react-google-calendar-api';
import config from '@src/constants/googleConfig';
import { useDispatch } from 'react-redux';
import { storeEvents, clearEvents } from '@src/store/actions/eventsActions';

function GoogleLoginBtn() {
  const dispatch = useDispatch();
  const apiCalendar = new ApiCalendar(config);

  const loginClick = () => {
    apiCalendar.handleAuthClick();
    let timer = 0;
    apiCalendar.onLoad(() => {
      const int = setInterval(() => {
        if (gapi.client.getToken() === null) {
          timer++;
          if (timer > 300) {
            clearInterval(int);
          }
        } else {
          apiCalendar.listUpcomingEvents(10).then(({ result }: any) => {
            result.items.forEach((el: any) => {
              dispatch(storeEvents(el));
            });
          });
          clearInterval(int);
        }
      }, 1000);
    });
  };

  const logoutClick = () => {
    apiCalendar.handleSignoutClick();
    dispatch(clearEvents());
  };

  return (
    <div>
      <button onClick={loginClick}>sign in</button>
      <button onClick={logoutClick}>sigh out</button>
    </div>
  );
}

export default GoogleLoginBtn;
