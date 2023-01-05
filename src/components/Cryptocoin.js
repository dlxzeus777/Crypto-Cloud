import React from 'react'

const Cryptocoin = ({ key, name, price, symbol, marketcap, volume, image, priceChange }) => {
    const market = marketcap.toLocaleString();
    return (
        <div key={key} className='crypto-container'>
            <div className='crypto'>
                <div className='crypto-name-logo'>
                    <img src={image} className='crypto-logo' alt='cryptos'/>
                    <div className='crypto-name'>
                        {name}
                        <span className='crypto-symbol'>({symbol})</span>
                        <div className='marketcap'>${market}</div>
                    </div>
                </div>
                <div className='crypto-price'>
                    <div className='price'>${price}</div>
                </div>
            </div>

        </div>
    )
}

export default Cryptocoin