import { Fragment } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'


const NavBar = () => {
    return (
      <Fragment>
      <nav className='container'>
       <ul>
       <a href="https://www.google.com/">HOME</a>
       <a href="https://www.google.com/">PRODUCT</a>
       <a href="https://www.google.com/">ABOUT</a>
       <a href="https://www.google.com/">CONTACT</a>
        </ul>
        </nav>
        <CartWidget />
        </Fragment>


    );
  }

export default NavBar;
