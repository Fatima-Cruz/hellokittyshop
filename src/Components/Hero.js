import hk7 from '../Images/hk7.jpg';
import hk11 from '../Images/hk11.jpg';
import hk17 from '../Images/hk17.jpg';


const Hero = () => {

    var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

    return(
    <div>

<div className="hero_image">
 <div className="mySlides">
    <div className="numbertext">1 / 3</div>
    <img src={hk7} style={{width:"100%"}} />
  </div>
  
  <div className="mySlides">
    <div className="numbertext">2 / 3</div>
    <img src={hk17} style={{width:"100%"}} />
  </div>
  
  <div className="mySlides">
    <div className="numbertext">3 / 3</div>
    <img src={hk11} style={{width:"100%"}} />
  </div>
  
  <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a className="next" onclick="plusSlides(1)">&#10095;</a>
  
  </div>
  <br />
  
  <div style="text-align:center">
    <span className="dot" onclick="currentSlide(1)"></span> 
    <span className="dot" onclick="currentSlide(2)"></span> 
    <span className="dot" onclick="currentSlide(3)"></span> 
  </div>

  <div className="hero_text_container">
    <h1 className="hero_text">Welcome to the Hello Kitty Shop!</h1>
    <p className="hero_text"> Looking for the perfect gift?</p>
    <a className="button_text" href="products.html"> <button className="button_text"> Check out our Products! </button> </a>
  </div> 



        </div>
    );
}

export default Hero;