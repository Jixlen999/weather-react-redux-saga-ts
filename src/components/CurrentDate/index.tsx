import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';

import { Wrapper, Day } from './styled';

const CurrentDate = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    const now: string = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setDate(now);
  }, []);

  return (
    <Wrapper>
      <Moment format="HH:mm" />
      <Day>{date}</Day>
    </Wrapper>
  );
};

export default CurrentDate;
