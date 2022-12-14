import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@store/reducers/rootReducer';
import EventItem from '../EventItem';

function Events() {
  const eventsSelector = useSelector((store: RootState) => store.events.events);
  if (eventsSelector.length > 0) {
    return (
      <div>
        {eventsSelector.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </div>
    );
  }
  return <div />;
}

export default Events;
