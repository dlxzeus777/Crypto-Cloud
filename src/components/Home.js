import React from 'react'
import heroImage from '../assets/hero.svg'
import opensea from '../assets/openSea-logo.svg'
import trustwallet from '../assets/trustWallet-logo.svg'
import venly from '../assets/venly-logo.svg'
import wazirx from '../assets/wazirx-logo.svg'
import enjin from '../assets/enjin-logo.svg'

const Home = () => {
    return (
        <>
            <div className='home-container'>
                <div className='hero-text'>
                    <h1 className='hero-heading'>Discover, Collect & Mint Rare NFTs</h1>
                    <p>Empowers traders, liquidity providers & developers to participate in an open financial marketplace with no barriers to entry.</p>
                    <div className='btns'>
                        <button className='explore-btn'>Explore</button>
                        <button className='hiw-btn'>How it works?</button>
                    </div>
                </div>
                <div className='hero-image'>
                    <img src={heroImage} alt='hero' className='hero-img' />
                </div>
            </div>
            <div className='sponsors-container'>
                <div className='sponsors'>
                    <img src={opensea} alt='sponsors' className='sponsors-img'/>
                    <img src={trustwallet} alt='sponsors' className='sponsors-img'/>
                    <img src={venly} alt='sponsors' className='sponsors-img'/>
                    <img src={wazirx} alt='sponsors' className='sponsors-img'/>
                    <img src={enjin} alt='sponsors' className='sponsors-img'/>
                </div>
            </div>

        </>
    )
}

export default Home