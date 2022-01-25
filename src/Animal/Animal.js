import React from 'react';


export default function Animal(props) {
  return <p>
    <img src={`/images/${props.type}.svg`}/>
    {props.animal.name} is a {props.animal.type} who says {props.animal.says}
  </p>;
}