import React, { useState } from 'react'
import './style.css'
import Header from './components/Header'
import Home from './components/Home';
import Cryptocurrency from './components/Cryptocurrency';
import Marketplace from './components/Marketplace';
import { nftCards } from './data'
import { Routes, Route } from 'react-router-dom';

const App = () => {

    const [nfts, setNfts] = useState(nftCards);

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cryptocurrency' element={<Cryptocurrency />} />
                <Route path='/marketplace' element={<Marketplace nfts={nfts}/>} />
            </Routes>
        </>
    )
}

export default App