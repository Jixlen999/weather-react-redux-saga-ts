import React from 'react';

import formatTime from '@utils/formatTime';
import { IEventItemProps } from '@src/types';

import { Item, Summary, Time } from './styled';

function EventItem({ event }: IEventItemProps) {
  const { dateTime, summary } = event;
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
