import React from 'react';
import CurrentDate from '../CurrentDate';
import Events from '../Events';
import Wrapper from './styled';

function DateAndEvents() {
  return (
    <Wrapper>
      <CurrentDate />
      <Events />
    </Wrapper>
  );
}

export default DateAndEvents;
