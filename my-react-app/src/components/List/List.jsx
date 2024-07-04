import React from 'react'

function List () {
    const fruits = [
        {name: "Apple", calories: 95},
        {name: "Orange", calories: 85},
        {name: "Banana", calories: 155},
        {name: "Coconut", calories: 105},
        {name: "Pineapple", calories: 55},
    ];

    const listItems = fruits.map(fruit => <li>{fruit.name}</li>);

    return (
      <ol>
        {listItems}
      </ol>
  )
}

  export default List;