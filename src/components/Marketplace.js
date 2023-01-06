import React from 'react'
import Cards from './Cards'

const Marketplace = ({ nfts, placeBid, bid, isBidPlaced, handleDelete }) => {

  return (
    <div className='marketplace-container'>
      {isBidPlaced && <div className='bid'>Bid placed on {bid}</div>}
      <h1 className='marketplace-heading'>Hot Drops 🔥</h1>
      <Cards nfts={nfts} placeBid={placeBid} handleDelete={handleDelete} />
    </div>
  )
}

export default Marketplace