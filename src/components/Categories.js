// @flow
import React from 'react';

let selectedCat = {}

export function Categories(props) {
  const handleChange = (e, id) => {
    if (!e.target.checked) {
      delete selectedCat[id]
    } else {
      selectedCat[id] = true
    }
    const cats = Object.keys(selectedCat).filter((k) => selectedCat[k] === true)
      props.setSelectedCat(cats);  
    }
    

  return (
    <>
      <h3 style={{textTransform: 'uppercase'}}>All Categories</h3>
      <div className="categories">
        {props.items.map(category => (
          <div key={category.id}>
            <label>
              <input
                key={category.id}
                type="checkbox"
                name="category"
                className="category"
                onClick={(e) => handleChange(e, category.id)}
              />
              {category.name}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}
