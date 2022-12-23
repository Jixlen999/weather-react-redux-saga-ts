import React from 'react';
import { useSelector } from 'react-redux';

import { eventsSelector } from '@store/selectors';
import EventItem from '@components/EventItem';
import { IEvent } from '@src/types';

import Wrapper from './styled';

function Events() {
  const events = useSelector(eventsSelector);

  if (events.length > 0) {
    return (
      <Wrapper>
        {events.map((event: IEvent, index) => (
          <EventItem key={index} event={event} />
        ))}
      </Wrapper>
    );
  }
  return <div />;
}

export default Events;
