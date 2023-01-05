import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav>
            <div className='nav-heading'>
                <Link to='/' className='logo'><h2>CRYPTO
                    <span className='font-gradient'>CLOUD</span>
                </h2></Link>
            </div>
            <ul className='nav-list'>
                <Link className='nav-items' to='/'>Home</Link>
                <Link className='nav-items' to='/cryptocurrency'>Cryptocurrency</Link>
                <Link className='nav-items' to='/marketplace'>Marketplace</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header