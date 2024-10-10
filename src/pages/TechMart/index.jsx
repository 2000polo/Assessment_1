import React, { useState } from 'react'
import Header from '../../components/Header';
import ProductSection from './components/ProductSection';
import CartSection from './components/CartSection/index';
import './index.css';

const TechMart = () => {

    const [ cart, setCart ] = useState([]);

    const [products, setProducts] = useState([
        {
            name: 'ILOZ Cut Glass Green Leather Strap Ladies Analog Girls Watch',
            price: 100,
            count: 0,
            key: 1
        },
        {
            name: 'ILOZ Cut Glass Green Leather Strap Ladies Analog Girls Watch',
            price: 250,
            count: 0,
            key: 2
        },
        {
            name: 'ILOZ Cut Glass Green Leather Strap Ladies Analog Girls Watch',
            price: 100,
            count: 0,
            key: 3
        },
        {
            name: 'ILOZ Cut Glass Green Leather Strap Ladies Analog Girls Watch',
            price: 350,
            count: 0,
            key: 4
        },
        {
            name: 'ILOZ Cut Glass Green Leather Strap Ladies Analog Girls Watch',
            price: 200,
            count: 0,
            key: 5
        },
        {
            name: 'ILOZ Cut Glass Green Leather Strap Ladies Analog Girls Watch',
            price: 500,
            count: 0,
            key: 6
        },
    ])

    const addItem = (key) => {

        console.log("additem", key)
        const updatedProduct = products?.map((prdct) => {
            if(prdct.key === key){
                // return setProducts(() => { return {...prdct, count: prdct.count + 1 }})
                console.log("product", prdct)
                return {
                    ...prdct,
                    count: prdct.count + 1
                }
            }else{
                return prdct;
            }
        })
        console.log("additem", updatedProduct)

        setProducts(updatedProduct)

    }

    return (
        <>
            <Header />

            <div className='main-section'>
                <div className="product-section">
                    <ProductSection addItem={addItem} products={products} />
                </div>
                <div className="cart-section">
                    <CartSection products={products} cart={cart} />
                </div>
            </div>
        </>
    )
}

export default TechMart;