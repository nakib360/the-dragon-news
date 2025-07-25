import React from 'react';
import SocialLogin from '../SocialLogin';
import FindUsOn from '../FindUsOn';
import Q_Zone from '../Q_Zone';
import Addvertisement from '../Addvertisement';

const RightNevber = () => {
    return (
        <div className='space-y-5'>
            <SocialLogin/>
            <FindUsOn/>
            <Q_Zone/>
            <Addvertisement/>
        </div>
    );
};

export default RightNevber;