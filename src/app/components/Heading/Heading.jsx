'use client'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';

const Heading = ({ heading }) => {

    const title = useRef(null);
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        const pin = gsap.fromTo(title.current,
            {
                scale: 1
            },
            {
                scrollTrigger: {
                    trigger: title.current,
                    start: "top center",
                    end: "300 top",
                    toggleActions: "restart pause resume pause",
                    scrub: 1,
                    pin: true
                },

                scale: 50,
            })

        return () => {
            {/* A return function for killing the animation on component unmount */ }
            pin.kill();
        };
    }, [])

    return (
        <div>
            <h1 ref={title} className='mt-96 text-4xl sm:text-7xl font-bold text-center mb-10'>
                {heading}
            </h1>
        </div>
    );
};

export default Heading;