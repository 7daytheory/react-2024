import React from 'react'

function List () {
    const fruits = [
        {id: 1, name: "Apple", calories: 95},
        {id: 2, name: "Orange", calories: 85},
        {id: 3, name: "Banana", calories: 155},
        {id: 4, name: "Coconut", calories: 105},
        {id: 5, name: "Pineapple", calories: 55},
    ];

    const listItems = fruits.map(fruit => <li key={fruit.id}>
        {fruit.name}: &nbsp; <b>{fruit.caloriess}</b>
        </li>);

    return (
      <ol>
        {listItems}
      </ol>
  )
}

  export default List;