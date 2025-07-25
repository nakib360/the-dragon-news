import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router';

const LatestNews = () => {
    return (
        <div className='mx-15 bg-gray-200 p-2'>
            <div className='flex gap-2'>
                <p className='bg-red-500 p-5 text-white'>Latest</p>
                <Marquee pauseOnHover={true} speed={100}><Link>Cyclone Hamoon Slams Bangladesh Coastline, Thousands Evacuated Amid Widespread Damage</Link></Marquee>
            </div>
        </div>
    );
};

export default LatestNews;