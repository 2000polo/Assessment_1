import React from 'react'
import Cart from '../../../../components/Cart'

const CartSection = ({cart, products}) => {


  return (
    <div>
        <Cart cart={cart} products={products} />
    </div>
  )
}

export default CartSection