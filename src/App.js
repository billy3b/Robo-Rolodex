import React, { useState, useEffect } from 'react';
import List from './List';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';

function App() {
  const [avatars, setAvatars] = useState([])
  const [searchfield, setSearchfield] = useState('')



 
    if(avatars.length === 0){
        return <h1> Loading </h1>
     }

    else {
       return( 
            <div className='tc'>
              <h1 className = 'f1'>Robot Rolodex</h1>

              <SearchBox searchChange = {onSearchChange} />
              <Scroll>
                <List Avatar = {filterAvtars} />
              </Scroll>
            </div>
         );
    }


   
}

export default App;
