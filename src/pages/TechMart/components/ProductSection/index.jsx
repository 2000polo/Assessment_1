import React from 'react'
import ProductCard from '../../../../components/ProductCard'
import './index.css';

const ProductSection = ({products, addItem}) => {
  return (
    <div className='products-grid'>
        {
            products?.map((product) => {
                return <ProductCard addItem={addItem} product={product} />
            })
        }
    </div>
  )
}

export default ProductSection