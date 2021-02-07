import hk7 from '../Images/hk7.jpg';
import hk17 from '../Images/hk17.jpg';
import hk13 from '../Images/hk13.jpg';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Slideshow = () => {
    return (
      <div>
        <div class="hero_text_container">
  <h1 class="hero_text">Welcome to the Hello Kitty Shop!</h1>
  <p class="hero_text"> Looking for the perfect gift?</p>
  <a class="button_text" href="/ProductsPage"> <button class="button_text"> Check out our Products! </button> </a>
</div>
      <div className="slide-container">
      <Slide>
          <div
              style={{
                  height: "70vh",
              }}
              className="each-slide" 
          >
            <span>
          
            </span>
              {" "}
              <div
                  className="slide-image"
                  style={{
                      backgroundImage: `url(${hk7})`,
                  }}
              >
                  
              </div>
          </div>
          <div
              style={{
                  height: "70vh",
              }}
              className="each-slide"
          >
              {" "}
              <div
                  className="slide-image"
                  style={{
                      backgroundImage: `url(${hk13})`,
                  }}
              >
                 
              </div>
          </div>
          <div
              style={{
                  height: "70vh",
              }}
              className="each-slide"
          >
              <div
                  className="slide-image"
                  style={{
                      backgroundImage: `url(${hk17})`,
                  }}
              >
                 
              </div>
          </div>
      </Slide>
  </div>
</div>
    )
}



export default Slideshow;