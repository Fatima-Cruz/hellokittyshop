import React from 'react';
import Product from './Product'
import productsData from './products.json';
//import Images from '../Images'
// import prod3 from '../Images/prod3.jpg';

const productsList = productsData.products;

function App(){
    const products = []
    for(let i = 0; i < productsList.length; i++) {
        products.push(<Product product={productsList[i]} productNumber={i} />)
    }
    return(
<div className="flexbox_container">
    {products}

</div>
    );
}


export default App;