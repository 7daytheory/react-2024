import React from 'react'

function List () {
    const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

    const listItems = fruits.map(fruit => <li>{fruit}</li>);

    return (
      <ol>
        {listItems}
      </ol>
  )
}

  export default List;