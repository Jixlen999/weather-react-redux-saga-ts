import React from 'react';

import SearchField from './styled';

function SearchElement({ element, setCurrentCity }: any) {
  const { name, country } = element;

  const handleClick = () => {
    setCurrentCity(name);
  };
  return (
    <SearchField onClick={handleClick}>
      {name}, {country}
    </SearchField>
  );
}

export default SearchElement;
