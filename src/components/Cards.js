import React from 'react'
import { FaEthereum } from 'react-icons/fa'

const Cards = ({ nfts }) => {
    console.log(nfts)
    return (
        <div className='cards'>
            {nfts.map(nft => {
                const { name, image, user, userImage, eth } = nft
                return (
                    <div className='card'>
                            <img src={image} alt='nft' />
                        <div className='card-texts'>
                            <h3>{name}</h3>
                            <div className='user-image-name'>
                                <img src={userImage} alt='user-profile' />
                                <p>{user}</p>
                            </div>
                            <div className='eth-and-buttons'>
                                <div className='eth'>
                                    <FaEthereum className='etherium' />
                                    <p>{eth}</p>
                                </div>
                                <button className='placebid-btn'>Place bid</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards