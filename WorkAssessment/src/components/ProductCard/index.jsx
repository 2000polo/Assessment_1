import React from 'react'
import './index.css';
import placeholder from '../../assets/placeholder.png'
const ProductCard = ({product, addItem}) => {

    const { name, price, count, key } = product

    const updateCart = () => {

    }

    return (
        <div className='product-card'>
            <img src={placeholder} alt="" />
            <div className="meta-data">
                <h4>{name}</h4>
                <p>Price: {price} RS</p>
                <div className="action-section">
                    <button onClick={() => addItem(key)} className='dec'>-</button>
                    <div className="item-number">{count}</div>
                    <button onClick={() => addItem(key)} className='dec'>+</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;