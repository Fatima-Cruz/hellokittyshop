import { render } from '@testing-library/react';
import React from 'react';
import Product from './Product'
import productsData from './products.json';
//import Images from '../Images'
// import prod3 from '../Images/prod3.jpg';

const productsList = productsData.products;

export default class Products extends React.Component {
constructor() {
    super()
    this.state =
        { Products: productsList, click: false }
}
//brings to top of page
componentDidMount() {
    window.scrollTo(0, 0);
}

//opposite of setClick in Hook
handleClick = () => this.setState({ click: !this.click });

//sort by price
priceSort = (a, b) => {
    if (a.price > b.price) {
        return 1
    } else if (a.price < b.price) {
        return -1
    } else {
        return 0
    };

};

// sort by category
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
        <div>
<div className="custom-select" >
<span className="menu-sort">Sort By: Category</span>
<ul className="select-custom">
    <li onClick={() =>
        this.productSort("Interior")}> Interior</li>
    <li onClick={() =>
        this.productSort("Exterior")}> Exterior</li>
    <li onClick={() =>
        this.productSort("Performance")}> Performance</li>
</ul>
<span className="menu-sort">Sort By: Price</span>
<ul className="select-custom">
    <li onClick={() =>
        this.priceSort()}> Low to High</li>
    <li onClick={() =>
        this.priceSort(!this.priceSort)}> High to Low</li>
</ul>

</div>
{this.state.Products.map((item, id) => {
    return (
        <section className="galleryImages" key={id}>
            <p>{item.category}</p>
            <h2>{item.name}</h2>
            <a href={item.link}><img src={item.image} alt="" /></a>
            <p>
                {item.description} Starting at $
            {item.price}
            </p>
        </section>

    )

})
}
</div>
    )}};

// function App(){
//     const products = []
//     for(let i = 0; i < productsList.length; i++) {
//         products.push(<Product product={productsList[i]} productNumber={i} />)
//     }
//     return(
// <div className="flexbox_container">
//     {products}

// </div>
//     );
// }


// export default App;