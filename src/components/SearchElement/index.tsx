import React from 'react';

import SearchField from './styled';

function SearchElement({ element, setCurCity }: any) {
  const { name, country } = element;

  const handleClick = () => {
    setCurCity(name);
  };
  return (
    <SearchField onClick={handleClick}>
      {name}, {country}
    </SearchField>
  );
}

export default SearchElement;
