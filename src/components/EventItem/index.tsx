import React from 'react';
import { Item, Summary, Time } from './styled';

function EventItem({ event }: { event: any }) {
  const { summary, start } = event;
  const { dateTime } = start;
  const time = `${new Date(dateTime).getHours() + 12}:${new Date(dateTime).getMinutes()}`;
  return (
    <Item>
      <Time>{time}</Time>
      <Summary>{summary}</Summary>
    </Item>
  );
}

export default EventItem;
