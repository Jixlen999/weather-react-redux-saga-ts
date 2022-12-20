import React from 'react';
import ApiCalendar from 'react-google-calendar-api';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { eventsSelector } from '@src/store/selectors';
import googleButtons from '@src/constants/googleButtons';
import config from '@src/constants/googleConfig';
import { storeEvents, clearEvents } from '@src/store/actions/eventsActions';

import { Wrapper, ButtonWrapper } from './styled';

function LoginWrapper() {
  const dispatch = useDispatch();
  const events = useSelector(eventsSelector);

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
    } else if (events.length === 0) {
      apiCalendar.listUpcomingEvents(3).then(({ result }: any) => {
        result.items.forEach((el: any) => {
          dispatch(storeEvents(el));
        });
      });
    }
  };

  const clickHandler = (text: string) => () => {
    switch (text) {
      case 'Sign In':
        loginClick();
        break;
      case 'Show Events':
        showEvents();
        break;
      case 'Sign Out':
        logoutClick();
        break;
      default:
        break;
    }
  };

  return (
    <Wrapper>
      {googleButtons.map(({ text, icon }) => (
        <ButtonWrapper key={text} onClick={clickHandler(text)}>
          {icon}
          <p>{text}</p>
        </ButtonWrapper>
      ))}

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
