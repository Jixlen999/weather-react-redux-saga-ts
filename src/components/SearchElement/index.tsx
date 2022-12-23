import React from 'react';

import { ISearchElement } from '@src/types';

import SearchField from './styled';

const SearchElement = ({ element, setCurrentCity }: ISearchElement) => {
  const { name, country } = element;

  const handleClick = () => {
    setCurrentCity(name);
  };
  return (
    <SearchField onClick={handleClick}>
      {name}, {country}
    </SearchField>
  );
};

export default SearchElement;
