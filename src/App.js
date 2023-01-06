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

    const placeBid = (id) => {
        setNfts(current =>
            current.map(nft => {
                if (nft.id === id) {
                    setBid(nft.name)
                    return { ...nft, bidPlaced: true };
                }

                return nft;
            }),
        );

        setIsBidPlaced(true);
        setTimeout(() => {
            setIsBidPlaced(false);
        }, 7000);
    };

    const handleDelete = (id) =>
    {
        setNfts(current =>
            current.filter(nft =>
            {
                return nft.id !== id;
            }))
    }

    return (
        <>
            <HashRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cryptocurrency' element={<Cryptocurrency />} />
                    <Route path='/marketplace' element={<Marketplace nfts={nfts} placeBid={placeBid} bid={bid} isBidPlaced={isBidPlaced} handleDelete={handleDelete}/>} />
                </Routes>
            </HashRouter>
        </>
    )
}

export default App