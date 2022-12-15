/* eslint-disable no-useless-return */
/* eslint-disable consistent-return */
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@store/reducers/rootReducer';
import EventItem from '../EventItem';
import Wrapper from './styled';

function Events() {
  const eventsSelector = useSelector((store: RootState) => store.events.events);
  if (eventsSelector.length > 0) {
    return (
      <Wrapper>
        {eventsSelector.map((event) => {
          let count = 0;
          if (count <= 3) {
            count++;
            return <EventItem key={event.id} event={event} />;
          }
          return;
        })}
      </Wrapper>
    );
  }
  return <div />;
}

export default Events;
