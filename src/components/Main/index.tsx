import React from 'react';
import Moment from 'react-moment';
import Forecast from '../Forecast';
import Wrapper from './styled';

function Main() {
  return (
    <Wrapper>
      <Moment format="HH:mm" />
      <Forecast />
    </Wrapper>
  );
}

export default Main;
