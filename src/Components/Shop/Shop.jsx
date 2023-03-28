import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [Cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddToCart = (product) => {
        const newCart = [...Cart, product];
        setCart(newCart);
    }
    return (
        <div className='Shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}

                    ></Product>)
                }

            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
                <p>Selected items:{Cart.length}</p>
            </div>

        </div>
    );
};

export default Shop;