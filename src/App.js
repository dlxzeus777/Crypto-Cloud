import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import uuid from 'react-uuid';

import './style.css';
import Header from './components/Header';
import Home from './components/Home';
import Cryptocurrency from './components/Cryptocurrency';
import Marketplace from './components/Marketplace';
import { nftCards } from './data';

const App = () => {
    const [nfts, setNfts] = useState(nftCards);
    const [bid, setBid] = useState('');
    const [isBidPlaced, setIsBidPlaced] = useState(false);
    const [nftImage, setNftImage] = useState();
    const [userImage, setUserImage] = useState();
    const [inputs, setInputs] = useState({
        name: '',
        user: '',
        eth: '',
    });

    const placeBid = (id) => {
        setNfts((current) =>
            current.map((nft) => {
                if (nft.id === id) {
                    setBid(nft.name);
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

    const handleDelete = (id) => {
        setNfts((current) =>
            current.filter((nft) => {
                return !nft.bidPlaced ? nft.id !== id : nft;
            }),
        );
    };

    const handleNFTImage = (e) => {
        console.log(e.target.files);
        setNftImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleUserImage = (e) => {
        setUserImage(URL.createObjectURL(e.target.files[0]));
    };

    const createNewNFT = (e) => {
        e.preventDefault();
        setNfts((current) => [
            {
                id: uuid(),
                name: inputs.name,
                image: nftImage,
                user: inputs.user,
                userImage: userImage,
                eth: inputs.eth,
                bidPlaced: false,
            },
            ...current,
        ]);

        setInputs({
            name: '',
            user: '',
            eth: '',
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    return (
        <HashRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cryptocurrency" element={<Cryptocurrency />} />
                <Route
                    path="/marketplace"
                    element={
                        <Marketplace
                            nfts={nfts}
                            placeBid={placeBid}
                            bid={bid}
                            isBidPlaced={isBidPlaced}
                            handleDelete={handleDelete}
                            createNewNFT={createNewNFT}
                            handleNFTImage={handleNFTImage}
                            handleUserImage={handleUserImage}
                            handleChange={handleChange}
                            inputs={inputs}
                        />
                    }
                />
            </Routes>
        </HashRouter>
    );
};

export default App;