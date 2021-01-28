import React, {useState} from 'react';
import Product from './Product'

const ProductsPage = () => {
    const [products] = useState([
       {
        name: "Classic Kitty",
        description: "The classic outfit from Hello Kitty that we all know and love!",
        price: 19.99,
        image:"Images/prod2.jpg"
        },
        {
        name: "Smarty Kitty",
        description: "Any experiments and tests will come out positive for Hello Kitty looking cute in a lab coat.",
        price: 19.99,
        image:"Images/prod2.jpg"
        }, 
        {
        name: "Spooky Kitty",
        description: "A kitty so cute that you will want to cuddle her to death, and after!",
        price: 14.99,
        image:"Images/prod2.jpg"
        },
        {
        name: "Classic Kitty",
        description: "The classic outfit from Hello Kitty that we all know and love!",
        price: 19.99,
        image:"Images/prod2.jpg"
        },
        {
        name: "Smarty Kitty",
        description: "Any experiments and tests will come out positive for Hello Kitty looking cute in a lab coat.",
        price: 19.99,
        image:"Images/prod2.jpg"
        }, 
        {
        name: "Spooky Kitty",
        description: "A kitty so cute that you will want to cuddle her to death, and after!",
        price: 14.99,
        image:"Images/prod2.jpg"
        },
{
        name: "Classic Kitty",
        description: "The classic outfit from Hello Kitty that we all know and love!",
        price: 19.99,
        image:"Images/prod2.jpg"
        },
        {
        name: "Smarty Kitty",
        description: "Any experiments and tests will come out positive for Hello Kitty looking cute in a lab coat.",
        price: 15.99,
        image:"Images/prod2.jpg"
        }, 
        {
        name: "Spooky Kitty",
        description: "A kitty so cute that you will want to cuddle her to death, and after!",
        price: 14.99,
        image:"Images/prod2.jpg"
        },
        {
        name: "Sharky Kitty",
        description: "She's adorable but she's not afraid to bite if she needs to!",
        price: 12.99,
        image:"Images/prod2.jpg"
        },
        {
        name: "Strawberry Kitty",
        description: "So yummy and sweet that you'll just want to eat her up!",
        price: 9.99,
        image:"Images/prod2.jpg" 
        },
        {
        name: "Stripey Kitty",
        description: "These stripped PJ's call for a nice, cozy cat nap accompanied by some sweet dreams!",
        price: 4.99,
        image:"Images/prod2.jpg" 
        },
        {
        name: "Watery Kitty",
        description: "Why not go under the sea with this kitty? Seashells, and fun adventures!",
        price: 39.99,
        image:"Images/prod2.jpg"
        },
        {
        name: "Bunny Kitty",
        description: "Can't decide between a bunny or kitty? Neither can we! So why not both?",
        price: 29.99,
        image:"Images/prod2.jpg"
        },
        {
        name: "Scary Kitty",
        description: "Yikes! Don't be afraid, this monster is completely friendly! She might even invite you out for some ice cream!",
        price: 9.99,
        image:"Images/prod2.jpg"
        },
        {
        name: "Ribbity Kitty",
        description: "Anybody down to play some Leap Frog? This Kitty sure is!",
        price: 5.99,
        image:"Images/prod2.jpg"
        },
        {
        name: "Pretty Kitty",
        description: "It's not everyday that you wake up just looking this cute!",
        price: 14.99,
        image:"Images/prod2.jpg"
        },{
        name: "Snowy Kitty",
        description: "We love helping our friends, in snow or shine. That's why this Kitty always makes it to the nice list!",
        price: 49.99,
        image:"Images/prod2.jpg"
        }

    ]);

    console.log('products :: ',products);
    return(
         <div class="flexbox_container">
             {
                 products.map((product, index) => <Product product={product} productNumber={index +1} />)
             }
         </div>
    );
}

export default ProductsPage;