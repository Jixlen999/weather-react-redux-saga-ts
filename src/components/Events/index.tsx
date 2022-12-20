import React from 'react';
import { useSelector } from 'react-redux';

import { eventsSelector } from '@src/store/selectors';
import EventItem from '../EventItem';

import Wrapper from './styled';

function Events() {
  const events = useSelector(eventsSelector);

  if (events.length > 0) {
    return (
      <Wrapper>
        {events.map((event) => {
          let count = 0;
          if (count <= 3) {
            count++;
            return <EventItem key={event.id} event={event} />;
          }
          return null;
        })}
      </Wrapper>
    );
  }
  return <div />;
}

export default Events;
