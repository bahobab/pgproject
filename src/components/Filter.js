import React from 'react';

export const Filter = ({filterType, onClick, items}) => {

  return (
    <div>
      <button onClick={onclick}>{filterType}</button>
    </div>
  )
}