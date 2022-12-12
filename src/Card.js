import React from 'react';


const Card = ({id, name}) => {
  return(
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5'>
      <img src = {`https://robohash.org/${name}?200x200?set=set3`} alt = 'Avatars' />
      <div>
        <h2>{id}</h2>
        <p>{name}</p>
      </div>
    </div>

  );
}

export default Card;
