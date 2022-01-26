import React from 'react';
import './Animal.css';

export default function Animal(props) {
  return <p>
    <img className="animal-img" src={`/images/${props.animal.type}.svg`}/>
    <div className="animal-name">{props.animal.name}</div> is a {props.animal.type} who says {props.animal.says}
  </p>;
}