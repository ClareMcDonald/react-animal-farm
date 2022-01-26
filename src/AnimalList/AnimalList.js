import React from 'react';
import Animal from '../Animal/Animal.js';
import './AnimalList.css';

export default function AnimalList(props) {
  return <div className="animal-list">
    {
      props.animal.map((animal, i) =>
        <Animal key={animal.name + i} animal={animal} />)
    }
  </div>;
}