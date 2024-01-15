'use client'
import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';

const Heading = ({ heading }) => {
    return (
        <div>
            <Zoom cascade>
                <h1 className='mt-96 text-4xl sm:text-7xl font-bold text-center'>
                    {heading}
                </h1>
            </Zoom>
        </div>
    );
};

export default Heading;