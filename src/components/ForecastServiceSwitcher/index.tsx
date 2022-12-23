import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setService } from '@store/actions/serviceSwitcherActions';
import serviceSwitchers from '@src/constants/serviceSwitchers';

import { ServiceBtn, Wrapper } from './styled';

function ForecastServiceSwitcher() {
  const dispatch = useDispatch();
  const [active, setActive] = useState(true);

  const dailyClick = () => {
    setActive(true);
    dispatch(setService('daily'));
  };
  const hourlyClick = () => {
    setActive(false);
    dispatch(setService('hourly'));
  };

  return (
    <Wrapper>
      {serviceSwitchers.map(({ text }) => (
        <ServiceBtn
          key={text}
          active={text === 'Daily' ? active : !active}
          onClick={text === 'Daily' ? dailyClick : hourlyClick}
        >
          {text}
        </ServiceBtn>
      ))}
    </Wrapper>
  );
}

export default ForecastServiceSwitcher;
