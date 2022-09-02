import classes from './UIBasics.css';
import { HashLink as Link } from 'react-router-hash-link';

function Header() {
    
    return <div className= "flex-row align-center color-white absolute">
        <Link to='/' className= "top-menu-item">Home</Link>
        <Link to='/tech' className= "top-menu-item">Tech</Link>
        <Link to='/creative' className= "top-menu-item">Creative</Link>
        <Link to='/about' className= "top-menu-item">About</Link>
        <Link to='/contact' className= "top-menu-item">Contact</Link>
    </div>;
  }
  
  export default Header;
  