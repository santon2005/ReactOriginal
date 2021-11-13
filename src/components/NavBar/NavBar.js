import { Fragment } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'


const NavBar = () => {
    return (
      <Fragment>
      <nav className='container'>
       <ul>
       <a href="#">HOME</a>
       <a href="#">PRODUCT</a>
       <a href="#">ABOUT</a>
       <a href="#">CONTACT</a>
        </ul>
        </nav>
        <CartWidget />
        </Fragment>


    );
  }

export default NavBar;
