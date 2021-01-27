import hk4 from '../Images/hk4.png';
import {
  Link
} from 'react-router-dom';


const NavBar = () => {
return(
    <navbar class="navbar_main">
    <figure>
        <img 
        class="navbar_visual navbar_items" 
        src={hk4} 
        alt="Logo" 
        /> 
      </figure>
      <Link class="navbar_options navbar_items" to="/"> Home </Link>
      <Link class="navbar_options navbar_items" to="/ProductsPage"> Products </Link>
    <a class="navbar_options navbar_items" href="Contact.html">
      Contact Us
      </a>    
</navbar>
);
}

export default NavBar;