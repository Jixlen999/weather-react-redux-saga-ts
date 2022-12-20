import React from 'react';

import formatTime from '@src/utils/formatTime';

import { Item, Summary, Time } from './styled';

function EventItem({ event }: { event: any }) {
  const { summary, start } = event;
  const { dateTime } = start;

  const time = formatTime(dateTime);
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
