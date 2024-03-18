import React, { useEffect } from 'react';

const ThankYou = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = '/';
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='w-full h-full'>
            <div className='absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]'>
                <h1 className='text-[3vw] font-bold font-sans'>
                    Thank You For Your Feedback
                </h1>
            </div>
        </div>
    );
};

export default ThankYou;
