import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Components/Navber';

const AuthLayout = () => {
    return (
        <div className='bg-[#f3f3f3] text-black'>
            <header className='pt-5'>
                <Navber/>
            </header>
            <Outlet/>
        </div>
    );
};

export default AuthLayout;