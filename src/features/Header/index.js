import React from 'react'
import logo from '../../logo.svg'
import { Link, NavLink } from 'react-router-dom'

import Image from '../../components/Image'

import './Header.css'

const Header = () => {
    return (
            <header>
                <div className="container header_wrap">
                        <Link to='/' className="header__logo_wrap">
                            <Image src={logo} alt="logo" className='header__logo' />
                        </Link>
                    <nav className="navigation">
                        <ul>
                            <li>
                                <NavLink
                                    exact
                                    to='/'
                                    className="navigation__link"
                                >
                                    Feed
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/profile'
                                    className="navigation__link"
                                >
                                    Profile
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
    )
}

export default Header