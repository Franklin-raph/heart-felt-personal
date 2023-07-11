import React from 'react'
import heartFeltLogo from "../../assets/images/heartfelt logo 2.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='parent-container-padding flex-between'>
        <div className='flex-between'>
            <a href="/">
                <img src={heartFeltLogo} alt="" />
            </a>
            <ul className='flex-between'>
                <li>
                    <Link to="/about-us" >About</Link>
                </li>
                <li>
                    <Link to="/pricing" >Pricing</Link>
                </li>
                <li>
                    <Link to="/try-demo">Try Demo</Link>
                </li>
            </ul>
        </div>
        <div className='flex-between'>
            <div className='search-input flex-between'>
                <i class="ri-search-line"></i>
                <input type="text" placeholder='Search'/>
            </div>
            <button className='secondary-button'>Sign in</button>
            <button className='primary-button'>Send a card</button>
        </div>
    </nav>
  )
}

export default Navbar