import hk4 from '../Images/hk4.png';
import cart from '../Images/cart.svg';
import {
  Link
} from 'react-router-dom';


const NavBar = () => {
return(
    <navbar className="navbar_main">
    <figure>
        <img className="navbar_visual navbar_items" src={hk4} alt="Logo" /> 
      </figure>
      <img className="cart-icon" src={cart} alt="cart" /> 
      <Link className="navbar_options navbar_items" to="/"> Home </Link>
      <Link className="navbar_options navbar_items" to="/ProductsPage"> Products </Link>
      <Link className="navbar_options navbar_items" to="/ContactPage"> Contact Us </Link>
</navbar>
);
}

export default NavBar;