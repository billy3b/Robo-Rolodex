import React from 'react';
import Card from './Card';

const List =({Avatar}) => {
  if (Avatar.length>0)
  {
   return (
    <div>
       {
          Avatar.map((user,i) => {
            return (<Card
                key={i}
                id= {Avatar[i].id}
                name= {Avatar[i].name}
                />
                );
           }
          )

        }
    </div>

   );
  }

  else {
  return(
    <div className = 'dark-red'>
      Oops! Not Found
    </div>
  )
 }
}
export default List;
