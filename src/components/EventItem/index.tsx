import React from 'react';
import { Item, Summary, Time } from './styled';

function EventItem({ event }: { event: any }) {
  const { summary, start } = event;
  const { dateTime } = start;
  const time = `${new Date(dateTime).getHours() + 12}:${new Date(dateTime).getMinutes()}`;
  const weekDay = new Date(dateTime).toString().slice(0, 3);
  return (
    <Item>
      <Time>
        {time} ({weekDay})
      </Time>
      <Summary>{summary}</Summary>
    </Item>
  );
}

export default EventItem;
