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
