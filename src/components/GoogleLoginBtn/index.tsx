import React, { useState } from 'react';
import ApiCalendar from 'react-google-calendar-api';

function GoogleLoginBtn() {
  const [events, setEvents] = useState<any[]>([]);
  const config = {
    clientId: '933074410376-q8bcjeac76bgm222vchl0hph56um07ob.apps.googleusercontent.com',
    apiKey: 'AIzaSyCHhhaUClTHwbdfldMJoQyiWjnFdxWRaSs',
    scope: 'https://www.googleapis.com/auth/calendar',
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
  };
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
              setEvents([...events, el.summary]);
            });
          });
          clearInterval(int);
        }
      }, 1000);
    });
  };

  const logoutClick = () => {
    apiCalendar.handleSignoutClick();
    setEvents([]);
  };

  return (
    <div>
      <button onClick={loginClick}>sign in</button>
      <button onClick={logoutClick}>sigh out</button>
      <div>Events: {events}</div>
    </div>
  );
}

export default GoogleLoginBtn;
