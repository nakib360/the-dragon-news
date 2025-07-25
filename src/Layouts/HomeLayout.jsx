import React from 'react';
import Header from '../Components/Header';
import Navber from '../Components/Navber';
import LeftNevber from '../Components/Layout-componet/LeftNevber';
import RightNevber from '../Components/Layout-componet/RightNevber';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div className='bg-white text-black '>
            <header>
                <Header/>
            </header>
            <nav>
                <Navber/>
            </nav>
            <main className='w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3'>
                <aside className='col-span-3'>
                    <LeftNevber/>
                </aside>
                <section className='col-span-6'>
                    <Outlet/>
                </section>
                <aside className='col-span-3'>
                    <RightNevber/>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;