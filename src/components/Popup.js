import React, { useRef } from 'react'

const Popup = ({ useOutsideAlerter, handleDelete, popupClose, popupValues }) => {

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <div className="popup-overlay">
            <div className="popup" ref={wrapperRef}>
                <div className='popup-content'>
                    <h4>Do you really wanna delete {popupValues.name}</h4>
                    <div className='popup-btns'>
                        <button className='yes-btn popup-btn' onClick={() => handleDelete(popupValues.id)}>Yes</button>
                        <button className='no-btn popup-btn' onClick={popupClose}>No</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup