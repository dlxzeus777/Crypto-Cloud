import React, { useState } from 'react'
import './style.css'
import Header from './components/Header'
import Home from './components/Home';
import Cryptocurrency from './components/Cryptocurrency';
import Marketplace from './components/Marketplace';
import { nftCards } from './data'
import { Routes, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'

const App = () => {

    const [nfts, setNfts] = useState(nftCards);
    const [bid, setBid] = useState('');
    const [isBidPlaced, setIsBidPlaced] = useState(false);

    const placeBid = (id) =>
    {
        for(let i = 0; i < nfts.length; i++)
        {
            let nftId = nfts[i].id
            if(nftId === id)
            {
                setBid(nfts[i].name)
            }
        }
        setIsBidPlaced(true);

        setTimeout(() =>
        {
            setIsBidPlaced(false);
        }, 2000);
        
    }

    return (
        <>
            <HashRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cryptocurrency' element={<Cryptocurrency />} />
                    <Route path='/marketplace' element={<Marketplace nfts={nfts} placeBid={placeBid} bid={bid} isBidPlaced={isBidPlaced} />} />
                </Routes>
            </HashRouter>
        </>
    )
}

export default App