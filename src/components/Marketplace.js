import React from 'react'
import Cards from './Cards'

const Marketplace = ({nfts}) => {
  return (
    <div className='marketplace-container'>
        <h1 className='marketplace-heading'>Hot Drops 🔥</h1>
        <Cards nfts={nfts}/>
    </div>
  )
}

export default Marketplace