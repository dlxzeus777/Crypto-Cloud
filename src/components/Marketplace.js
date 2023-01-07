import React from 'react'
import Cards from './Cards'

const Marketplace = ({ nfts, placeBid, bid, isBidPlaced, handleDelete, createNewNFT, handleNFTImage, handleUserImage, handleChange, inputs }) => {

  return (
    <div className='marketplace-container'>
      {isBidPlaced && <div className='bid'>Bid placed on {bid}</div>}
      <h3 className='nft-header'>Add your own NFT!</h3>
      <form className='add-nft' onSubmit={createNewNFT}>
        <label htmlFor='nft-image'>NFT image</label>
        <input
          type='file'
          placeholder='NFT Image'
          onChange={handleNFTImage}
          className='file'
          id='nft-image'
          required
        />
        <input
          type='text'
          placeholder='NFT Name'
          name='name'
          onChange={handleChange}
          value={inputs.name}
          required
        />
        <label htmlFor='user-image'>User Image</label>
        <input
          type='file'
          placeholder='User Image'
          onChange={handleUserImage}
          className='file'
          id='user-image'
          required
        />

        <input
          type='text'
          placeholder='Username'
          name='user'
          onChange={handleChange}
          value={inputs.user}
          required
        />
        <input
          type='text'
          placeholder='Etherium'
          name='eth'
          onChange={handleChange}
          value={inputs.eth}
          required
        />
        <button className='add-nft-btn'>Add your NFT</button>
      </form>
      <h1 className='marketplace-heading'>Hot Drops 🔥</h1>
      <Cards nfts={nfts} placeBid={placeBid} handleDelete={handleDelete} />
    </div>
  )
}

export default Marketplace