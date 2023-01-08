import React from 'react'
import { FaEthereum } from 'react-icons/fa'
import { AiOutlineCheck } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'

const Cards = ({ nfts, placeBid, popupShow }) => {
    return (
        <div className='cards'>
            {nfts.map(nft => {
                const { name, image, user, userImage, eth, id, bidPlaced, } = nft
                return (
                    <div className='card' key={id}>
                        {bidPlaced ? '' : <BsFillTrashFill className='trash-icon' onClick={() => popupShow(id)} />}
                        <img src={image} alt='nft' className='nft-image' />
                        <div className='card-texts'>
                            <h3>{name}</h3>
                            <div className='user-image-name'>
                                <img src={userImage} alt='user-profile' className='nft-user-image' />
                                <p>@{user}</p>
                            </div>
                            <div className='eth-and-buttons'>
                                <div className='eth'>
                                    <FaEthereum className='etherium' />
                                    <p>{eth}</p>
                                </div>
                                {bidPlaced
                                    ?
                                    <button className='bidplaced-btn'><AiOutlineCheck />Bid placed</button>
                                    :
                                    <button className='placebid-btn' onClick={() => placeBid(id)}>Place bid</button>}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards