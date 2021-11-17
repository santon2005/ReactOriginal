import { Fragment } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'


const NavBar = () => {
    return (
      <Fragment>
      <nav className='container'>
       <ul>
        <CartWidget />
       <a href="https://www.google.com/">HOME</a>
       <a href="https://www.google.com/">IPAD</a>
       <a href="https://www.google.com/">IPHONE</a>
       <a href="https://www.google.com/">MAC</a>
       <a href="https://www.google.com/">IPOD</a>
       <a href="https://www.google.com/">AIRPODS</a>

        </ul>
        </nav>
        </Fragment>


    );
  }

export default NavBar;
