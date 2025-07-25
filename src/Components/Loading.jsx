import React from 'react';

const Loading = () => {
    return (
        <div className='bg-white min-h-screen flex justify-center items-center'>
            <div className="flex space-x-2">
                <div className="w-5 h-5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-5 h-5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-5 h-5 bg-blue-500 rounded-full animate-bounce"></div>
            </div>
        </div>
    );
};

export default Loading;
