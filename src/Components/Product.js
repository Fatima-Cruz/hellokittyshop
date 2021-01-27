const Product = () => {
    return(
        <div class="flexbox_item flexbox_item_1"> 
        <img src="Images/prod2.jpg" width="200vw" height="190vw" alt="Hello Kitty Doll" />
        <h1 class="product_header"> Classic Kitty</h1>
        <p class="product_description"> The classic outfit from Hello Kitty that we all know and love! </p>
        <section class="price_cart_box">
        <p class="price">$19.99</p>
        </section>
        <section class="price_cart_box">
        <button class="add_to_cart"> Add to Cart</button>
        </section>
            </div>
    );
}

export default Product;