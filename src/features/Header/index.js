import React from 'react'
import logo from '../../logo.svg'
// import { NavLink } from 'react-router-dom'

import Image from '../../components/Image'

import './Header.css'

const Header = () => {
    return (
            <header>
                <div className="container header_wrap">
                        <a href="#" className="header__logo_wrap">
                            <Image src={logo} alt="logo" className='header__logo' />
                        </a>
                    <nav className="navigation">
                        <ul>
                            <li>Feed</li>
                            <li>Profile</li>
                        </ul>
                        {/* <NavLink to='/feed' >Feed</NavLink>
                        <NavLink to='/profile' >Profile</NavLink> */}
                    </nav>
                </div>
            </header>
    )
}

export default Header