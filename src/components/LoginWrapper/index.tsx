import React, { useState } from 'react';
import ApiCalendar from 'react-google-calendar-api';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineMenu } from 'react-icons/ai';

import { eventsSelector } from '@store/selectors';
import googleButtons from '@constants/googleButtons';
import config from '@constants/googleConfig';
import { storeEvents, clearEvents } from '@store/actions/eventsActions';

import { Wrapper, ButtonWrapper, Menu } from './styled';

function LoginWrapper() {
  const dispatch = useDispatch();
  const events = useSelector(eventsSelector);
  const [active, setActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const apiCalendar = new ApiCalendar(config);

  const loginClick = () => {
    apiCalendar.handleAuthClick();
  };

  const logoutClick = () => {
    if (!gapi.client.getToken()) {
      toast('You are not signed in!');
    } else {
      setIsLoggedIn(false);
      apiCalendar.handleSignoutClick();
      dispatch(clearEvents());
    }
  };

  const showEvents = () => {
    if (!gapi.client.getToken()) {
      toast('You need to sign in before fetching events!');
    } else if (events.length === 0) {
      setIsLoggedIn(true);
      apiCalendar.listUpcomingEvents(3).then(({ result }: any) => {
        result.items.forEach((el: any) => {
          dispatch(storeEvents(el));
        });
      });
    }
  };

  const handleClick = (text: string) => () => {
    switch (text) {
      case 'Sign In':
        loginClick();
        setActive(!active);
        break;
      case 'Show Events':
        showEvents();
        setActive(!active);
        break;
      case 'Sign Out':
        logoutClick();
        setActive(!active);
        break;
      default:
        break;
    }
  };

  return (
    <Wrapper active={active}>
      <Menu onClick={() => setActive(!active)}>
        <AiOutlineMenu />
      </Menu>
      {googleButtons.map(({ text, icon }) => (
        <ButtonWrapper key={text} onClick={handleClick(text)} text={text} isLoggedIn={isLoggedIn}>
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
