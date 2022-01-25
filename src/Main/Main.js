import React from 'react';
import './Main.css';
import backgroundImage from '../background.png';
import AnimalList from './AnimalList';


export default function Main(props) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImage})` }}>
         
      <AnimalList animals={props.animals} />
    </main>
  );
}