import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setService } from '@store/actions/serviceSwitcherActions';

import { Btn, Wrapper } from './styled';

function ForecastServiceSwitcher() {
  const dispatch = useDispatch();
  const [active, setActive] = useState(true);

  const dailyClick = () => {
    setActive(true);
    dispatch(setService('daily'));
  };
  const hourlyClick = async () => {
    setActive(false);
    dispatch(setService('hourly'));
  };
  return (
    <Wrapper>
      <Btn active={active} onClick={dailyClick}>
        Daily
      </Btn>
      <Btn active={!active} onClick={hourlyClick}>
        Hourly
      </Btn>
    </Wrapper>
  );
}

export default ForecastServiceSwitcher;
