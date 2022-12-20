import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';

import { Wrapper, Day } from './styled';

function CurrentDate() {
  const [date, setDate] = useState('');

  useEffect(() => {
    const now: Date = new Date();
    setDate(now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <Wrapper>
      <Moment format="HH:mm" />
      <Day>{date}</Day>
    </Wrapper>
  );
}

export default CurrentDate;
