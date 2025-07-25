import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa6';

const SocialLogin = () => {
    return (
        <div>
            <p className='font-semibold'>Log in with</p>
            <div className='*:w-full flex flex-col gap-3 py-3'>
                <button className='btn bg-gray-100 border-gray-100 text-black'><FaGoogle/> Log in with google</button>
                <button className='btn bg-gray-100 border-gray-100 text-black'><FaGithub/> Log in with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;