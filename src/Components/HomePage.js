import Slideshow from './Slideshow';

const HomePage = () => {
    return(
<div>
  <Slideshow />
<div class="doll_of_month_container">
        <div class="doll_of_month_img"> <img src="https://images-na.ssl-images-amazon.com/images/I/51gbZd4UxSL.jpg" alt="Hello Kitty Doll"></img></div>
        <div class="doll_of_month_txtbox"> 
          <h2 class="doll_of_month_header"> Doll of the Month</h2>
          <p class="doll_of_month_p"> For this month of October, Hello Kitty Shop © will donate 70% of all proceeds 
            from this limited edition Ballroom Kitty doll to Make-A-Wish foundation to help fulfill the wishes of children with a critical illness. 
            <button class="doll_of_month_button"> Purchase Now! </button> </p>
          </div>
       
      </div>
      
      <div class="stars_container">
        <div class="stars"> <img class="stars" src="https://www.vippng.com/png/full/91-918012_testimonials-amazon-5-star-rating.png" alt="stars" /></div>
          <div class="stars_textbox">
            <p class="stars_text"> "Amazing doll quality, each individually made with care!"</p>
          </div>
        </div>
</div>
    );
}

export default HomePage;