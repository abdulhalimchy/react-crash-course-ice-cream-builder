import React from 'react'
import Item from './Item/Item.jsx'

const Items = ({ items, scoops, add, remove }) => {
  const flavors = Object.keys(items);
  return (
    <div>
        <ul>
            {flavors.map(flavor => (
              <Item key={flavor} name={flavor} scoops={scoops} add={add} remove={remove}/>
            ))}
        </ul>
    </div>
  )
}

export default Items
