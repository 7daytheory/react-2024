import React from 'react'

function List () {
    const fruits = [
        {id: 1, name: "Apple", calories: 95},
        {id: 2, name: "Orange", calories: 85},
        {id: 3, name: "Banana", calories: 155},
        {id: 4, name: "Coconut", calories: 105},
        {id: 5, name: "Pineapple", calories: 55},
    ];

    //fruits.sort((a,b) => a.name.localeCompare(b.name)); //Alphabetical
    //fruits.sort((a,b) => b.name.localeCompare(a.name)); //Reverse Alphabetical
    //fruits.sort((a,b) => a.calories - b.calories); //Numeric
    fruits.sort((a,b) => b.calories - a.calories); //Reverse Numeric

    const listItems = fruits.map(fruit => <li key={fruit.id}>
        {fruit.name}: &nbsp; <b>{fruit.calories}</b>
        </li>);

    return (
      <ol>
        {listItems}
      </ol>
  )
}

  export default List;