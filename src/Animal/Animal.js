import React from 'react';

export default function Animal(props) {
  return <p>
    {props.animal.name} is a {props.animal.type} who says {props.animal.says}
  </p>;
}