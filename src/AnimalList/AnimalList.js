import React from 'react';
export default function AnimalList(props) {
  return <div>
    {
      props.animal.map((animal, i) => 
        <Animal key={animal.name + i} animal={animal} />)
    }
  </div>;
}