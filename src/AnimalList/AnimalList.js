import React from 'react';
import Animal from '../Animal/Animal.js';
export default function AnimalList(props) {
  return <div>
    {
      props.animal.map((animal, i) =>
        <Animal key={animal.name + i} animal={animal} />)
    }
  </div>;
}