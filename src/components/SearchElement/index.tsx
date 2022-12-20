/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */
import React from 'react';

import SearchField from './styled';

function SearchElement({ element, setCurCity }: any) {
  const { name, country } = element;

  const searchClickHandler = () => {
    setCurCity(name);
  };
  return (
    <SearchField onClick={searchClickHandler}>
      {name}, {country}
    </SearchField>
  );
}

export default SearchElement;
