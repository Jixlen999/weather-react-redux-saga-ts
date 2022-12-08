import React from 'react';
import Moment from 'react-moment';
import Wrapper from './styled';

function Main() {
  return (
    <Wrapper>
      <Moment format="HH:mm" />
    </Wrapper>
  );
}

export default Main;
