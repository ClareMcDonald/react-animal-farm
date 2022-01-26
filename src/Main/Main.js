import React from 'react';
import './Main.css';
import backgroundImage from '../background.png';
import AnimalList from '../AnimalList/AnimalList.js';


export default function Main(props) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImage})` }}>
         
      <AnimalList animal={props.animals} />
    </main>
  );
}