import React, { useContext, useState } from 'react'
import ReactDOM  from 'react-dom'
import {Link } from 'react-router-dom'
import { CartContext } from '../../ContextProvider'
import SearchBar from '../user/SearchBar'
import './Navbar.css'

const Navbar = () => {
  const {isLogin} = useContext(CartContext)
  const [showNavigation,setShowNavigation] = useState(false);
  const NavigationHandler = () => {
    if(showNavigation === false){
      setShowNavigation(true);
    } else{
      setShowNavigation(false);
    }
  }

  const showSideContent = () =>{
const sideContent = 
<nav className='sideNav showMb' >
<ul className='showMb'>
<li className=''><Link>Shopify</Link></li>
<li className=''><Link to="/">Home</Link></li>
<li className=''> <Link to="/About">About</Link></li>
<li className=''>Contact us</li>
</ul>
</nav>
   return ReactDOM.createPortal(sideContent,document.getElementById("navOverlay"))
  }
  return (
    <>
    
     { !showNavigation && <li className='showMb' onClick={NavigationHandler}>
      <hr></hr>
      <hr></hr>
      <hr></hr>
     </li>
    }
     { showNavigation && showSideContent()}
    <nav className='navbar'>
     <div className='hideMb'>
     <ul>
        <li className='logo'><Link className='naviteminner'>Shopify</Link></li>
        <li className='navitem'><Link className='naviteminner' to="/Home">Home</Link></li>
        <li className='navitem'> <Link className='naviteminner' to="/About">About</Link></li>
        <li className='navitem'> <Link className='naviteminner' to="/Feedback">Feedback</Link></li>
        <li className='' ><SearchBar MyClass='search-nav'/></li>
     </ul>
     {  isLogin ? <button className='Login' ><Link to={'/Logout'}>logout</Link></button> : <button className='Login' ><Link to={'/Login'}>Login</Link></button> }
     <span className='cartlogo'><Link to="/Cart"><img src='../Resources/BrandLogo/CartLogo.png'/></Link></span>
     </div>
    </nav>
    </>
  )
}

export default Navbar