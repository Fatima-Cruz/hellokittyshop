import Slideshow from './Slideshow';
import hk14 from '../Images/hk14.jpg';

const HomePage = () => {
    return(
      <div>
  <Slideshow />
<div className="doll_of_month_container">
        <div className="img_div">
           <img src={hk14} 
                alt="Hello Kitty Doll">
                  </img>
                  </div>

        <div className="doll_of_month_txtbox"> 
          <h2 
          className="doll_of_month_header"> Doll of the Month
          </h2>

          <p 
          className="doll_of_month_p"> 
          For this month of February, Hello Kitty Shop &#169; will donate 70% of all proceeds 
            from this limited edition "I-do" Hello Kitty 2 pack to the 
            <a href="https://wish.org/impact"> Make-A-Wish </a> foundation to help fulfill 
            the wishes of children with a critical illness. 

            <button className="doll_of_month_button"> Purchase Now! </button> </p>
          </div>
       
      </div>
      
      <div className="stars_container">
        <div className="stars"> 
        <img className="stars" 
              src="https://www.vippng.com/png/full/91-918012_testimonials-amazon-5-star-rating.png" 
              alt="stars" />
              </div>
          <p> "Amazing doll quality, each individually made with care!"</p>
        </div>
        </div>
    );
}

export default HomePage;