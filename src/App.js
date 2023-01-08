import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import uuid from 'react-uuid';

import './style.css';
import Header from './components/Header';
import Home from './components/Home';
import Cryptocurrency from './components/Cryptocurrency';
import Marketplace from './components/Marketplace';
import { nftCards } from './data';

const App = () => {

    // STATES //
    const [nfts, setNfts] = useState(nftCards);
    const [bid, setBid] = useState('');
    const [isBidPlaced, setIsBidPlaced] = useState(false);
    const [nftImage, setNftImage] = useState();
    const [userImage, setUserImage] = useState();
    const [showPopup, setShowPopup] = useState(false);
    const [popupValues, setPopupValues] = useState(
        {
            id: '',
            name: ''
        })
    const [inputs, setInputs] = useState({
        name: '',
        user: '',
        eth: '',
    });
    // FUNCTIONS // 
    
    // Place bid function: mapping through the nfts array and if the ids match the items name that we bid on gets displayed and the button changes and we change the nft object bidPlaced value from false to true.
    const placeBid = (id) => {
        setNfts((current) =>
            current.map((nft) => {
                if (nft.id === id) {
                    setBid(nft.name);
                    setIsBidPlaced(true);
                    return { ...nft, bidPlaced: true };
                }
                return nft;
            }),
        );
        setTimeout(() => {
            setIsBidPlaced(false);
        }, 7000);
    };
    // Handling delete mapping through the nft array and if the ids don't match it gets filtered out the array.
    const handleDelete = (id) => {
        setNfts((current) =>
            current.filter((nft) => {
                return nft.id !== id;
            }),
            setShowPopup(false)
        );
    };
    // Mapping through the nfts array and if the ids match we're setting the popupValues id and name to that particular nft.
    const popupShow = (id) => {
        setNfts((current) =>
            current.map((nft) => {
                if (nft.id === id) {
                    setPopupValues({ ...popupValues, id: id, name: nft.name })
                }
                return nft
            }))
        setShowPopup(true);
    }
    const popupClose = () => {
        setShowPopup(false);
    }
    // Getting the NFT image
    const handleNFTImage = (e) => {
        console.log(e.target.files);
        setNftImage(URL.createObjectURL(e.target.files[0]));
    };
    // Getting the user image
    const handleUserImage = (e) => {
        setUserImage(URL.createObjectURL(e.target.files[0]));
    };

    // Creating new NFT cards with your submitted data. It goes on top of the current objects, also setting the inputs back to nothing after the user successfully submitted the form.
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
    // Handling inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    /**
 * Hook that alerts clicks outside of the passed ref
 */

    // This function exits the popup whenever you click anywhere outside of it
    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShowPopup(false)
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

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
                            showPopup={showPopup}
                            useOutsideAlerter={useOutsideAlerter}
                            popupShow={popupShow}
                            popupClose={popupClose}
                            popupValues={popupValues}
                        />
                    }
                />
            </Routes>
        </HashRouter>
    );
};

export default App;