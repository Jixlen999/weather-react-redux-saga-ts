import React from 'react';
import DateAndEvents from '../DateAndEvents';
import Forecast from '../Forecast';
import Wrapper from './styled';

function Main() {
  return (
    <Wrapper>
      <DateAndEvents />
      <Forecast />
    </Wrapper>
  );
}

export default Main;
