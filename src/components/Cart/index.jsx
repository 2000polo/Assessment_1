import React from 'react'
import './index.css';

const Cart = ({cart, products}) => {

    console.log("printing cart", cart)
    const cartproducts = products.filter((product) => {
        return product.count > 0
    })

    console.log("cartproducts", cartproducts)

    // const sum = cartproducts || []?.reduce((a, b) => a.price + b.price)

  return (
    <div className='cart-component'>
        <h4>Cart</h4>
        <div className="item-list-wrapper">
            {
                cartproducts?.map((obj) => {
                    return (
                        <div className="item-list">
                            <p className='item-name'>{obj?.name}</p>
                            <p className='count'>{obj?.count}</p>
                            <p className='price'>{obj?.price} RS</p>
                        </div>
                    )
                })
            }
            {/* <div className="item-list">
                <p className='item-name'>item name</p>
                <p className='count'>0</p>
                <p className='price'>100 RS</p>
            </div>
            <div className="item-list">
                <p className='item-name'>item name</p>
                <p className='count'>0</p>
                <p className='price'>100 RS</p>
            </div> */}

        </div>

        <div className="sub-total">
            <p>Sub Total</p>
            <p>{}</p>
        </div>
        <div className="sub-total">
            <p>DIscount</p>
            <p>100</p>
        </div>
        <div className="sub-total">
            <p>Total</p>
            <p>100</p>
        </div>

        <button>Purchase</button>
    </div>
  )
}

export default Cart;