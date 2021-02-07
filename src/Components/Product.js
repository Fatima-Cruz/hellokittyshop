import React, {useState} from 'react';

const Product = (props) => {
   const {name, description, price, image} = props.product;
    const productNumber = props.productNumber;

    return(
        <div className={"flexbox_item flexbox_item_"}> 
        <img src={image} width="200vw" height="190vw" alt="" />
        <h1 className="product_header">{name}</h1>
        <p className="product_description"> {description}</p>
        <section className="price_cart_box">
        <p className="price">${price}</p>
        </section>
        <section className="price_cart_box">
        <button className="add_to_cart"> Add to Cart</button>
        </section>
            </div>
    );
}

export default Product;