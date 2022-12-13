/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signIn, SIGN_IN } from '@src/store/actions/calendarActions';
import { RootState } from '@src/store/reducers/rootReducer';

function GoogleLoginBtn() {
  const dispatch = useDispatch();
  const eves = useSelector((store: RootState) => store.calendar.events);
  const [events, setEvents] = useState<any[]>([]);

  const loginClick = () => {
    dispatch(signIn());
    console.log(eves);
    setEvents(eves);
  };

  const logoutClick = () => {
    // apiCalendar.handleSignoutClick();
    // setEvents([]);
  };

  return (
    <div>
      <button onClick={loginClick}>sign in</button>
      <button onClick={logoutClick}>sigh out</button>
    </div>
  );
}

export default GoogleLoginBtn;
