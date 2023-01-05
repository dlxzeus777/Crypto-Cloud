import React, { useState, useEffect } from 'react'
import Cryptocoin from './Cryptocoin';

const Cryptocurrency = () => {

    const [cryptos, setCryptos] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        try {
            fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
                .then((response) => response.json())
                .then((data) => setCryptos(data));
        }
        catch (e) {
            console.log(e)
        }
    }, []);

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const filteredCoins = cryptos.filter((crypto) =>
        crypto.name.toLowerCase().includes(input.toLowerCase())
    );

        return (
            <>
                <h1 className='popular-cryptos'>Popular Cryptos</h1>
                <div className='coins'>
                    <form className='form'>
                        <input type='text' placeholder='Search a cryptocurrency' value={input} onChange={handleChange} />
                    </form>
                    {filteredCoins.map(crypto => {
                        return (
                            <Cryptocoin
                                key={crypto.key}
                                name={crypto.name}
                                price={crypto.current_price}
                                symbol={crypto.symbol}
                                marketcap={crypto.total_volume}
                                volume={crypto.market_cap}
                                image={crypto.image}
                                priceChange={crypto.price_change_percentage_24h}
                            />
                        )
                    })}</div>
            </>
        )
    }

export default Cryptocurrency