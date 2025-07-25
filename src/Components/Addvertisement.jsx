import React from 'react';
import ad from "../assets/bg.png"

const Addvertisement = () => {
    return (
        <div>
            <p className='font-semibold'>Advertisement</p>
            <img className='w-full py-2' src={ad} alt="" />
        </div>
    );
};

export default Addvertisement;