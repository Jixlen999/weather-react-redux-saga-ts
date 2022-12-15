import React from 'react';
import ApiCalendar from 'react-google-calendar-api';
import { useDispatch, useSelector } from 'react-redux';
import { FaGoogle, FaSignOutAlt } from 'react-icons/fa';
import { MdEvent } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { RootState } from '@store/reducers/rootReducer';
import config from '@src/constants/googleConfig';
import { storeEvents, clearEvents } from '@src/store/actions/eventsActions';

import { Wrapper, ButtonWrapper } from './styled';

function LoginWrapper() {
  const dispatch = useDispatch();
  const eventsSelector = useSelector((store: RootState) => store.events.events);

  const apiCalendar = new ApiCalendar(config);

  const loginClick = () => {
    apiCalendar.handleAuthClick();
  };

  const logoutClick = () => {
    if (!gapi.client.getToken()) {
      toast('You are not signed in!');
    } else {
      apiCalendar.handleSignoutClick();
      dispatch(clearEvents());
    }
  };

  const showEvents = () => {
    if (!gapi.client.getToken()) {
      toast('You need to sign in before fetching events!');
    } else if (eventsSelector.length === 0) {
      apiCalendar.listUpcomingEvents(3).then(({ result }: any) => {
        result.items.forEach((el: any) => {
          dispatch(storeEvents(el));
        });
      });
    }
  };

  return (
    <Wrapper>
      <ButtonWrapper onClick={loginClick}>
        <FaGoogle style={{ fontSize: '30px' }} />
        <p>Sign In</p>
      </ButtonWrapper>
      <ButtonWrapper onClick={showEvents}>
        <MdEvent style={{ fontSize: '30px' }} />
        <p>Show Upcoming Events</p>
      </ButtonWrapper>
      <ButtonWrapper onClick={logoutClick}>
        <FaSignOutAlt style={{ fontSize: '30px' }} />
        <p>Sign Out</p>
      </ButtonWrapper>
      <ToastContainer
        position="bottom-left"
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
    </Wrapper>
  );
}

export default LoginWrapper;
