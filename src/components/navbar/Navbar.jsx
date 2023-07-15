import {useEffect} from 'react'
import heartFeltLogo from "../../assets/images/heartfelt logo 2.png"
import { Link } from 'react-router-dom'

const Navbar = () => {

    useEffect(() => {
        const navOpen = document.querySelector(".ri-menu-line")
        const navClose = document.querySelector(".ri-close-fill")
        const nav = document.querySelector("nav ul")

        navOpen.addEventListener("click", ()=>{
            nav.style.top = "12%"
            navOpen.style.display = "none"
            navClose.style.display = "block"
        })

        navClose.addEventListener("click", ()=>{
            nav.style.top = "-100%"
            navOpen.style.display = "block"
            navClose.style.display = "none"
        })
    },[])

  return (
    <div className='nav'>
        <nav className='parent-container-padding flex-between' >
            <div className='flex-between mobile-nav'>
                <a href="/">
                    <img src={heartFeltLogo} alt="" />
                </a>
                <div className="toggler">
                    <i class="ri-menu-line"></i>
                    <i class="ri-close-fill"></i>
                </div>
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
                    <div className='flex-between mobile-search'>
                        <div className='search-input flex-between'>
                            <i class="ri-search-line"></i>
                            <input type="text" placeholder='Search'/>
                        </div>
                        <button className='secondary-button'>Sign in</button>
                        <button className='primary-button'>Send a card</button>
                    </div>
                </ul>
            </div>
            <div className='flex-between desktop-search'>
                <div className='search-input flex-between'>
                    <i class="ri-search-line"></i>
                    <input type="text" placeholder='Search'/>
                </div>
                <button className='secondary-button'>Sign in</button>
                <button className='primary-button'>Send a card</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar