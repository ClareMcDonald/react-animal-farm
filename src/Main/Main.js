import React from 'react';
import './Main.css';
import backgroundImage from '../background.png';

export default function Main(props) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImage})` }}>
         
      {/* {props.animals.map((animal, i) =>
              <AnimalCard key={animal.name, i} name={animal.name} />
          )} */}
    </main>
  );
}