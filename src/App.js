import React, { useState } from 'react'
import './style.css'
import Header from './components/Header'
import Home from './components/Home';
import Cryptocurrency from './components/Cryptocurrency';
import Marketplace from './components/Marketplace';
import { nftCards } from './data'
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'

const App = () => {

    const [nfts, setNfts] = useState(nftCards);

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/cryptocurrency' element={<Cryptocurrency />} />
                    <Route path='/marketplace' element={<Marketplace nfts={nfts} />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App