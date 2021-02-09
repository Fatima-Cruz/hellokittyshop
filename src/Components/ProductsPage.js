
import React from 'react';
import productsData from './products.json';


const productsList = productsData.products;

export default class Products extends React.Component {
constructor() {
    super()
    this.state =
        { Products: productsList, click: false }
}

productSort = (category) => {
    if (category === '') {
        this.setState({ Products: productsList })
        return;
    }

    const products = productsList.filter((item) => {
        return String(item.category) === category
    })

    const filteredProducts = [...products];
    this.setState({ Products: filteredProducts })
};
render() { 
    return(
        <div className="flexbox_container">

<div className="filtering">
<h3>Filter By: </h3>

    <p onClick={ () => 
        this.productSort("Sale")}> Sale
        </p>
        <p onClick={() => 
        this.productSort("Limited")}> Limited Edition
        </p>
    <p onClick={() => 
        this.productSort("Charity")}> Charity
        </p>
       
</div>


{this.state.Products.map((item, id) => {
    return (
        <section className="flexbox_item" key={id}>
            <a href={item.link}>
                <img width="30px" 
                    height="30px"  
                    src={item.badge} 
                    alt="badge" />
                    </a>

            <h2 className="product_header">{item.name}</h2>

            <a href={item.link}>
                <img width="200vw" height="190vw"  
                    src={item.image} 
                    alt="product" />
                    </a>

            <p className="product_description">{item.description} 
            
            <div className="price_cart_box">
             <p className="price"> ${item.price} </p>
            <button class="add_to_cart"> Add to Cart</button>
            </div>
            
            
            </p>
        </section>
    )

})
}
</div>
    )}};