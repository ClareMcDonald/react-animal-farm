import React from 'react';
import './Header.css';

export default function Header(props) {
  return <header className="header">Alchemy Animal Farm, by {props.name} </header>;
}