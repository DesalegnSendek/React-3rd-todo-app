import React from 'react'

const Map = () => {
  
const fruits = ['apple', 'banana', 'orange'];

function Map() {
  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}
} 

export default Map