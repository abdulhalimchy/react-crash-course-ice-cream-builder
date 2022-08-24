import React from 'react'
import classes from './Item.module.css'
import { countBy } from 'lodash'

const Item = ({ name, scoops={}, add, remove }) => {
  const scoopsByCount = countBy(scoops);
  return (
    <li className={classes.item}>
        <span>{name}</span>
        {scoopsByCount[name] >=0 ? <span className={classes.quantity}>{scoopsByCount[name]}</span> : null}
        <div className="right">
            <button className={[classes.plus, 'rounded'].join(' ')} type="button" onClick={add.bind(this, name)}>
                +
            </button>
            <button className={[classes.minus, 'rounded'].join(' ')} type="button" onClick={() => remove(name)}>
                -
            </button>
        </div>

    </li>
  )
}

export default Item;
