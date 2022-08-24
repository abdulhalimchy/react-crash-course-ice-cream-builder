import React from 'react'
import classes from './Builder.module.css'
import Items from './Items/Items.jsx'
import TotalPrice from './TotalPrice/TotalPrice.jsx'
import Modal from './Modal/Modal'

const Builder = ({ items, price, scoops, add, remove }) => {
  return (
    <div>
        <div className={classes.builder}>
            <h5>Build your own Ice Cream</h5>
            <Items items={items} scoops={scoops} add={add} remove={remove}/>
            <TotalPrice price={price} />

            <button className={[classes.order, 'rounded'].join(' ')} type="Button">
                Add to Cart
            </button>
            <Modal>
                Hello Modal
            </Modal>

        </div>
    </div>
  )
}

export default Builder
