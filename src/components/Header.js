import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

    return (
        <header>
            <nav>
                <div className='nav-heading'>
                    <NavLink to='/' className='logo'><h2>CRYPTO
                        <span className='font-gradient'>CLOUD</span>
                    </h2></NavLink>
                </div>
                <ul className='nav-list'>
                    <NavLink className={`nav-items ${({ isActive }) => (isActive ? 'active' : 'inactive')}`} to='/'>Home</NavLink>
                    <NavLink className={`nav-items ${({ isActive }) => (isActive ? 'active' : 'inactive')}`} to='/cryptocurrency'>Cryptocurrency</NavLink>
                    <NavLink className={`nav-items ${({ isActive }) => (isActive ? 'active' : 'inactive')}`} to='/marketplace'>Marketplace</NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default Header