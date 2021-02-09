import hk5 from '../Images/hk5.png';
import me from '../Images/me.jpeg';

const Footer = () => {
    return(
        <footer>
  <div class="grid-container">
    <div class="grid-item item1">
      <p class="copyright_text">Hello Kitty Shop &#169; </p>
    </div>
    
       <div class="grid-item item2">
         <div class="socials">
         <a href="https://www.facebook.com"> 
         <img 
            src="https://image.flaticon.com/icons/svg/1051/1051258.svg" 
            alt="facebook" /> 
              </a> 
              </div>
      
        
        <div class="socials">
           <a href= "https://www.snapchat.com/">
             <img 
             src="https://image.flaticon.com/icons/svg/1051/1051271.svg" 
             alt="snapchat" /> 
             </a> 
             </div>
        
        <div class="socials">
          <a href="https://www.youtube.com/"> 
           
          <img 
          src="https://image.flaticon.com/icons/svg/1051/1051248.svg" 
          alt="youtube" 
          />  
           </a>
           </div>   
        </div> 
      
      <div class="grid-item item3">
  <img class="footer_logo"
       src= {hk5} 
       alt="logo" />
  </div> 
     <div class="grid-item item4">
    <img id="mePic" 
        src={me}
        alt="creator" /> 
    <p id="byMe"> Website by Fatima Cruz </p>  
    </div>
    </div>
    </footer>
    );
}

export default Footer;