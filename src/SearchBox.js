import React from 'react';
const SearchBox = ({searchfield, searchChange}) => {
  return(
    <div >
      <input className='dark-purple ba b--light-blue br3 pa3'
      type ='search'
      placeholder = 'Search your monster'
      onChange = {searchChange}
       />
    </div>
  );
}

export default SearchBox;
